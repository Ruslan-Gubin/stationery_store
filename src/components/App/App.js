import productsNotebook from "../Products";
import mainSidebar from "../Sidebar";
import shopFooter from "../Footer";
import spinnerMain from "../Spinner";
import { headerShop } from "../Header/Header";
import "../../style/index.scss";










class App {
  async render() {
    spinnerMain.render();
    await headerShop.render();
    await productsNotebook.render();
    mainSidebar.render();
    shopFooter.render();
    spinnerMain.handleClear();
    

  }
}

export default new App();







































