import { _createModal } from "../../plugins/modal";

class Modal {
  constructor() {
    this.$modal = _createModal();
    this.amimationSpeed = 200;
    this.closing = false;
    this.openClass = ".header-element__registration";
    this.closeClass = ".modal-close";
    this.ActivClassName = "open";
    this.ActivClassNameHide = "hide";
    this.destroyed = false;
  }
  
  async render() {
    this.open();
    this.closeModal();
  
  }
  
  open() {
    if (this.destroyed) {
      return console.log("Modal is destroyed");
    }
    document.querySelector(this.openClass).addEventListener("click", () => {
      !this.closing && this.$modal.classList.add(this.ActivClassName);
    });
  }
  
  close() {
    this.closing = true;
    this.$modal.classList.remove(this.ActivClassName);
    this.$modal.classList.add(this.ActivClassNameHide);
    setTimeout(() => {
      this.$modal.classList.remove(this.ActivClassNameHide);
      this.closing = false;
    }, this.amimationSpeed);
  }
  
  listener(event) {
    if (event.target.dataset.close) {
      modal.close();
    }
  }

  setContent(html) {
    this.$modal.querySelector('[data-content]').innerHTML = html;
  }
  
  closeModal() {
    this.$modal.addEventListener("click", this.listener);
  }
  
  destroy() {
    this.$modal.parentNode.removeChild(this.$modal);
    this.$modal.removeEventListener("click", this.listener);
    this.destroyed = true;
  }
}

const modal = new Modal();

export default modal;
