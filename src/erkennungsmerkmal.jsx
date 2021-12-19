export default function Erkennungsmerkmal(){
    return(
        <div style={kleidung.container}>
            <h2 style={kleidung.ueberschrift}>Merkmale der Triaden</h2>
            <ul style={kleidung.liste}>
                <li>Armbänder mit Kugeln (Buddhismus-Armbänder)</li>
                <li>Halsketten (z.B. aus Edelstahl)</li>
                <li>Tattoos (z.B. Drache, Phoenix, Koi-Karpfen, Dreieck, Guan Yu)</li>
            </ul>
        </div>
    )
}

const kleidung = {
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

    liste: {
        color: "white",
        paddingTop: 30,
        paddingBottom: 30,
        marginBottom: 0
    }
}