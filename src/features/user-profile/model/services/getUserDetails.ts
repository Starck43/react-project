import axios from "axios"


export const getUserDetails = async (id: string = "") => {
        const response = await axios.get("http://localhost:8000/profile")
        console.log(response.data)
        if (!response.data) return null
        return response.data
    }
