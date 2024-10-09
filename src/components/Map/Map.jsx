const Map = () => {
  return (
    <div className="map my-4">
      <iframe
        className="custom-map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2762.9538148182023!2d21.313817876732216!3d46.17157508596392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47459901ef70ec97%3A0x63f0063e78dc4518!2sBarfly%20Venue!5e0!3m2!1sen!2sro!4v1726403534511!5m2!1sen!2sro"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer"
        sandbox="allow-scripts allow-same-origin allow-popups"
      ></iframe>
    </div>
  );
};

export default Map;
