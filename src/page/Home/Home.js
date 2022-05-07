import NavBar from "../../components/NavBar/NavBar";
import Filter from "../../components/Filter/Filter";
import "./Home.css";
import ProductList from "../../components/ProductList/ProductList";

const Home = () => {
  return (
    <div className="home-container">
      <Filter />
      <ProductList />
    </div>
  );
};

export default Home;
