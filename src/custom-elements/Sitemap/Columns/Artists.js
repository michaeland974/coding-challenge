import { CustomElementFactory as Factory } from "../../factory";

const Artists = Factory.createElement(`
  <h6>ARTISTS</h6>
  <ul>
    <li>
      <a href="#artists/brent-faiyaz">Brent Faiyaz</a>
    </li>
    <li>
      <a href="#artists/drake">Drake</a>
    </li>
    <li>
      <a href="#artists/bryson-ford">Bryson Ford</a>
    </li>
    <li>
      <a href="#artists/young-ford">Young Ford</a>
    </li>
    <li>
      <a href="#artists/roy-fresco">Roy Fresco</a>
    </li>
  </ul>
`);

customElements.define("artists-column", Artists);
