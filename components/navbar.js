class NavBar extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({mode: 'open'});
  }
  connectedCallback() {
    this.render();
  }

  render() {
    this.shadow.innerHTML = `
      <style>
        .parent {
          width: 100vw;
        }

        .parent__tile{
        }

        .navbar {
        }

      </style>
      <div class="parent">
        <h1 class="body__title">DREW HOLOWATY</h1>
        <div class="navbar">
          <a href="./index.html">Home</a>
          <a href="./pages/articles.html">Articles</a>
          <a href="./pages/contact.html">Contact</a>
        </div>
        <hr class="body__large-line" />
      </div> 
    `;
  }


}
customElements.define('x-navbar', NavBar);
