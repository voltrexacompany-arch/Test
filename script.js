const inputField = document.getElementById('comment');
const placeholders = [
  "เยี่ยมมาก!",
  "งานเนี๊ยบสุดๆ",
  "Minimal มากครับ",
];

let index = 0;
function changePlaceholder() {
  // 1. ถอดแอนิเมชั่นออกก่อนเพื่อให้มันเริ่มใหม่ได้
  inputField.classList.remove('placeholder-animation');
  
  // 2. บังคับให้ Browser รับรู้ว่าถอดออกแล้ว (Reflow)
  void inputField.offsetWidth; 
  
  // 3. เปลี่ยนคำและใส่แอนิเมชั่นกลับเข้าไป
  inputField.placeholder = placeholders[index];
  inputField.classList.add('placeholder-animation');
  
  index = (index + 1) % placeholders.length;
}

// สั่งให้รันทุก 3 วินาที (ต้องเท่ากับเวลาใน CSS animation)
setInterval(changePlaceholder, 3000);

const inputField = document.getElementById('comment');
const fakePlaceholder = document.getElementById('fake-placeholder');
const words = ["เยี่ยมมาก!", "งานเนี๊ยบสุดๆ", "Minimal มากครับ"];
let i = 0;

// เปลี่ยนคำวนไป
setInterval(() => {
  if (inputField.value === "") { // เปลี่ยนเฉพาะตอนที่ยังไม่ได้พิมพ์
    fakePlaceholder.classList.remove('slide-up-text');
    void fakePlaceholder.offsetWidth; // รีเซ็ตอนิเมชั่น
    fakePlaceholder.innerText = words[i];
    fakePlaceholder.classList.add('slide-up-text');
    i = (i + 1) % words.length;
  }
}, 3000);

// ฟังเหตุการณ์ตอนพิมพ์
inputField.addEventListener('input', () => {
  if (inputField.value !== "") {
    fakePlaceholder.classList.add('hide-placeholder');
  } else {
    fakePlaceholder.classList.remove('hide-placeholder');
  }
});
