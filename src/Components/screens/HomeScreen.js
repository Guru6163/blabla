import products from "../Components/Data/dataApple";
import "./HomeScreen.css";
import ProductCard from "../Components/ProductCard";
import Catagories from "../Components/Catagories/Catagories";


const HomeScreen = () => {
  return (
    <div className="screen">
      <Catagories/>
    <div className='products__wrapper'>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
    </div>
  );
};

export default HomeScreen;
