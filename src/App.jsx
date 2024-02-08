import "./App.module.scss";
import {
  Banner,
  Discoveries,
  Footer,
  Header,
  IconsBanner,
  Products,
  SecondTextContent,
  TextContent,
} from "./index.jsx";
import { SecondBanner } from "./components/SecondBanner/index.jsx";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <TextContent />
      <IconsBanner />
      <SecondTextContent />
      <Products />
      <SecondBanner />
      <Discoveries />
      <Footer />
    </>
  );
}

export default App;
