import axios from "axios";

class CommentsAPI {
    static fetchAll = async () => {
        const response = await axios.get("http://localhost:3000/comments")
        return response.data
    }
}

export default CommentsAPI