import { confirmModal, priceModal, _createModal } from "../../plugins/modal";


class Modal {
  constructor(options) {
    this.$modal = options.$modal;
    this.amimationSpeed = 200;
    this.closing = false;
    this.ActivClassName = "open";
    this.ActivClassNameHide = "hide";
    this.destroyed = false;
  }
  
  
  open() {
    if (this.destroyed) {
      return console.log("Modal is destroyed");
    }
      !this.closing && this.$modal.classList.add(this.ActivClassName);
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

export  const modalShowPrice = new Modal({
  $modal: _createModal(priceModal)
});


export const configModal = new Modal({
  $modal: _createModal(confirmModal)
});

export default {};
