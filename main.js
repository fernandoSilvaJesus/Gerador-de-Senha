const sliderInput = document.querySelector("#slider");
const btnElement = document.querySelector("#button");
const sizePassword = document.querySelector("#valor");
const password = document.querySelector("#password");
const containerPassword = document.querySelector("#container-password");

const carateres =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@123456789";

let Cpassword = ''
sizePassword.innerHTML = sliderInput.value;

sliderInput.addEventListener("change", () => {
  sizePassword.innerHTML = sliderInput.value;
});

const generateNewPassword = () => {
  let newPassword = "";
  for (let i = 0, n = carateres.length; i < sliderInput.value; ++i) {
    newPassword += carateres.charAt(Math.floor(Math.random() * n));
  }
  containerPassword.classList.remove("hide");
  password.innerHTML = newPassword;
  Cpassword = newPassword;

};

btnElement.addEventListener("click", generateNewPassword);

function copyPassword(){
    navigator.clipboard.writeText(Cpassword);
}