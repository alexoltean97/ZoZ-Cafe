import { ScrollMenu } from "react-horizontal-scrolling-menu";
import { useTranslation } from "preact-i18next";
import { svgIcons } from "./icons.jsx";

const Categories = ({ activeCategory, setActiveCategory }) => {
  const { t } = useTranslation();

  const categories = [
    { category: "coffe", name: t("coffe") },
    { category: "iced", name: t("iced") },
    { category: "hot", name: t("hot") },
    { category: "gingershot", name: t("shot") },
    { category: "beverages", name: t("beverages") },
  ];

  return (
    <div className="categories my-4">
      <div className="container">
        <h2 className="mb-4">{t("categories")}</h2>
        <ScrollMenu>
          {categories.map(({ category, name }, index) => (
            <div
              className={`category-box ${index > 0 ? "mx-2" : ""}`}
              key={category}
              style={{ margin: "0 10px" }}
            >
              <div
                className={`category-image ${
                  activeCategory === category ? "active-category" : ""
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {svgIcons[category]}
              </div>
              <div className="category-label text-center mt-2">
                <span>{name}</span>
              </div>
            </div>
          ))}
        </ScrollMenu>
      </div>
    </div>
  );
};

export default Categories;
