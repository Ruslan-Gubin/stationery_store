import { DATA_ALBUM, DATA_NOTEBOOKS,  DATA_PENS } from "../../constants/api";
import { ROOT_SHOPPING } from "../../constants/root";
import localstorageUtils from "../../utils/localStorageUtils";
import { error } from "../Error/Error";



class Shopping {
  renderShopping(data) {
    const productsStore = localstorageUtils.getProducts();
    let htmlCatalog = "";
    let sumCatalog = 0;

    data.forEach(({ _id, name, price, img }) => {
      if (productsStore.indexOf(_id) !== -1) {
        htmlCatalog += `
        <tr class='chopping-element'>
        
        <td class='chopping-element__img'><img src='${img}'/></td>
        <td class='chopping-element__name'>${name}</td>
        <td class='chopping-element__price'>${price.toLocaleString()} Rub</td>
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
    <td class='chopping-element__price'>${sumCatalog.toLocaleString()} Rub</td>
    </tr>
    </table>
    </div>
    `;
    ROOT_SHOPPING.innerHTML = html;
    shoppingPage.eventListener();
  }

  async render() {
    let notebooks = await DATA_NOTEBOOKS;
    let album = await DATA_ALBUM;
    let pens = await DATA_PENS;

    function mergeArray (...arays) {
      let fuulArray = [];
      arays.forEach(aray => fuulArray = [...fuulArray, ...aray]);
      return fuulArray;
    }

    const data = mergeArray(notebooks,album,pens);
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
