import { CustomElementFactory as Factory } from "../factory";

const HeroBanner = Factory.createElement(`
  <div id="background-zoom-wrapper" class="scroll-spy"></div>
  <div class="content">
    <h1>A.M. Paradox</h1>
    <p>Christopher Brent Wood, better known by his stage name Brent Faiyaz, is
        an American singer and record producer. He released his debut project, an extended play entitled A.M. Paradox, in 2016.
    </p>
    <button id="play" aria-label="Play Video">
      <span class="background">
        <span class="icon" data-icon="play"></span>
      </span>
      <span>Watch Video</span>
    </button>
  </div>
`);

customElements.define("hero-banner", HeroBanner);

const selected = document.querySelectorAll(".scroll-spy")[0];
const observer = new IntersectionObserver((elements) => {
  elements.forEach((el) => {
    if(el.isIntersecting){
      el.target.classList.add("zoom");
    }
    else{
      el.target.classList.remove("zoom");
    }
  });
}, {threshold: [0.25]});

observer.observe(selected);