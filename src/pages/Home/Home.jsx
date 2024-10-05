import { useState } from "preact/hooks";
import Banner from "../../components/Banner/Banner";
import Categories from "../../components/Categories/Categories";
import Products from "../../components/Products/Products";
const Home = () => {
  const [activeCategory, setActiveCategory] = useState("coffe");

  return (
    <>
      <Banner />
      <Categories
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <Products activeCategory={activeCategory} />
    </>
  );
};

export default Home;
