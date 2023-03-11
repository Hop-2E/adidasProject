import Body from "../Components/body";
import FooterADS from "../Components/FooterADS";
import FooterBlack from "../Components/FooterBlack";
import FooterNavbar from "../Components/FooterNavbar";
import Header from "../Components/header";

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
