const shecodeBtn = document.querySelector(".shecode-btn");
const mayBtn = document.querySelector(".may-btn");
const mayProject = document.querySelector(".may-projects");

const projectLists = document.querySelector(".project-lists");

// sticky bar
$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 30) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
  });
});
//animation typed
var typed = new Typed(".typing", {
  strings: ["May Thu"],
  typeSpeed: 200,
  backSpeed: 200,
  loop: true,
});

const sr = ScrollReveal({
  origin: "left",
  distance: "85px",
  duration: 2000,
  reset: true,
});
sr.reveal(".skills-box", { delay: 200 });

const sr1 = ScrollReveal({
  origin: "right",
  distance: "85px",
  duration: 2000,
  reset: true,
});
sr1.reveal(".skills-box1", { delay: 200 });

const sr2 = ScrollReveal({
  origin: "bottom",
  distance: "85px",
  duration: 2000,
  reset: true,
});

shecodeBtn.addEventListener("click", () => {
  projectLists.style.display = "block";
  mayProject.style.display = "none";
});
mayBtn.addEventListener("click", () => {
  projectLists.style.display = "none";
  mayProject.style.display = "block";
});
