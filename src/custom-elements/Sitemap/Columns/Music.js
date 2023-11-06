import { CustomElementFactory as Factory } from "../../factory";

const Music = Factory.createElement(`
  <h6>MUSIC</h6>
  <ul>
    <li>
      <a href="#music/missing-out">Missing Out</a>
    </li>
    <li>
      <a href="#music/trapsoul">Trapsoul</a>
    </li>
    <li>
      <a href="#music/sonder-sons">Sonder Sons</a>
    </li>
    <li>
      <a href="#music/paradise-today">Paradise Today</a>
    </li>
    <li>
      <a href="#music/needed">Needed</a>
    </li>
  </ul>
`);

customElements.define("music-column", Music);
