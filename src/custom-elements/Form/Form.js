import { CustomElementFactory as Factory } from "../factory";

const Form = Factory.createElement(`
<ul>
  <li>
    <label for="first-name">
      <span>First Name</span>
      <input type="text" id="first-name" name="first-name" 
            placeholder="First Name" required/>
    </label>
  </li>
  <li>
    <label for="last-name">
      <span>Last Name</span>
      <input type="text" id="last-name" name="last-name" 
            placeholder="Last Name" required/>
    </label>
  </li>
  <li>
    <label for="email">
      <span>Email Address</span>
      <input type="email" id="email" name="email" 
            placeholder="Email Address" required/>
    </label>
  </li>
  <li>
    <label for="contacting">
      <span>Reason for Contacting</span>
      <select name="contacting" id="contacting-select">
        <option value="">Select One</option>
        <option value="Employment">Employment</option>
        <option value="Future-Project">Future Project</option>
        <option value="Learn-More">Learn More</option>
      </select>                 
    </label>
  </li>
  </ul>
  <div>
    <label for="message">
      Message (Optional)
      <textarea id="optional-message" name="message">Write a brief message...
      </textarea>
    </label>
  </div>
<button class="action-button" class="learn-more">Learn More</button>
`);

customElements.define("contact-form", Form);
