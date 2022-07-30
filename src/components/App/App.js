import productsNotebook from "../Products";
import mainSidebar from "../Sidebar";
import shopFooter from "../Footer";
import spinnerMain from "../Spinner";
import shopAdmin from "../Admin/Admin";

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
    shopAdmin.render();

  }
}

export default new App();







































