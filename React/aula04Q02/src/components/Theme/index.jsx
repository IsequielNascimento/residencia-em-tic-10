import { useEffect, useState } from "react";
import "./styles.css";


export default function Theme() {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "claro")

    function handleTheme() {
        setTheme((prevTheme) => (prevTheme === "claro" ? "escuro" : "claro"))
    }

    useEffect(() => {
        localStorage.setItem("theme", theme)

    }, [theme])


    return (
        <>
            <div className="Theme" style={{ backgroundColor: theme === "claro" ? "gray" : "black" }}>


                <button onClick={handleTheme}>
                    {theme === "claro" ? "escuro" : "claro"}
                </button>
            </div>
        </>
    )
}