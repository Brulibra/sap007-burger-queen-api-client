function ValidateRegister (role, name, email, password) {
    const registerCredentials ={
        role: role,
        name: name,
        email: email,
        password: password,
    }
    return console.log(registerCredentials)
}

export default ValidateRegister