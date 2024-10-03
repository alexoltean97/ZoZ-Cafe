const ModalTabContent = ({ title, active }) => {
  return (
    <div className="tab-content p-1" id="nav-tabContent">
      <h3 className="modal-title pb-2">{title}</h3>

      <div
        className={`tab-pane fade ${active === "privacy" ? "show active" : ""}`}
        id="nav-privacy"
        role="tabpanel"
        aria-labelledby="nav-privacy-tab"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mattis
        tristique lorem a consectetur. Integer id libero magna. Praesent aliquet
        egestas mattis. Vestibulum eget placerat mauris. Praesent at metus eu
        mauris luctus bibendum euismod vitae nisi. Donec nisl dolor, lacinia in
        consectetur et, mattis in libero. Praesent molestie nisi ex, a pulvinar
        nisl aliquet at. In pretium sit amet quam vitae porta. Integer aliquet
        metus at consequat semper. Vestibulum vitae nisi posuere, finibus lorem
        vel, porta dui. Nullam ac volutpat eros, sed sollicitudin justo.
        Curabitur ut neque sed elit varius dictum ac vitae felis. In finibus leo
        eget tincidunt sagittis. Integer ornare nisi tincidunt nibh ornare
        rutrum nec vel tellus. Nunc eu ex ut ante congue interdum. Aliquam
        ultrices, dui nec malesuada ornare, ante enim facilisis purus, sed
        commodo diam quam vel quam. Maecenas auctor sapien nisi, non tempus
        tellus egestas vel. Fusce volutpat odio at elit vehicula viverra ut at
        nulla. Cras nisl lectus, tempus in fringilla vel, efficitur sit amet
        elit. Donec consectetur lobortis orci, et rutrum ex tristique vitae.
        Aenean quis risus malesuada, vulputate erat ac, vulputate ligula.
        Aliquam neque mi, porta quis est ac, blandit venenatis ipsum. Fusce sed
        massa vel tellus finibus bibendum ac lacinia est. Generated 2
        paragraphs, 201 words, 1304 bytes of Lorem Ipsum
      </div>

      <div
        className={`tab-pane fade ${active === "terms" ? "show active" : ""}`}
        id="nav-terms"
        role="tabpanel"
        aria-labelledby="nav-terms-tab"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mattis
        tristique lorem a consectetur. Integer id libero magna. Praesent aliquet
        egestas mattis. Vestibulum eget placerat mauris. Praesent at metus eu
        mauris luctus bibendum euismod vitae nisi. Donec nisl dolor, lacinia in
        consectetur et, mattis in libero. Praesent molestie nisi ex, a pulvinar
        nisl aliquet at. In pretium sit amet quam vitae porta. Integer aliquet
        metus at consequat semper. Vestibulum vitae nisi posuere, finibus lorem
        vel, porta dui. Nullam ac volutpat eros, sed sollicitudin justo.
        Curabitur ut neque sed elit varius dictum ac vitae felis. In finibus leo
        eget tincidunt sagittis. Integer ornare nisi tincidunt nibh ornare
        rutrum nec vel tellus. Nunc eu ex ut ante congue interdum. Aliquam
        ultrices, dui nec malesuada ornare, ante enim facilisis purus, sed
        commodo diam quam vel quam. Maecenas auctor sapien nisi, non tempus
        tellus egestas vel. Fusce volutpat odio at elit vehicula viverra ut at
        nulla. Cras nisl lectus, tempus in fringilla vel, efficitur sit amet
        elit. Donec consectetur lobortis orci, et rutrum ex tristique vitae.
        Aenean quis risus malesuada, vulputate erat ac, vulputate ligula.
        Aliquam neque mi, porta quis est ac, blandit venenatis ipsum. Fusce sed
        massa vel tellus finibus bibendum ac lacinia est. Generated 2
        paragraphs, 201 words, 1304 bytes of Lorem Ipsum
      </div>

      <div
        className={`tab-pane fade ${active === "cookie" ? "show active" : ""}`}
        id="nav-cookie"
        role="tabpanel"
        aria-labelledby="nav-cookie-tab"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mattis
        tristique lorem a consectetur. Integer id libero magna. Praesent aliquet
        egestas mattis. Vestibulum eget placerat mauris. Praesent at metus eu
        mauris luctus bibendum euismod vitae nisi. Donec nisl dolor, lacinia in
        consectetur et, mattis in libero. Praesent molestie nisi ex, a pulvinar
        nisl aliquet at. In pretium sit amet quam vitae porta. Integer aliquet
        metus at consequat semper. Vestibulum vitae nisi posuere, finibus lorem
        vel, porta dui. Nullam ac volutpat eros, sed sollicitudin justo.
        Curabitur ut neque sed elit varius dictum ac vitae felis. In finibus leo
        eget tincidunt sagittis. Integer ornare nisi tincidunt nibh ornare
        rutrum nec vel tellus. Nunc eu ex ut ante congue interdum. Aliquam
        ultrices, dui nec malesuada ornare, ante enim facilisis purus, sed
        commodo diam quam vel quam. Maecenas auctor sapien nisi, non tempus
        tellus egestas vel. Fusce volutpat odio at elit vehicula viverra ut at
        nulla. Cras nisl lectus, tempus in fringilla vel, efficitur sit amet
        elit. Donec consectetur lobortis orci, et rutrum ex tristique vitae.
        Aenean quis risus malesuada, vulputate erat ac, vulputate ligula.
        Aliquam neque mi, porta quis est ac, blandit venenatis ipsum. Fusce sed
        massa vel tellus finibus bibendum ac lacinia est. Generated 2
        paragraphs, 201 words, 1304 bytes of Lorem Ipsum
      </div>
    </div>
  );
};

export default ModalTabContent;
