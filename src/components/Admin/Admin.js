import { API_ALBUM, API_NOTEBOOKS } from "../../constants/api";
import { ROOT_ADMIN } from "../../constants/root";
import getFormData from "../../utils/getFormData";




class Admin {
  
  async render() {
    let htmlInput = "";
    
    htmlInput = `
    <div class='admin-form__close'>
    <div class='admin-form__close-element'>Х</div>
    </div>
    <form  class="admin-form" action="/" method="POST" id="formAddProduct">
      
    <input type="text" name='name' class="admin-form__element" placeholder='Название товара' />  
    <input type="number"  name='price' class="admin-form__element" placeholder='Стоимость' />  
    <input type="number" name='oldPrice' class="admin-form__element" placeholder='Старая цена' />  
    <input type="text" name='img' class="admin-form__element" placeholder='Фото' />  
    <button  class="admin-form__btn" type='submit'>Создать</button>  
    </form>
    `;
    
    
    const html = `
    
    <div class='admin-container'>
    ${htmlInput}
    </div> 
    
    `;
    ROOT_ADMIN.innerHTML = html;
    this.closeAddProduct();
    getFormData.getFormPostData(formAddProduct, API_ALBUM);
     
    
  }

  closeAddProduct() {
    document.querySelectorAll(".admin-form__close").forEach((item) => {
      item.addEventListener("click", () => {
        ROOT_ADMIN.innerHTML = "";
      });
    });
  }
}

const shopAdmin = new Admin();
export default shopAdmin;
