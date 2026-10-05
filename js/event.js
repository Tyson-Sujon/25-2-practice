// process 1
function makeYellow() {
  document.body.style.backgroundColor = "yellow";
}
function makeRed() {
  document.body.style.backgroundColor = "red";
}
// process 2
const btnMakeBlue = document.getElementById("btn-make-blue");
btnMakeBlue.onclick = function blue() {
  document.body.style.backgroundColor = "blue";
};
const mBlue = document.getElementById("btn-make-green");
mBlue.onclick = function green() {
  document.body.style.backgroundColor = "green";
};

// process 3
const mPurpel = document.getElementById("btn-make-purple");
mPurpel.onclick = purples;
function purples() {
  document.body.style.backgroundColor = "purple";
}
