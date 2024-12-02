const Map = () => {
  return (
    <div className="map my-4">
      <iframe
        className="custom-map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2762.9553018089186!2d21.313834676636972!3d46.171545485966014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47459901ef7f0e89%3A0xf0ff8a46c6d3af5c!2sStrada%20Unirii%20nr.%201%2C%20Arad%20310123!5e0!3m2!1sen!2sro!4v1732026020110!5m2!1sen!2sro"        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer"
        sandbox="allow-scripts allow-same-origin allow-popups"
      ></iframe>
    </div>
  );
};

export default Map;
