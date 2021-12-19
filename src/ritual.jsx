export default function Ritual(){
    return(
        <div style={ritual.container}>
            <h2 style={ritual.ueberschrift}>Initationsritual</h2>
            <p style={ritual.para}>Die klassische Triade versteht sich als „Familie„ (Bruderschaft). Vor der Aufnahme in die Geheimgesellschaft („Hung Mun„) muss der jugendliche Mitläufer Aufträge übernehmen, die ihm von einem „älteren Bruder„ befohlen werden. Ist die Triade mit dem „Fußsoldaten„ zufrieden, wird er durch zeremonielle (Blut-)Eidleistung aufgenommen und bekommt seinen Rang (Nummer-Position).
            <br /><br/>Eine typische Zeremonie findet an einem Guan-Yu-gewidmeten Altar, mit Weihrauch und einem Tieropfer (in der Regel ein Huhn, ein Schwein oder eine Ziege) statt. Nach dem Trinken einer Mischung aus Wein und Blut des Tieres oder des Anwärters leistet er unter einem Bogen von Schwertern die 36 Triaden-Schwüre, die Verschwiegenheit, Loyalität und verschiedenste qualvolle Tode bei Verletzung der Schwüre beinhalten. Das Papier, auf dem die Eide geschrieben stehen, wird auf dem Altar verbrannt, um die Verpflichtung des neuen Mitglieds zur Erfüllung seiner Pflichten gegenüber den Göttern zu bestätigen. Drei Finger auf der linken Hand werden als verbindliche Geste nach oben gehalten.</p>
        </div>
    )
}

const ritual = {
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
        paddingBottom: 30,
        marginBottom: 0
    }
}