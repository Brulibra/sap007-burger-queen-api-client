
function ValidateRegister(role, name, email, password, checkpassword) {

    const registerCredentials = {
        role: role,
        name: name,
        email: email,
        password: password,
        checkpassword: checkpassword,
    }
    console.log(registerCredentials)

    

    const validations = (e) => {
        e.preventDefault()
        if(registerCredentials.password !== registerCredentials.checkpassword){
            console.log("as senhas não batem")
        }
    }
    return validations;
}
export default ValidateRegister

// !/\S+@\S+\.\S+/ regex email
// const inputs = {
//     role: registerCredentials.role === "" ? console.log("preencha o role") : console.log("preenchido"),
//     name: registerCredentials.name === "" ? console.log("preencha o nome") : console.log("preenchido"),
//     correctEmail: /\S+@\S+\.\S+/.test(registerCredentials.email) ? console.log("email.correto") : console.log("email.errado"),
//     password: registerCredentials.password === "" ? console.log("preencha a senha") : console.log("preenchido"),
//     checkpassword: registerCredentials.password !== registerCredentials.checkpassword ? console.log("As senhas precisam bater") : console.log("As senhas coincidem"),
// }