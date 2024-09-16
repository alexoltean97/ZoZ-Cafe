import i18n from 'i18next';
import { initReactI18next } from 'preact-i18next';

i18n.use(initReactI18next).init({
  resources: {
    ro: {
      translation: {
        home: "Acasa",
        about: "Despre noi",
        contact: "Contact",
        main_title: "Cea mai smechera cafenea din oras!",
        main_intro: "Alege metoda de livrare și hai să descoperim toate produsele care sunt doar la un click distanță.",
        categories: "Categorii",
        product: "Toate produsele",
        privacy_policy: "Privacy Policy",
        terms_condition: "Terms and Conditions",
        cookie_settings: "Cookie Settings"
      }
    },

    en: {
      translation: {
        home: "Home",
        about: "About us",
        contact: "Contact",
        main_title: "The best coffe shop in town",
        main_intro: "Choose the delivery method and let's discover all the products that are just a click away.",
        categories: "Categories",
        product: "All products",
        privacy_policy: "Politica de confidențialitate",
        terms_condition: "Termeni și condiții",
        cookie_settings: "Setări cookie"
      }
    }
  },
  lng: 'ro',
  fallbackLng: 'ro',
  interpolation: {
    escapeValue: false 
  }
});

export default i18n;
