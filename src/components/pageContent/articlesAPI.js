import axios from "axios";

class ArticlesAPI {
    static fetchAll = async () => {
        const response = await axios.get("http://localhost:3000/articles")
        return response.data
    }
}

export default ArticlesAPI