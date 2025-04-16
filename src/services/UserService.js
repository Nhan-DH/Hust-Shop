import axios from "axios"

export const loginUser = async (data) => {
  const res = await axios.post(`${process.env.REACT_APP_BACKEND_API_URL}/user/sign-in`)
  return res.data
}