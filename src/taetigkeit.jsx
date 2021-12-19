export default function Taetigkeit(){
    return(
        <div style={grosseTriaden.container}>
            <h2 style={grosseTriaden.ueberschrift}>Tätigkeitsfelder der Triaden</h2>
            <p style={grosseTriaden.para}>Die kriminellen Tätigkeitsfelder sind:</p>
            <ul style={grosseTriaden.liste}>
                <li>Menschen-, Kinder- und Frauenhandel, Menschenschmuggel in Form von Schleusungen, auch auf Vorrat in Warteländern, um die Spuren zu verwischen</li>
                <li>Glücksspiele aller Art, Wettkampfmanipulationen, Prostitution, Pornographie</li>
                <li>Schutzgelderpressung, Wucherzins-(Kredithai-Geschäfte), Fälschungen von Währungen, Reiseschecks, Ausweispapieren und Geldwäsche</li>
                <li>Computerkriminalität, gewerbsmäßiger Betrug mit Kreditkarten</li>
                <li>Korruption, Produktpiraterie, auch Videopiraterie</li>
                <li>Auftragsmorde, illegaler Handel von menschlichen Organen</li>
                <li>Drogenherstellung, Handel und Schmuggel von Waren, Waffenhandel und -schmuggel</li>
                <li>Immobilienspekulation, Schwarzarbeitorganisation, Steuerhinterziehung</li>
                <li>Kidnapping, Carjacking, Brandstiftungen, Nötigungen mit großer Schadensfolge</li>
                <li>Straßenverkauf von Drogen und alles, was als Ware gehandelt werden kann</li>
            </ul>
        </div>
    )
}

const grosseTriaden = {
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