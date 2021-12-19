export default function Triadensitz(){
    return(
        <div style={triadensitz.container}>
            <h2 style={triadensitz.ueberschrift}>Triadensitz</h2>
            <p style={triadensitz.para}>Sie haben ihre Sitze in Hongkong, Vietnam, Macau, Taiwan und China, operieren aber auch fern ihres Ursprungslandes zum Beispiel in den USA oder in Europa, seit den 1930er Jahren in Großbritannien. Es gibt schätzungsweise über 5000 Triaden in China, die oft miteinander Bündnisse schließen.</p>
        </div>
    )
}

const triadensitz = {
    container: {
        margin: 0,
        paddingTop: 150,
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

    para: {
        color: "white",
        paddingTop: 30,
        paddingBottom: 30,
        marginBottom: 0
    }
}