import { CustomElementFactory as Factory } from "../factory";

const Carousel = Factory.createElement(`
  <div class="card">
    <img  loading="lazy" id="soul" src="../assets/images/album-cover.jpg" alt="Album Cover">
    <div class="content">
      <h4>Trapsoul</h4>
      <h6>BRYSON TILLER</h6>
      <p>Bryson Djuan Tiller, is an American singer, songwriter and rapper. Born in Louisville, Kentucky, he started his career in 2011, releasing the debut mixtape titled Killer Instinct Vol.1.
      </p>
    </div>
  </div>
  <div class="card">
  <img  loading="lazy" id="soul" src="../assets/images/album-cover.jpg" alt="Album Cover">
  <div class="content">
    <h4>Trapsoul</h4>
    <h6>BRYSON TILLER</h6>
    <p>Bryson Djuan Tiller, is an American singer, songwriter and rapper. Born in Louisville, Kentucky, he started his career in 2011, releasing the debut mixtape titled Killer Instinct Vol.1.
    </p>
  </div>
</div>
<div class="card" data-active>
<img  loading="lazy" id="soul" src="../assets/images/album-cover.jpg" alt="Album Cover">
<div class="content">
  <h4>Trapsoul</h4>
  <h6>BRYSON TILLER</h6>
  <p>Bryson Djuan Tiller, is an American singer, songwriter and rapper. Born in Louisville, Kentucky, he started his career in 2011, releasing the debut mixtape titled Killer Instinct Vol.1.
  </p>
</div>
</div>
<div class="card">
<img  loading="lazy" id="soul" src="../assets/images/album-cover.jpg" alt="Album Cover">
<div class="content">
  <h4>Trapsoul</h4>
  <h6>BRYSON TILLER</h6>
  <p>Bryson Djuan Tiller, is an American singer, songwriter and rapper. Born in Louisville, Kentucky, he started his career in 2011, releasing the debut mixtape titled Killer Instinct Vol.1.
  </p>
</div>
</div>
<div class="card">
<img  loading="lazy" id="soul" src="../assets/images/album-cover.jpg" alt="Album Cover">
<div class="content">
  <h4>Trapsoul</h4>
  <h6>BRYSON TILLER</h6>
  <p>Bryson Djuan Tiller, is an American singer, songwriter and rapper. Born in Louisville, Kentucky, he started his career in 2011, releasing the debut mixtape titled Killer Instinct Vol.1.
  </p>
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
    carousel.setAttribute("data-position", relativePositionValue);
  });
});
