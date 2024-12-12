let x,
  keepint,
  int1,
  result,
  p = 0,
  remain = 0,
  updata = 0;

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
    if (remain != 0) {
      remain = 0;
    } else {
      remain += int1;
      document.getElementById("my-cash").innerText = remain;
      document.getElementById("my-cash").style.color = "#dd75b5";
      int1 = 0;
    }
  } else if (x == "วันนี้ใช้เงิน") {
    if (!isNaN(int1)) {
      p += int1;
      document.getElementById("use-cash").innerHTML = p;
      document.getElementById("use-cash").style.color = "cyan";
      int1 = 0;
    } else {
      document.getElementById("use-cash").innerHTML =
        "กรุณากรอกตัวเลขที่ถูกต้อง!";
      document.getElementById("use-cash").style.color = "red";
    }
  }
};

document.getElementById("clear").onclick = function () {
  document.getElementById("use-cash").innerHTML = "";
  p = 0;
};
document.getElementById("minus").onclick = function () {
  remain -= p;
  document.getElementById("my-cash").innerHTML = remain;
  console.log(remain, p);
};
