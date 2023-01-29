import axios from "axios";

class CommentsAPI {
    static fetchAll = async () => {
        const response = await axios.get("http://localhost:8080/api/v1/comments")
        return response.data
    }
}

export default CommentsAPI