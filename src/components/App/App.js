import productsNotebook from "../Products";
import mainSidebar from "../Sidebar";
import shopFooter from "../Footer";
import spinnerMain from "../Spinner";
import { headerShop } from "../Header/Header";
import postsProducts from "../Posts";


import "../../style/index.scss";
import { postFormBase } from "../Posts/Posts";


class App {
  async render() {
    spinnerMain.render();
    await headerShop.render();
    await productsNotebook.render();
    mainSidebar.render();
    shopFooter.render();
    postsProducts.closePosts();
    // postsProducts.postFormBase();
    headerShop.showPostsModels();
    spinnerMain.handleClear();
  }
}

export default new App();







































