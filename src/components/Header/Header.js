import { DATA_ALBUM, DATA_NOTEBOOKS, DATA_PENS } from "../../constants/api";
import { ROOT_HEADER, ROOT_PRODUCTS } from "../../constants/root";
import { HEADER } from "../../server/header";
import localstorageUtils from "../../utils/localStorageUtils";
import shopAdmin from "../Admin/Admin";
import postsProducts from "../Posts";
import { Products } from "../Products/Products";
import shoppingPage from "../Shopping";



class Header {
constructor() {

}

 async render(count) {
    let htmlHeader = "";
    HEADER.forEach(({ addProduct, logo, basket, input, message, search }) => {
      
      htmlHeader = `
      <div class='header-element container'>
      <img class='header-element__logo' src='${logo}'/>
      <button class='header-element__addproduct'>${addProduct}</button>

      <form id="formSearh" action="/" method="POST">
      <input name='search' class='header-element__search' type='text' value="" autofocus placeholder='${search}'/>
      </form>

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

    
    async function searhProducts() {

      formSearh.addEventListener("submit", async (e) => {
          e.preventDefault();
          const formData = new FormData(formSearh);
          const searchText = Object.fromEntries(formData.entries());

      let notebooks = await DATA_NOTEBOOKS;
      let album = await DATA_ALBUM;
      let pens = await DATA_PENS;

      function mergeArray (...arays) {
        let fuulArray = [];
        arays.forEach(aray => fuulArray = [...fuulArray, ...aray]);
        return fuulArray;
      }
      const data = mergeArray(notebooks,album,pens);

     function mergSearch(arays,text) {  
    let result =  arays.filter(el => el.name.match(text));
      return result;
     }
      const dataSearch = mergSearch(data,searchText.search );
     const productsSearh = new Products(dataSearch, ROOT_PRODUCTS);
     productsSearh.render();
     productsSearh.renderStorage();
     productsSearh.removeCard();
    
    });  
    }
    searhProducts();
      

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
