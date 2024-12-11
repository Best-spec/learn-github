let x,
  keepint,
  int1,
  result,
  p = 0;

function changetext(value) {
  document.getElementById("select").innerHTML = value;
  return value;
}

document.getElementById("tab1").onclick = function () {
  x = changetext("เงินที่เหลือ");
};

document.getElementById("tab2").onclick = function () {
  x = changetext("วันนี้ใช้เงิน");
};

document.getElementById("tap").onclick = function () {
  result = document.getElementById("num-input").value;
  int1 = parseInt(result, 10);
  if (x == "เงินที่เหลือ") {
    document.getElementById("my-cash").innerText = result;
  } else if (x == "วันนี้ใช้เงิน") {
    p += int1;
    document.getElementById("use-cash").innerText = p;
  }
};
