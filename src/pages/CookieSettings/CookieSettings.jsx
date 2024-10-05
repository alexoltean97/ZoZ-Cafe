import  { useState } from "preact/hooks";
import CookieForm from "../../components/CookieForm/CookieForm";
const CookieSettings = () => {
  const [cookies, setCookies] = useState({
    functionality: true,
    analytics: true,
    marketing: false,
    statistic: false,
  });

  const handleCookieChange = (e) => {
    const { name, checked } = e.target;
    setCookies((prevCookies) => ({
      ...prevCookies,
      [name]: checked,
    }));
    d;
  };

  return (
    <div className="container">
      <h3 className="py-4">Acest site utilizează cookie-uri</h3>
      <p>
        Folosim cookie-uri necesare pentru ca platforma să funcționeze. De
        asemenea, am dori să setăm cookie-uri de analiză opționale pentru a
        putea optimiza funcționalitatea site-ului și pentru a analiza și
        îmbunătăți produsul. Nu vom seta cookie-uri de analiză decât dacă le
        activezi. Pentru informații suplimentare despre cookie-urile pe care le
        folosim, consultă Politica Cookies.
      </p>

      <CookieForm cookies={cookies} handleCookieChange={handleCookieChange} />
    </div>
  );
};

export default CookieSettings;
