const form = document.querySelector("#form");
const username = document.querySelector("#username");
const password = document.querySelector("#password");

const checkPassword = (value) => {
  if (value.length >= 8 && value.includes("mukam777")) {
    return value;
  }
};

const checkUsername = (value) => {
  if (value.length > 8 && value.includes("Mukam-777@gmail.com")) {
    return value;
  }
};

password.addEventListener("input", () => {
  if (checkPassword(password.value)) {
    password.classList.remove("failed");
    password.classList.add("success");
  } else {
    password.classList.add("failed");
    password.classList.remove("success");
  }
});

username.addEventListener("input", () => {
  if (checkUsername(username.value)) {
    username.classList.remove("failed");
    username.classList.add("success");
  } else {
    username.classList.remove("success");
    username.classList.add("failed");
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (checkUsername(username.value) && checkPassword(password.value)) {
    alert("Xammasi Togri Bajarildi");
    window.location.href = "notebook.html";
  } else {
    alert("Login yoki Parol Xato !!!");
  }
});
