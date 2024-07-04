function val() {
  var d = Number(document.getElementById("style-select").value);
  // var con = {
  //   a: { value: 2, range: [0, 30] },
  //   b: { value: 0.75, range: [-1, 1] },
  //   zindex: { value: -9996999, range: [-9999999, 9999999] },
  //   aspect: { value: 2.0551948703386897 },
  //   gooey: { value: false },
  //   infiniteGooey: { value: true },
  //   growSize: { value: 4, range: [1, 15] },
  //   durationOut: { value: 1, range: [0.1, 5] },
  //   durationIn: { value: 1.5, range: [0.1, 5] },
  //   displaceAmount: { value: 0.5 },
  //   masker: { value: false },
  //   maskVal: { value: 1, range: [1, 5] },
  //   scrollType: { value: 1 },
  //   geoVertex: { range: [1, 64], value: 1 },
  //   noEffectGooey: { value: false },
  //   onMouse: { value: 1 },
  //   noise_speed: { value: 0.2, range: [0, 10] },
  //   metaball: { value: 0.2, range: [0, 2] },
  //   discard_threshold: { value: 0.5, range: [0, 1] },
  //   antialias_threshold: { value: 0, range: [0, 0.1] },
  //   noise_height: { value: 0.5, range: [0, 2] },
  //   noise_scale: { value: 10, range: [0, 100] },
  // };
  var deb = Boolean(document.getElementById("debug-panel").value);
  var configDets = document.getElementById("config-dets").innerText;
  console.log(configDets);
  Shery.imageEffect("#back", {
    style: d,
    // config: con,
    gooey: false,
    debug: deb,
  });
}

function addDropDown() {
  var styles = [
    { styleId: 1, styleName: "Dynamic Distortion Effect" },
    { styleId: 2, styleName: "Simple Liquid Distortion Effect" },
    { styleId: 3, styleName: "Wobblle Effect" },
  ];

  var ddlStyles = document.createElement("select");

  for (var i = 0; i < styles.length; i++) {
    var option = document.createElement("OPTION");
    option.innerHTML = styles[i].styleName;
    option.value = styles[i].styleId;
    ddlStyles.options.add(option);
  }
  var nav = document.getElementById("nav");
  nav.appendChild(ddlStyles);
}

var elems = document.querySelectorAll(".elem");
elems.forEach(function (elem) {
  var h1s = elem.querySelectorAll("h1");
  var index = 0;
  var animating = false;
  document.querySelector("#main").addEventListener("click", function () {
    if (!animating) {
      animating = true;
      gsap.to(h1s[index], {
        top: "-=100%",
        ease: Expo.easeInOut,
        duration: 1,
        onComplete: function () {
          gsap.set(this._targets[0], { top: "100%" });
          animating = false;
        },
      });
      index === h1s.length - 1 ? (index = 0) : index++;
      gsap.to(h1s[index], {
        top: "-=100%",
        ease: Expo.easeInOut,
        duration: 1,
      });
    }
  });
});
