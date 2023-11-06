import { CustomElementFactory as Factory } from "../../factory";

const Records = Factory.createElement(`
  <h6>RECORDS</h6>
  <ul>
    <li>
      <a href="#records/what-a-time">What a Time</a>
    </li>
    <li>
      <a href="#records/coming-home">Coming Home</a>
    </li>
    <li>
      <a href="#records/always-first">Always First</a>
    </li>
    <li>
      <a href="#records/so-far-gone">So Far Gone</a>
    </li>
    <li>
      <a href="#records/big-bluez">Big Bluez</a>
    </li>
  </ul>
`);

customElements.define("records-column", Records);
