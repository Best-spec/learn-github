function changetext(value) {
  document.getElementById("select").innerHTML = value;
  return value;
}

document.getElementById("tab1").onclick = function () {
  changetext("เงินที่เหลือ"); // ใช้ค่าที่ได้จากฟังก์ชัน
  console.log(changetext("เงินที่เหลือ"));
};

document.getElementById("tab2").onclick = function () {
  changetext("วันนี้ใช้เงิน");
};

console.log(result);
