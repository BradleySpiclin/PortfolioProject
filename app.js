(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();

// on click event to submit contact form ensuring all fields are filled in
document.getElementById("submit-form").addEventListener("click", function(event) {
    event.preventDefault(); // prevent the default behavior of the anchor link
    if (document.getElementById("name").value !== '' &&
      document.getElementById("email").value !== '' &&
      document.getElementById("message").value !== '' &&
      document.getElementById("subject").value !== '') {
    document.getElementById("my-form").submit(); // submit the form
  } else {
    alert("Please fill in all required fields."); // show an error message
  }
})();