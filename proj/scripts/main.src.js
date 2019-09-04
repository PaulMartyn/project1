
window.addEventListener("load", function () {
  picker.attach("pick-inline", "input-inline1", "input-inline2");
});
function funClear1() {
  document.getElementById("input-inline1").value = "";
}
function funClear2() {
  document.getElementById("input-inline2").value = "";
}
//
window.onload = function () {
  document.getElementById('toggler').onclick = function () {
    openbox('picker-0', this);
    return false;
  };
};
function openbox(id, toggler) {
  var div = document.getElementById(id);
  if (div.style.display == 'block') {
    div.style.display = 'none';
  }
  else {
    div.style.display = 'block';
  }
}