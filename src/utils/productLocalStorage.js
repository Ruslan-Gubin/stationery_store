import { headerShop, productsStore } from "../components/Header/Header";
import localstorageUtils from "./localStorageUtils";

class ProductStorage {
  constructor() {
    this.classNameActive = "products-element__button_active";
    this.labelAdd = "В корзину";
    this.labelRemove = "В корзине";
  }

  renderStorage() {
    document.addEventListener("click", async (event) => {
      if (event.target.classList.contains("products-element__button")) {
        const id = event.target.getAttribute("data-id");
        const { pushProduct, products } = localstorageUtils.putProducts(id);

        if (pushProduct) {
          event.target.classList.add(this.classNameActive);
          event.target.innerHTML = this.labelRemove;
          headerShop.render((productsStore.length += 1));
        } else {
            event.target.classList.remove(this.classNameActive);
            event.target.innerHTML = this.labelAdd;
            headerShop.render((productsStore.length -= 1));
        }
    }
});
}
}

const productStorage = new ProductStorage();
export default productStorage;
