import Aboutus from "../AboutUs/Aboutus";
import Allworks from "../Allwork/Allworks";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
// import Header from '../Header/Header';
import OurSucess from "../OurSucess/OurSucess";
import Comitte from "../commite/Comitte";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Aboutus />
      <OurSucess />
      <Allworks />
      <Comitte />
      <Footer />
    </div>
  );
};

export default Home;
