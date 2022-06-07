const apiLink = "https://lab-api-bq.herokuapp.com"

export const userCreate = (user) => {
    return fetch(`${apiLink}/users`, {
        method: "POST",
        headers:{
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: user.name,
            email: user.email,
            password: user.password,
            role: user.role,
            restaurant: "Burguer da Tia Nêna",
        })
    }).then((res) => res.json())
}