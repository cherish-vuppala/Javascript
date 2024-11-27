const section = document.getElementById("time");
setInterval(displayTime, 1000);

function displayTime() {
  const date = new Date();
  const hours = format(date.getHours());
  const minutes = format(date.getMinutes());
  const seconds = format(date.getSeconds());
  section.innerText = `${hours} : ${minutes} : ${seconds}`;
}

function format(num) {
  return num >= 10 ? num + "" : "0" + num;
}
