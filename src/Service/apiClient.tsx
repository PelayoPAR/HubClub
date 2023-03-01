import axios from "axios"

const baseURL = process.env.REACT_APP_BACKEND_URL || "http://localhost:5000"

const apiClient = axios.create({ baseURL })

export default apiClient
