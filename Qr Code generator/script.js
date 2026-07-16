const wrapper = document.querySelector(".wrapper");
const btn = wrapper.querySelector(".btn");
const inputtext = wrapper.querySelector("#inputtext");
const Qrimage = wrapper.querySelector(".Qrimage img");
const loader = wrapper.querySelector(".loader");

btn.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent form submit reload
  let text = inputtext.value.trim();
  if (!text) return;
   const src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(
    text
  )}`;
  Qrimage.src = src;
    wrapper.classList.add("active");
     btn.innerText="QRcode generated"

});

inputtext.addEventListener('keyup',()=>{
  if(!inputtext.value){
  wrapper.classList.remove("active");
  btn.innerText="generate QR code"
  }
})




