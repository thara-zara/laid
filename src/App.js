import About from "./components/About/About";
import Auction from "./components/Auction/Auction";
import Beni from "./components/Benifits/Beni";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Join from "./components/Join/Join";
import Open from "./components/Opensea/Open";
import Rare from "./components/Rare/Rare";
import Team from "./components/Team/Team";

function App() {
  return (
    <div className="App">
          <Header/>
          <Open/>
          <About/>
          <Rare/>
          <Auction/>
          <Beni/>
          <Join/>
          <Team/>
          <Footer/>
    </div>
  );
}

export default App;
