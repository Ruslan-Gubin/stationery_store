

import { ROOT_HEADER } from "../../constants/root";
import { HEADER } from "../../server/header";

import localstorageUtils from "../../utils/localStorageUtils";
import shoppingPage from "../Shopping/Shopping";
import spinnerMain from "../Spinner";



class Header {
  render(count) {
    let htmlHeader = "";
    HEADER.forEach(({ logo, basket, input, message, search }) => {
      
      htmlHeader = `
      <div class='header-element container'>
      <img class='header-element__logo' src='${logo}'/>
      <input class='header-element__search' type='text' placeholder='${search}'/>
      <div class='header-element__registration'>  
      <img src='${input}'/>
      </div>   
      <img  class='header-element__registration__img' src='${basket} '/>
      <span class='header-element__count'>
      ${count}
      </span>
      <button class='header-element__button'>${message}</button>
      </div>
      `;
    });

    const html = `
    <div class='header-container'>
    ${htmlHeader}
    </div>
    `;

    ROOT_HEADER.innerHTML = html;
    headerShop.eventListener();
  }
  eventListener() {
   document
      .querySelectorAll(".header-element__registration__img")
      .forEach((element) => {
        element.addEventListener("click", () => {
          (async () => {
        await  shoppingPage.render();  
      })();


        });
      });
  }
}
export const productsStore = localstorageUtils.getProducts();

export const headerShop = new Header();
