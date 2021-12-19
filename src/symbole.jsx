export default function Symbole(){
    return(
        <div style={symbole.container}>
            <h2 style={symbole.ueberschrift}>Symbole der Triaden</h2>
            <p style={symbole.para}>Symbole der Triaden sind zum einen das Dreieck und zum anderen der Drache:</p>
            <ul style={symbole.liste}>
                <li>Das Dreieck (“Sanhehui”) bedeutet Gesellschaft der Triaden / der Drei Harmonien. Diese steht für Himmel, Erde und Menschheit</li>
                <li>Das Symbol der Triaden ist der Drache, der nach chinesischem Verständnis Weisheit und Kraft verkörpert. Als Erkennungszeichen verwenden die Triaden-Mitglieder untereinander Geheimsymbole und verständigen sich per Finger- oder Sprachcode</li>
            </ul>
        </div>
    )
}

const symbole = {
    container: {
        margin: 0,
        paddingTop: 50,
        backgroundColor: "#2d2d2d",
        paddingLeft: "10%",
        paddingRight: "10%"
    },

    ueberschrift: {
        margin: 0,
        color: "white",
        border: "1px solid white",
        borderRadius: "5px",
        padding: 10
    },

    para: {
        color: "white",
        paddingTop: 30,
        marginBottom: 0
    },

    liste: {
        color: "white",
        paddingTop: 30,
        paddingBottom: 30,
        marginBottom: 0
    }
}