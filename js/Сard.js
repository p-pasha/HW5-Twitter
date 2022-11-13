export default class Card {
  constructor(name, email, title, text, id) {
    this.name = name;
    this.email = email;
    this.title = title;
    this.text = text;
    this.id = id;
  }
  createElement(elemType, classNames, text) {
    const element = document.createElement(elemType);
    if (text) element.textContent = text;
    element.classList.add(...classNames);
    return element;
  }
  renderHeader(container) {
    const header = this.createElement("div", ["card-header"]);
    header.insertAdjacentHTML(
      "afterbegin",
      `<a href=# class= 'card-name'> ${this.name} </a>
       <div class="card-email"> ${this.email} </div>
       <button class="btn-del">Delite</button>`
    );
    container.append(header);
    header.addEventListener("click", (e) => {
      const deleteTarget = e.target.closest(".btn-del");
      if (deleteTarget) {
        this.card.remove();
        fetch(`https://ajax.test-danit.com/api/json/posts/${this.id}`, {
          method: "DELETE",
        });
      }
    });
  }
  renderText(container) {
    const text = this.createElement("div", ["card-body"]);
    text.insertAdjacentHTML(
      "afterbegin",
      `<div class="card-title"> ${this.title} </div> 
       <div class="card-text"> ${this.text} </div>`
    );
    container.append(text);
  }
  render() {
    this.card = this.createElement("div", ["card-container"]);
    document.querySelector(".wrapper").append(this.card);
    this.renderHeader(this.card);
    this.renderText(this.card);
    return this.card;
  }
}
