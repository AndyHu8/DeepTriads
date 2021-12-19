export default function Kleidung(){
    return(
        <div style={kleidung.container}>
            <h2 style={kleidung.ueberschrift}>Kleidung der Triaden</h2>
            <ul style={kleidung.liste}>
                <li>Schwarze Kleidung</li>
                <li>Weiße Kleidung</li>
                <li>Anzüge</li>
            </ul>
        </div>
    )
}

const kleidung = {
    container: {
        margin: 0,
        paddingTop: 50,
        backgroundColor: "#444",
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