import axios from "axios";
import urls from "./routes";


const loginUser = async (data) => {
    try {
        const response = await axios.post(
            urls.AUTH.login,
            JSON.stringify(data),
            {
                headers: {
                    "Content-Type": "application/json"
                }
            }
        )

        return response
    } catch(e){
        return e
    }
}

const registerUser = async (data) => {
    try {
        const response = await axios.post(
            urls.AUTH.register,
            JSON.stringify(data),
            {
                headers: {
                    "Content-Type": "application/json"
                }
            }
        )

        return response
    } catch(e){
        return e
    }
}

export {
    loginUser,
    registerUser
}