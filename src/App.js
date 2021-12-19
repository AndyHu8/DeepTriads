import Erkennungsmerkmal from "./erkennungsmerkmal";
import Footer from "./footer";
import GrosseTriaden from "./grossetriaden";
import Kleidung from "./kleidung";
import Navigation from "./navigation";
import Ritual from "./ritual";
import Symbole from "./symbole";
import Taetigkeit from "./taetigkeit";
import Triadenschwüre from "./triadenschwuere";
import Triadensitz from "./triadensitz";

function App() {
  return (
    <div style={app.container} className="App">
      <Navigation/>
      <Triadensitz/>
      <Ritual/>
      <Triadenschwüre/>
      <Symbole/>
      <Kleidung/>
      <Erkennungsmerkmal/>
      <GrosseTriaden/>
      <Taetigkeit/>
      <Footer/>
    </div>
  );
}

const app = {
  container: {
    overflowX: "hidden"
  }
}

export default App;
