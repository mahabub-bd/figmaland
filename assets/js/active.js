const config = {
    type: "carousel",
    autoplay: 1500 | true,
    activeNav: true,

    gap: 40,

    breakpoints: {
      2400: {
        perView: 3,
      },
      1800: {
        perView: 3,
      },
      1450: {
        perView: 2,
      },
      800: {
        perView: 1,
      },
      600: {
        perView: 1,
      },
    },
  };
  new Glide(".glide", config).mount();