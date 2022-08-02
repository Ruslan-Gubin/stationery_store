import productsNotebook from "../Products";
import mainSidebar from "../Sidebar";
import shopFooter from "../Footer";
import spinnerMain from "../Spinner";
import shopAdmin from "../Admin/Admin";
import { headerShop } from "../Header/Header";
import postsProducts from "../Posts/Posts";

import "../../style/index.scss";


class App {
  async render() {
    spinnerMain.render();
    await headerShop.render();
    await productsNotebook.render();
    mainSidebar.render();
    shopFooter.render();
    spinnerMain.handleClear();
    // shopAdmin.render();
    postsProducts.render();
  }
}

export default new App();







































