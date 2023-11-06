import { CustomElementFactory as Factory } from "../factory";

const Address = Factory.createElement(`
  <address>
    <span>8521 W Fairfax Rd</span>
    <span>Los Angeles, CA</span>
    <div>
      <span>990210</span>
      <a href="tel:+19095054302">(909) 505 4302</a>
    </div>
  </address>
`);
    
customElements.define("business-address", Address);
