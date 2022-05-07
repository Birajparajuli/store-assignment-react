import NavBar from "../../components/NavBar/NavBar";
import Filter from "../../components/Filter/Filter";
import "./Home.css";
import ProductList from "../../components/ProductList/ProductList";
import ProductGrid from "../../components/ProductGrid/ProductGrid";

const Home = () => {
  return (
    <div className="home-container">
      <Filter />
      <ProductList />
      <ProductGrid />
    </div>
  );
};

export default Home;
