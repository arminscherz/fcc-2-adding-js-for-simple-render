  // Bank some good vibe options
  const vibes = [
    "...und großartig noch dazu",
    "...und einen schönen Tag noch!",
    "...und das ist übersetzt!",
    "...und dieses Welpen auch: 🐶"
  ];

   // choose a random good vibe
  var vibe = vibes[Math.floor(Math.random() * Math.floor(vibes.length))];

  // display a good vibe
  document.querySelector(".vibe").append(vibe);