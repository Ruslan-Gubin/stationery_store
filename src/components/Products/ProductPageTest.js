import { ROOT_PRODUCTS } from "../../constants/root";
import localstorageUtils from "../../utils/localStorageUtils";
import { error } from "../Error/Error";
import { API_NOTEBOOKS, DATA_NOTEBOOKS } from "../../constants/api";
import deleteItem from "../../utils/deleteItem";
import { headerShop } from "../Header/Header";
import productStorage from "../../utils/productLocalStorage";


class ProductsTest {
    constructor() {
        this.classNameActive = "products-element__button_active";
        this.labelAdd = "В корзину";
        this.labelRemove = "В корзине";
        
    
    }
    async renderBlender(newData) {
        const data = await DATA_NOTEBOOKS;
      
      let htmlCatalog = "";
      const productsStore = localstorageUtils.getProducts();
      headerShop.render(productsStore.length);
  


      newData.forEach(({_id, name, price, oldPrice, img})=>{
        htmlCatalog += `
        <li class='products-element'>
        <img class='products-element__img' src='${img}'/>
        <span class='products-element__price'>${price} Руб</span>
        <span class='products-element__oldprice'>${oldPrice}</span>
        <span class='products-element__name'>${name}</span>
        <button id='addproduct' class='products-element__button' data-id='${_id}'>
        
        </button>
        <button class='products-element__remove js-removeproduct' data-id='${_id}'>Удалить</button>
        </li>
        `;

        const html = `
        <ul class='products-container'>
        ${htmlCatalog}
        </ul>
        <ul class='products-pagination container' id='pagination'>
        </ul>
        `;

        ROOT_PRODUCTS.innerHTML = html;

    });
   
    let notesOnPage = 12;
    let countOfItems = Math.ceil(data.length / notesOnPage);
    let items = [];
    let pagination = document.getElementById('pagination');
    for ( let i = 1; i<=countOfItems; i++) {
        let li = document.createElement('li');
        li.classList.add('products-pagination__li');
        li.innerHTML = i;
        pagination.appendChild(li);
        items.push(li);
      }
      
    
   
    
    document.addEventListener('click', async (event) => {
        if (event.target.classList.contains('products-pagination__li')) {
            let active = document.querySelector('#pagination li.active');
            
            if (active) {
                active.classList.remove('active');
            }
        }
            event.target.classList.add('active');
            const pageNum = +event.target.innerHTML;
            const start = (pageNum  -1) * 10;
            const end = start + 10;
            const newData = data.slice(start, end);
            console.log(newData);   
     
    });
    
    deleteItem.removeItem(API_NOTEBOOKS, "js-removeproduct");
    productStorage.renderStorage();
    
} 
   

    
    
    
}    
    
    
    






const productsNotebookTest = new ProductsTest();

export default productsNotebookTest;