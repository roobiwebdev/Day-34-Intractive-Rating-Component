const Btns = document.querySelectorAll(".btn")
const submitBtn = document.querySelector(".submit")
const maincard = document.querySelector(".card")
const thanksCard = document.querySelector(".submited-card")
const selectedValue = document.querySelector(".selectedValue")

let ratingValue = 0;

Btns.forEach(btn=>{
  btn.addEventListener("click",()=>{
    Btns.forEach(btn=>{
      btn.style.backgroundColor = "";
      btn.style.color = "";
    })

    btn.style.backgroundColor = ("hsl(0, 0%, 100%)");
    btn.style.color = "hsl(216, 12%, 8%)";
    ratingValue = btn.textContent;
  })
})

submitBtn.addEventListener("click",()=>{
  maincard.style.display = "none";
  thanksCard.style.display = "block";
  selectedValue.textContent = ratingValue;
})

