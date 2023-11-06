import { CustomElementFactory as Factory } from "../factory";

const SocialBar = Factory.createElement(`
  <address id="social-links">
    <ul>
      <li>
        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/">
          <span class="icon social" role="presentation" data-icon="instagram"></span>
        </a>
      </li>
      <li>
        <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/">
          <span class="icon social" role="presentation" data-icon="youtube"></span>
        </a>
      </li>
      <li>
        <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/">
          <span class="icon social" role="presentation" data-icon="twitter"></span>
        </a>
      </li>
      <li>
        <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/">
          <span class="icon social" role="presentation" data-icon="facebook"></span>
        </a>
      </li>
    </ul>
  </address>
`);
    
customElements.define("social-bar", SocialBar);
