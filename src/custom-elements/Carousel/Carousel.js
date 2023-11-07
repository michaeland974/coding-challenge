import { CustomElementFactory as Factory } from "../factory";

const Carousel = Factory.createElement(`
  <div class="card">
    <img>
    <div class="content">
      <h4></h4>
      <h6><h6>
      <p></p>
    </div>
  </div>
  <div class="card">
    <img>
    <div class="content">
      <h4></h4>
      <h6><h6>
      <p></p>
    </div>
  </div> 
  <div class="card" data-active>
    <img>
    <div class="content">
      <h4></h4>
      <h6><h6>
      <p></p>
    </div>
  </div> 
  <div class="card">
    <img>
    <div class="content">
      <h4></h4>
      <h6><h6>
      <p></p>
    </div>
  </div> 
  <div class="card">
    <img>
    <div class="content">
      <h4></h4>
      <h6><h6>
      <p></p>
    </div>
  </div> 
`);

customElements.define("carousel-row", Carousel);

const buttons = document.querySelectorAll("[data-carousel]");
const carousel = document.getElementById("carousel");
const cards = [...document.querySelectorAll("#carousel .card")];

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const motion = button.getAttribute("data-carousel");
    const offset = (motion === "next" ? 1 : -1);
    const active = document.querySelector("[data-active]");
    const currentIndex = cards.indexOf(active);
    let newIndex = currentIndex + offset;

    if(newIndex < 0){
      newIndex = cards.length-1;
    }
    else if(newIndex >= cards.length){
      newIndex = 0;
    }

    cards[currentIndex].removeAttribute("data-active");
    cards[newIndex].setAttribute("data-active", "");

    const relativePositionOffset = 2;
    const relativePositionValue = -(newIndex - relativePositionOffset);
    console.log(relativePositionValue);
    carousel.setAttribute("data-position", relativePositionValue);
  });
});
