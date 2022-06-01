import { useState } from "react";

function LoggedUser() {

    const userCredentials = {
        email: "",
        password: "",
    }

    const [credentials, setCredentials] = useState({ userCredentials });

    const handleInputChange = (e) => {
        const { name, value } = e.targuet;

        setCredentials({ ...credentials, [name]: value });
    }
    return { handleInputChange }
}

export default LoggedUser