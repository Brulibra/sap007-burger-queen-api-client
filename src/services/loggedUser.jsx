function LoggedUser(email, password) {
    const userCredentials = {
        email: email,
        password: password,
    }
    return console.log(userCredentials)
}

export default LoggedUser