import { headerShop, productsStore } from "../components/Header/Header";
import localstorageUtils from "./localStorageUtils";




class EventProduct {
  constructor() {
    this.classNameActive = "products-element__button_active";
    this.labelAdd = "В корзину";
    this.labelRemove = "В корзине";
  }

  render() {
    document
      .querySelectorAll(".products-element__button")
      .forEach((element, id) => {
        headerShop.render(productsStore.length);

        element.addEventListener("click", () => {
          const { pushProduct, products } = localstorageUtils.putProducts(
            "el" + (id + 1)
          );

          if (pushProduct) {
            element.classList.add(this.classNameActive);
            element.innerHTML = this.labelRemove;
            headerShop.render((productsStore.length += 1));
          } else {
            element.classList.remove(this.classNameActive);
            element.innerHTML = this.labelAdd;
            headerShop.render((productsStore.length -= 1));
          }
        });
      });
    }
  }

const eventProduct = new EventProduct();

export default eventProduct;
