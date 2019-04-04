class SSNInput extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    const template = document.querySelector("template");
    this.shadowRoow.appendChild(template.content.cloneNode(true));
  }
}
