
// textarea

document.addEventListener("DOMContentLoaded", function () {
    let textarea = document.getElementById("message");
    textarea.addEventListener("input", function () {
      this.style.height = "130px";
      this.style.height = this.scrollHeight + "px";
    });
  });


