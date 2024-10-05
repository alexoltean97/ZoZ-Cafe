const CookieForm = ({ cookies, handleCookieChange }) => {
  const cookieCategories = [
    { name: "functionality", label: "Funcționalitate" },
    { name: "analytics", label: "Analitică" },
    { name: "marketing", label: "Marketing" },
    { name: "statistics", label: "Statistica" },
  ];

  return (
    <div className="cookie-form">
      {cookieCategories.map((category) => (
        <div className="cookie-group" key={category.name}>
          <label className="switch">
            <input
              type="checkbox"
              name={category.name}
              checked={cookies[category.name] || false}
              onChange={handleCookieChange}
              disabled={true} 
            />
            <span className="slider"></span>
          </label>
          <span className="label-text">{category.label}</span>
        </div>
      ))}
    </div>
  );
};

export default CookieForm;
