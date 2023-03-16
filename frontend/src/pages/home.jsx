import Body from "../components/body";
import FooterADS from "../components/FooterADS";
import FooterBlack from "../components/FooterBlack";
import FooterNavbar from "../components/FooterNavbar";
import Header from "../components/header";

const Home = () => {
  return (
    <div className="homeContainer">
      <Header />
      <Body />
      <FooterADS />
      <FooterNavbar />
      <FooterBlack />
    </div>
  );
};
export default Home;
