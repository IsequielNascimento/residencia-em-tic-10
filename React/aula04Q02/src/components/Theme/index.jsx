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
            <div className="Theme" style={{ backgroundColor: theme === "claro" ? "blue" : "black" }}>


                <button onClick={handleTheme} style={{ backgroundColor: theme === "claro" ? "black" : "blue"}}>
                    {theme === "claro" ? "escuro" : "claro"}
                </button>
            </div>
        </>
       )
}