import { CustomElementFactory as Factory } from "../factory";

const MobileNavBar = Factory.createElement(`
  <nav-bar id="mobile-nav-bar" 
           role="navigation" 
           aria-expanded="false">
    <button id="bar-toggle" 
            aria-controls="mobile-nav-bar"
            aria-expanded="false">
      <span class="line"></span>
    </button>
  </nav-bar>
`);

customElements.define("mobile-nav-bar", MobileNavBar);

const toggle = document.querySelector("#bar-toggle");
const navLinks = document.querySelector("#mobile-nav-bar .link-group");
const content = document.querySelector("#mobile-nav-bar");

toggle.addEventListener("click", () => {
  toggle.ariaExpanded = (toggle.ariaExpanded !== "true");
  navLinks.ariaExpanded = (navLinks.ariaExpanded !== "true");
  content.ariaExpanded = (content.ariaExpanded !== "true");
});
