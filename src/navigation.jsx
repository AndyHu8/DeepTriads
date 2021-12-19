import { useState } from "react"

export default function Navigation(){
    const [size, setSize] = useState("1.2em");

    const navi = {
        navi: {
            margin: 0,
            padding: 0,
            backgroundColor: "black",
            height: "auto",
            width: "100%",
            top: 0,
            position: "fixed",
            overflow: "hidden"
        },
    
        schrift: {
            paddingLeft: "5%",
            paddingBottom: 20,
            paddingTop: 20,
            margin: 0,
            borderBottom: "2px solid white",
            color: "white",
            transition: "0.5s",
            fontSize: `${size}`
        },

        link: {
            color: "#444",
            textDecoration: "none"
        }
    }

    return(
        <div style={navi.navi} onMouseEnter={() => setSize("1.5em")} onMouseLeave={() => setSize("1.2em")}>
            <h1 style={navi.schrift}>Deep Triads - <a style={navi.link} href="https://triaden.netlify.app/" target="_blank"> Mehr Information</a></h1>
        </div>
    )
}