import { svgIcons } from "./icons.js";

const Categories = ({ activeCategory, setActiveCategory }) => {
  const categories = ["espresso", "beverages", "iced"];

  return (
    <div className="categories">
      <div className="container">
        <h3>Categorii</h3>
        <div className="categories-row d-flex">
          {categories.map((category, index) => (
            <div
              className={`category-box ${index > 0 ? "mx-2" : ""}`}
              key={category}
            >
              <div
                class={`category-image ${
                  activeCategory === category ? "active-category" : ""
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {svgIcons[category]}
              </div>

              <div class="category-label mt-2">
                <span>{category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
