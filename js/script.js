// รับปุ่มสั่งซื้อและ pop-up
const orderButton = document.getElementById("orderButton");
const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");

// เมื่อคลิกปุ่มสั่งซื้อ, ให้แสดง pop-up
orderButton.onclick = function() {
  popup.style.display = "block";
};

// เมื่อคลิกที่ปุ่มปิด, ให้ซ่อน pop-up
closePopup.onclick = function() {
  popup.style.display = "none";
};

// ถ้าผู้ใช้คลิกนอก pop-up ก็ให้ซ่อน pop-up
window.onclick = function(event) {
  if (event.target === popup) {
    popup.style.display = "none";
  }
};
