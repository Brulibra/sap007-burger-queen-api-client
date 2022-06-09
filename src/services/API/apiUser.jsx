const apiLink = "https://lab-api-bq.herokuapp.com"

export const userCreate = (user) => {
    return fetch(`${apiLink}/users/`, {
        method: "POST",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: user.name,
            email: user.email,
            password: user.password,
            role: user.role,
            restaurant: "Burguer da Tia Nêna",
        })
    })
}

export const loginUser = (user) => {
    return fetch(`${apiLink}/auth/`, {
        method: "POST",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email: user.email,
            password: user.password
        })
    })
}