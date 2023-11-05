import { CustomElementFactory as Factory } from "../factory";

const NavBar = Factory.createElement(`
  <div class="link-group">
    <ul class="nav-list">
      <li>
        <a href="#home">
          <span class="icon" role="presentation" data-icon="home"></span>
          Home
        </a>
      </li>
      <li>
        <a href="#records">
          <span class="icon" role="presentation" data-icon="records"></span>
          Records
        </a>
      </li>
      <li>
        <a href="#music">
          <span class="icon" role="presentation" data-icon="music"></span>
          Music
        </a>
      </li>
      <li>
        <a href="#artists">
          <span class="icon" role="presentation" data-icon="artists"></span>
          Artists
        </a>
      </li>
      <li>
        <a href="#concerts">
          <span class="icon" role="presentation" data-icon="concerts"></span>
          Concerts
        </a>
      </li>
    </ul>
    <button class="sign-up action-button">Sign Up</button>
  </div>
`);

customElements.define("nav-bar", NavBar);
