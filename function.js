document.querySelector("#box1").addEventListener("dragstart", drag_start);
document.querySelector("#box2").addEventListener("dragstart", drag_start);
document.querySelector("#box3").addEventListener("dragstart", drag_start);
document.querySelector("#box4").addEventListener("dragstart", drag_start);
document.querySelector("#box5").addEventListener("dragstart", drag_start);

document.querySelector("#workSpace").addEventListener("dragover", drag_over);
document.querySelector("#workSpace").addEventListener("drop", drop);

function drag_start(event) {
  let style = window.getComputedStyle(event.target, null);
  let str =
    parseInt(style.getPropertyValue("left")) -
    event.clientX +
    "," +
    (parseInt(style.getPropertyValue("top")) - event.clientY) +
    "," +
    event.target.id;
  event.dataTransfer.setData("text", str);
}

function drop(event) {
  let getValue = event.dataTransfer.getData("text").split(",");
  let dm = document.getElementById(getValue[2]);
  dm.style.left = event.clientX + parseInt(getValue[0], 10) + "px";
  dm.style.top = event.clientY + parseInt(getValue[1], 10) + "px";
  event.preventDefault();
}

function drag_over(event) {
  event.preventDefault();
}
