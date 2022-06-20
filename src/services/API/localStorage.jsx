export const apiLink = "https://lab-api-bq.herokuapp.com"

export const getToken = () => localStorage.getItem("token")
export const getRole = () => localStorage.getItem("role")

export const logOut = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("role")
}