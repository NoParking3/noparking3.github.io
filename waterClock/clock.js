function clock() {
  const now = new Date();

  const seconds =
    now.getMinutes() * 60 + now.getSeconds();

  const percent = (seconds / 3600) * 100;

  document.getElementById("water").style.height = percent + "%";
  console.log(now);
}

setInterval(clock, 1000);
clock();
