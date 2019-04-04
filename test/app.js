// <app-navbar></app-navbar>

class AppNavBar extends HTMLElement {
  // Called when instantiated 
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    console.log(this.getAttribute("theme"));

    const template = document.querySelector("template");
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  static get observedAttributes() {
    return ["theme"];
  }

  attributeChangedCallback(name, oldVal, newVal) {
    console.table({ name, oldVal, newVal });
  }

  connectedCallback() {
    console.log("Element added to the DOM");
  }

  diconnectedCallback() {
    console.log("Element removed from the DOM");
  }
}

window.customElements.define("app-navbar", AppNavBar);
