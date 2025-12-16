function changeText() {
  document.querySelector(".hero p").innerText =
    "Thanks for visiting my portfolio!";
}

function showGreeting() {
  const name = document.getElementById("name").value;
  const greeting = document.getElementById("greeting");

  if (name === "") {
    greeting.innerText = "Please enter your name.";
  } else {
    greeting.innerText = "Hello " + name + "! I will contact you soon.";
  }
}
