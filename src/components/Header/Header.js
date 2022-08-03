import { ROOT_HEADER } from "../../constants/root";
import { HEADER } from "../../server/header";
import localstorageUtils from "../../utils/localStorageUtils";
import shopAdmin from "../Admin/Admin";
import postsProducts from "../Posts";
import shoppingPage from "../Shopping";



class Header {
  render(count) {
    let htmlHeader = "";
    HEADER.forEach(({ addProduct, logo, basket, input, message, search }) => {
      
      htmlHeader = `
      <div class='header-element container'>
      <img class='header-element__logo' src='${logo}'/>
      <button class='header-element__addproduct'>${addProduct}</button>
      <input class='header-element__search' type='text' placeholder='${search}'/>
      <div class='header-element__registration'>  
      <img src='${input}'/>
      </div>   
      <img  class='header-element__registration__img' src='${basket} '/>
      <span class='header-element__count'>
      ${count}
      </span>
      <div class='header-element__posts'>
      <button class='header-element__button'>${message}</button>
      </div>
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
    headerShop.showAddProductsModels();
 
 
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

          showAddProductsModels() {
          document.querySelector('.header-element__addproduct').addEventListener('click', (e) => {
          shopAdmin.render();
          });
        }
        
        showPostsModels(){
            document.addEventListener('click', async (e)=> {
              if (e.target.classList.contains('header-element__button')) {
                await  postsProducts.render(); 
              }
            });
          }
        


      }

export const productsStore = localstorageUtils.getProducts();

export const headerShop = new Header();
