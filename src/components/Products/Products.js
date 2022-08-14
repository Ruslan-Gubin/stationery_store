import { API_ALBUM, API_NOTEBOOKS, API_PENS, DATA_ALBUM, DATA_NOTEBOOKS, DATA_PENS } from "../../constants/api";
import {  ROOT_PRODUCTS } from "../../constants/root";
import { getDataCtatalog } from "../../utils/getDataApiCatalog";
import localstorageUtils from "../../utils/localStorageUtils";
import { headerShop, productsStore } from "../Header/Header";



class Products {
 constructor (data, root, url) {
this.currentPage = 1;
this.rows = 8;
this.data = data;
this.wrapper = root;
this.url = url;
this.classNameActive = "products-element__button_active";
this.labelAdd = "В корзину";
this.labelRemove = "В корзине";
this.paginationElement = document.createElement('ul');
this.paginationElement.classList.add('products-pagination');
this.paginationElement.classList.add('container');
this.paginationElement.setAttribute('id', 'pagination');


this.renderStorage();
this.removeCard();
}

 async render () {
   const data = await this.data;
   const productsStore = localstorageUtils.getProducts();
   headerShop.render(productsStore.length);
   
   this.wrapper.innerHTML = "";
   this.currentPage--;
    
      let container = document.createElement('ul');
      container.classList.add('products-container');
  
      let start = this.rows * this.currentPage;
      let end = start + this.rows;
      let paginatedItems = data.slice(start, end);
      for (let i = 0; i < paginatedItems.length; i++) {
        let item = paginatedItems[i];
        
        let { name, _id, img, price, oldPrice } = item;
   
      let item_element = document.createElement('li');
       item_element.classList.add('products-element');
       if (oldPrice == undefined) {
        oldPrice = "";
      }

      let activeClass = "";
      let activeText = "";
      
      if (productsStore.indexOf(_id) === -1) {
        activeText = this.labelAdd;
      } else {
        activeClass = " " + this.classNameActive;
        activeText = this.labelRemove;
      }
       item_element.innerHTML = `
       <img class='products-element__img' src='${img}'/>
       <span class='products-element__price'>${price} Руб</span>
       <span class='products-element__oldprice'>${oldPrice}</span>
       <span class='products-element__name'>${name}</span>
       <button id='addproduct' class='products-element__button${activeClass}' data-id='${_id}'>
       ${activeText}
       </button>
        <button class='products-element__remove js-removeproduct' data-remove data-id='${_id}'>Удалить</button>
        
        `;
        container.appendChild(item_element);
        this.wrapper.appendChild(container);
        this.wrapper.appendChild( this.paginationElement);
      }
    
  this.paginationElement.innerHTML = "";
      
          let page_count = Math.ceil(data.length / this.rows);
          for (let i = 1; i < page_count + 1; i++) {
          let btn = this.paginationButton(i, data);   
          this.paginationElement.appendChild(btn);
          }
        }

          paginationButton(page){
            let button = document.createElement('li');
            button.innerText = page;
            if (this.currentPage == page - 1) button.classList.add('active');
            button.addEventListener('click', () => {
                        
              this.currentPage = page;
              this.render();

            });
            
            return button;
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
      
      removeCard() {
        document.addEventListener("click", async (event) => {
          if (event.target.classList.contains('js-removeproduct')) {
          const id = event.target.getAttribute("data-id");
          await getDataCtatalog.removeData(this.url, id);
        }
      });
    }
  
  }
      
export const productsNotebook = new Products(DATA_NOTEBOOKS, ROOT_PRODUCTS, API_NOTEBOOKS);
export const productsAlbum = new Products(DATA_ALBUM, ROOT_PRODUCTS, API_ALBUM);
export const productsPens = new Products(DATA_PENS, ROOT_PRODUCTS, API_PENS);



















// let Chunk = require('./Chunk')

// class Pagination {

//     /**
//      * @param {Array} list
//      * @param {Number} perPage
//      */
//     constructor(list = [], perPage = 10) {
//         this.list = list
//         this.perPage = perPage

//         this._offset = 0
//         this._page_number = 1
//     }

//     /**
//      * @returns {Number}
//      */
//     count() {
//         return this._list.length
//     }

//     countLastPage() {
//         return this.count() - (this._perPage * (this.nbPages - 1))
//     }

//     /**
//      * @returns {boolean}
//      */
//     hasMore() {
//         return this._page_number < this.nbPages
//     }

//     /**
//      * @returns {Pagination}
//      */
//     prevPage() {
//         return this.goToPage(this._page_number -= 1)
//     }

//     /**
//      * @returns {Pagination}
//      */
//     nextPage() {
//         return this.goToPage(this._page_number += 1)
//     }

//     /**
//      * @returns {Pagination}
//      */
//     firstPage() {
//         return this.goToPage(1)
//     }

//     /**
//      * @returns {Pagination}
//      */
//     lastPage() {
//         return this.goToPage(this.nbPages)
//     }

//     /**
//      * Get paginated chunk of the list
//      *
//      * @param {Boolean} to_array
//      * @returns {Chunk|Array}
//      */
//     getPaginated(to_array = false) {
//         let list = this._perPage >= this.count()
//             ? this._list
//             : this._list.slice(this._offset, this._offset + this._perPage)

//         return to_array ? list : new Chunk(list)
//     }

//     /**
//      * @param {Number|String} page_number
//      * @returns {Pagination}
//      */
//     goToPage(page_number) {
//         if (!page_number)
//             throw new Error('[Err] Pagination.goToPage - page_number argument must be defined')

//         if (page_number.constructor !== Number && page_number.constructor !== String)
//             throw new Error('[Err] Pagination.goToPage - page_number argument must be a number')

//         if (page_number.constructor === String)
//             page_number = parseInt(page_number, 10)

//         if (page_number <= 0)
//             page_number = 1

//         if (page_number > this.nbPages)
//             page_number = this.nbPages

//         this._page_number = page_number
//         this._offset = this._perPage * (this._page_number - 1)

//         return this
//     }

//     /**
//      * Reset pagination
//      *
//      * @returns {Pagination}
//      */
//     reset() {
//         this._offset = 0
//         this._page_number = 1

//         return this
//     }

//     /**
//      * Returns a chunked array or page indexed object of the list
//      *
//      * @param {Boolean} indexed_by_page
//      * @param {Boolean} to_array
//      * @returns {Object|Chunk|Array}
//      */
//     chunkList(indexed_by_page = false, to_array = false) {
//         let chunk_list = {}

//         this.firstPage()
//         chunk_list[this.pageNumber] = this.getPaginated(to_array)

//         while (this.hasMore()) {
//             this.nextPage()
//             chunk_list[this.pageNumber] = this.getPaginated(to_array)
//         }

//         if (!indexed_by_page) {
//             chunk_list = Object.values(chunk_list)
//             return to_array ? chunk_list : new Chunk(chunk_list)
//         }

//         return chunk_list
//     }

//     /**
//      * @returns {Number}
//      */
//     get pageNumber() {
//         return this._page_number
//     }

//     /**
//      * @returns {Number}
//      */
//     get nbPages() {
//         return Math.ceil(this.count() / this._perPage)
//     }

//     /**
//      * @returns {Array}
//      */
//     get list() {
//         return this._list
//     }

//     /**
//      * @returns {Number}
//      */
//     get perPage() {
//         return this._perPage
//     }

//     /**
//      * @param {Array} list
//      * @returns {Pagination}
//      */
//     set list(list) {
//         if (!Array.isArray(list))
//             throw new Error('[Err] Pagination.constructor - list argument must be a valid JavaScript Array')

//         this._list = list
//         return this
//     }

//     /**
//      * @param {Number} perPage
//      * @returns {Pagination}
//      */
//     set perPage(perPage) {
//         if (perPage.constructor !== Number && perPage.constructor !== String && isNaN(perPage))
//             throw new Error('[Err] Pagination.perPage property setter - perPage argument must be a number')

//         if (perPage.constructor === String)
//             perPage = parseInt(perPage, 10)

//         this._perPage = Math.abs(perPage)
//         return this
//     }

// }

// module.exports = Pagination

// class Chunk {

//     constructor(chunk = []) {
//         this._chunk = chunk
//     }

//     count() {
//         return this._chunk.length
//     }

//     empty() {
//         return this.count() === 0
//     }

//     notEmpty() {
//         return !this.empty()
//     }

//     first() {
//         return this._chunk[0]
//     }

//     last() {
//         return this._chunk[this._chunk.length - 1]
//     }

//     /**
//      * Get nth element (begins to 1)
//      *
//      * @param {Number} n
//      * @returns {*|null}
//      */
//     nth(n) {
//         return this._chunk[n - 1] || null
//     }

//     /**
//      * Returns true if list contains value passed as argument, false otherwise
//      *
//      * @param {*} value
//      * @returns {boolean}
//      */
//     contains(value) {
//         return this._chunk.includes(value)
//     }

//     /**
//      * Get chunked list only with keys passed as arguments
//      * Works only with array of objects
//      *
//      * @returns {Chunk}
//      */
//     only(args = []) {
//         if (!Array.isArray(args) && args.constructor !== String)
//             throw new Error('[Err] Chunk.only - args argument must be a valid JavaScript Array or string')

//         if (args.constructor === String)
//             args = [args]

//         let list = []

//         if (args.length) {
//             this._chunk.forEach(item => {
//                 let o = {}
//                 args.forEach(v => {
//                     if (item[v])
//                         o[v] = item[v]
//                 })
//                 list.push(o)
//             })
//         }

//         return new Chunk(list)
//     }

//     /**
//      * Returns chunked list as an array
//      *
//      * @returns {Array}
//      */
//     toArray() {
//         return this._chunk
//     }

//     /**
//      * Paginate the chunked list
//      *
//      * @param {Number} perPage
//      * @returns {Pagination}
//      */
//     paginate(perPage) {
//         const Pagination = require('./Pagination')
//         return new Pagination(this._chunk, perPage)
//     }

// }

// module.exports = Chunk