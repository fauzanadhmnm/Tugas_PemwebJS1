const phi = 3.14;
var luas;
var keliling;
var r;
var d;
function hitung() {
  r = parseFloat(document.getElementById("nilai_r").value);
  luas = phi * Math.pow(r, 2);
  d = 2 * r;
  keliling = phi * d;
  document.getElementById('hasil_luas').value = luas;
  document.getElementById('hasil_keliling').value = keliling;
}