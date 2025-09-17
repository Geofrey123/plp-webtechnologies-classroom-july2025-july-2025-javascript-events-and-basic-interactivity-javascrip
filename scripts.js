const btn = document.getElementById("myButton");

btn.addEventListener("click", () => {
  alert("Button clicked!");
});

const text = document.getElementById("hoverText");
text.onmouseover = function () {
    text.style.color = "blue";
    text.style.fontWeight = "bold";
};

const box = document.getElementById("myBox");
box.onmouseout = function () {
    text.style.color = "black";
    text.style.fontWeight = "normal";
}

box.addEventListener("mouseover", () => {
    box.style.background = "lightblue";
  });
  
box.addEventListener("mouseout", () => {
    box.style.background = "lightgrey";
  });

  const form = document.getElementById("myForm");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // prevent page reload
    alert("Form submitted!");
  });

  const username = document.getElementById("username");

  username.oninput = function () {
    if (username.value.length < 5) {
      username.setCustomValidity("Username must be at least 5 characters.");
    } else {
      username.setCustomValidity("");
    }
  };

  document.getElementById("toggleMode").addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });

  const dropdown = document.querySelector(".dropdown");
    document.getElementById("dropdownBtn").addEventListener("click", () => {
      dropdown.classList.toggle("show");
    });

    window.addEventListener("click", (e) => {
        if (!e.target.matches("#dropdownBtn")) {
          dropdown.classList.remove("show");
        }
      });