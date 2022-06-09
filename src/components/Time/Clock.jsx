import { useEffect, useState } from "react";

function Clock() {
    const [seconds, setSeconds] = useState()

    useEffect(() => {
        setInterval(() => {
            const newTime = new Date()
            setSeconds(newTime.toLocaleString())
        }, 1000)
    }, []);

    return {seconds}
}

export default Clock