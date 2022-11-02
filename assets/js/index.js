const hr = document.getElementById("hr");
const min = document.getElementById("min");
const sec = document.getElementById("sec");

function time() {
  const hour = new Date().getHours();
  const minute = new Date().getMinutes();
  const second = new Date().getSeconds();
  if (hour > 12) {
    const newHr = hour - 12;
    hr.style.transform = `rotate(${(newHr * 30)+minute/2}deg)`;
  }else{
    hr.style.transform=`rotate(${(hour*30)+minute/2}deg)`
  }
  min.style.transform=`rotate(${(minute*6)+second/10}deg)`
  sec.style.transform=`rotate(${second*6}deg)`
}

setInterval(() => {
    time()
}, 500);