import { useState } from "react"

export default function Footer(){
    const [linkColor, setLinkColor] = useState("white");

    const quellen = {
        container: {
            margin: 0,
            backgroundColor: "black",
            height: "auto",
            width: "100%",
            display: "flex",
            justifyContent: "center"
        },
    
        ueberschrift: {
            margin: 0,
            color: "white",
            fontSize: "1.2em",
            paddingTop: 20,
            paddingBottom: 20
        },
    
        link: {
            color: `${linkColor}`,
            textDecoration: "none",
            transition: "0.5s"
        }
    }

    return(
        <div style={quellen.container}>
            <h1 style={quellen.ueberschrift} onMouseEnter={() => setLinkColor("#444")} onMouseLeave={() => setLinkColor("white")}><a style={quellen.link} href="https://hulongofficial.de/" target="_blank">Developed by Hulong</a></h1>
        </div>
    )
}