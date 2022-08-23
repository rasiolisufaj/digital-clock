const clock = document.querySelector(".clock");

const tick = () => {
  const now = new Date();

  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  insertHTML(hours, minutes, seconds);
};

const insertHTML = (h, m, s) => {
  if (m < 10) {
    m = "0" + m;
  }
  if (s < 10) {
    s = "0" + s;
  }

  const html = `
    <span>${h}</span> : 
    <span>${m}</span> : 
    <span>${s}</span>
  `;

  clock.innerHTML = html;
};

setInterval(tick, 1000);
