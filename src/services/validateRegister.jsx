import {userCreate} from "./apiUser.jsx"

function ValidateRegister(role, name, email, password, checkpassword) {

    const registerCredentials = {
        role: role,
        name: name,
        email: email,
        password: password,
        checkpassword: checkpassword,
    }
    console.log(registerCredentials)

    if (!/\S+@\S+\.\S+/.test(registerCredentials.email)) {
        console.log("não é email")
    } else if (registerCredentials.password !== registerCredentials.checkpassword) {
        console.log("as senhas não batem")
    }else{
        userCreate(registerCredentials).then((res) => {
            switch(res.status){
                case 200: console.log("conseguiu")
                // return res.json();
                break;
                case 403: console.log("Email já cadastrado")
                // return res.json();
                break
                default: console.log("não deu :c")
                break;
            }
        })
            .then((data) => {
                console.log(data)
                localStorage.setItem("token", data.token)
            })
    }
}
export default ValidateRegister
