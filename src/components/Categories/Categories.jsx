import { ScrollMenu } from "react-horizontal-scrolling-menu";
import { useEffect, useState } from "preact/hooks";
import { useTranslation } from "preact-i18next";
import { svgIcons } from "./icons.jsx";

const Categories = ({ activeCategory, setActiveCategory }) => {
  const { t } = useTranslation();
  const [isScrollable, setIsScrollable] = useState(false);

  const categories = [
    { category: "coffe", name: t("coffe") },
    { category: "iced", name: t("iced") },
    { category: "frappe", name: "Frappe" },
    { category: "hot", name: t("hot") },
    { category: "icedtea", name: t("icedTea") },
    { category: "gingershot", name: t("shot") },
    { category: "beverages", name: t("beverages") },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsScrollable(window.innerWidth <= 1000);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="categories my-4">
      <div className="container">
        <h3 className="mb-4">{t("categories")}</h3>
        {isScrollable ? (
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
        ) : (
          <div className="categories-row d-flex">
            {categories.map(({ category, name }, index) => (
              <div
                className={`category-box ${index > 0 ? "mx-2" : ""}`}
                key={category}
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
          </div>
        )}
      </div>
    </div>
  );
};

export default Categories;
