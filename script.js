window.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");
  form.onsubmit = saveData;
});

const saveData = (event) => {
  event.preventDefault();
  const input = document.getElementById("inputUtente");
  const text = input.value;
  localStorage.setItem("data", text);
};
