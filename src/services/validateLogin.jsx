import { useState } from "react";


function LoggedUser() {
    const userCredentials = {
        email: "",
        password: "",
    }

    const [credentials, setCredentials] = useState({userCredentials})

    const handleInputChange = (e) => {
        setCredentials(e.target.value);
        console.log(e)
        console.log(setCredentials)
    }
}

export default LoggedUser