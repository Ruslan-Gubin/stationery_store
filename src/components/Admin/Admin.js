import { API_ALBUM, API_NOTEBOOKS, API_PENS } from "../../constants/api";
import { ROOT_ADMIN } from "../../constants/root";
import { sendRequest } from "../../utils/getDataApiCatalog";

class Admin {
  async render() {
    


    let htmlInput = "";
    htmlInput = `
    <div class='admin-form__close'>
    <div class='admin-form__close-element'>Х</div>
    </div>
    <form  class="admin-form" action="/" method="POST" id="formAddProduct">

    <select name="products" size="3">
        <option value="${API_NOTEBOOKS}" selected="selected">Тетради</option>
        <option value="${API_ALBUM}">Альбомы</option>
        <option value="${API_PENS}">Ручки</option>
    </select>
      
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

    function getFormPostData() {
      formAddProduct.addEventListener("submit", async (e) => {
        e.preventDefault();

        const formData = new FormData(formAddProduct);
        const data = Object.fromEntries(formData.entries());
  
        await sendRequest(data.products, "POST", data)
          .then(() => formAddProduct.reset())
          .catch((err) => console.log(err));
      });
    }
    getFormPostData();
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
