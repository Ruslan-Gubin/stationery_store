import { API_NOTEBOOKS } from "../../constants/api";
import { ROOT_SHOPPING } from "../../constants/root";
import { getDataCtatalog } from "../../utils/getDataApiCatalog";
import localstorageUtils from "../../utils/localStorageUtils";
import { error } from "../Error/Error";

class Shopping {

  renderShopping(data) {
    const productsStore = localstorageUtils.getProducts();
    let htmlCatalog = "";
    let sumCatalog = 0;
    
    data.forEach(({ id, name, price }) => {
      if (productsStore.indexOf(id) !== -1) {
        htmlCatalog += `
        <tr class='chopping-element'>
        <td class='chopping-element__name'>${name}</td>
        <td class='chopping-element__price'>${price.toLocaleString()}</td>
        </tr>
        `;
        sumCatalog += price;
      }
    });
    
    const html = `
    <div class='chopping-container'>
    <div class='chopping__close'>
    <div class='chopping__close-element'>Х</div>
    </div>
    
    
    <table>
    ${htmlCatalog}
    <tr class='chopping-element'>
    <td class='chopping-element__name'>Сумма:</td>
    <td class='chopping-element__price'>${sumCatalog.toLocaleString()}</td>
    </tr>
    </table>
    </div>
    `;
    ROOT_SHOPPING.innerHTML = html;
    shoppingPage.eventListener();
  }
  
  async render() {
    const data = await getDataCtatalog.getData(API_NOTEBOOKS); 

    data ? this.renderShopping(data) : error.render(ROOT_SHOPPING); 
  }
  eventListener() {
    document.querySelectorAll(".chopping__close").forEach((item) => {
          item.addEventListener("click", () => {
            ROOT_SHOPPING.innerHTML = "";
          });
        });
      }
    }
    
    const shoppingPage = new Shopping();
    
    
    export default shoppingPage;
    