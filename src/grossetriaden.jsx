export default function GrosseTriaden(){
    return(
        <div style={grosseTriaden.container}>
            <h2 style={grosseTriaden.ueberschrift}>Große Triaden</h2>
            <div style={grosseTriaden.flexbox}>
                <div>
                    <p style={grosseTriaden.para}>Triadenorganisationen in Hongkong sind beispielsweise:</p>
                    <ul style={grosseTriaden.liste}>
                        <li>14K-Triade (30.000 Mitglieder, 35 Clans)</li>
                        <li>Luen Group (mehr als 12000 Mitglieder)</li>
                        <li>Shui Fong (30.000 Mitglieder)</li>
                        <li>Sun Yee On (50.000 Mitglieder)</li>
                        <li>Tai Huen Chai – Big Circle Gang (5000 bis 10.000 Mitglieder)</li>
                        <li>Wo Hop To (50.000 Mitglieder)</li>
                        <li>Wo Shing Wo (40.500 Mitglieder, 10 Clans)</li>
                    </ul>
                </div>
                <div>
                    <p style={grosseTriaden.para}>Triadenorganisationen in Taiwan sind beispielsweise:</p>
                    <ul style={grosseTriaden.liste}>
                        <li>Bamboo Union</li>
                        <li>Luen Group (mehr als 12000 Mitglieder)</li>
                        <li>Celestial Way</li>
                        <li>Shih Hai Bang – Four Seas Gang (mehrere 10.000 Mitglieder, weltweit mit Schwerpunkt in Taiwan)</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

const grosseTriaden = {
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
    },

    flexbox: {
        display: "flex",
        flexWrap: "wrap"
    }
}