var hour = getHours();
var minute = getMinutes();

var interval = window.setInterval(pausehetic, 5*60*60);
function pausehetic() {
    if (hour==10 && minute==35){
      alert("c'est la pause !");
    }
}
