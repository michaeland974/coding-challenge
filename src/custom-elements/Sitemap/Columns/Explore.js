import { CustomElementFactory as Factory } from "../../factory";

const Explore = Factory.createElement(`
  <h6>EXPLORE</h6>
  <ul>
    <li>
      <a href="#explore/about-us">About us</a>
    </li>
    <li>
      <a href="#explore/our-story">Our Story</a>
    </li>
    <li>
      <a href="#explore/team">Team</a>
    </li>
    <li>
      <a href="#explore/careers">Careers</a>
    </li>
    <li>
      <a href="#explore/faq">FAQ</a>
    </li>
  </ul>
`);

customElements.define("explore-column", Explore);
