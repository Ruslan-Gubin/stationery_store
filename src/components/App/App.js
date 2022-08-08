import productsNotebook from "../Products";
import mainSidebar from "../Sidebar";
import shopFooter from "../Footer";
import spinnerMain from "../Spinner";
import { headerShop } from "../Header/Header";
import postsProducts from "../Posts";
import "../../style/index.scss";
import productsNotebookTest from "../Products/ProductPageTest";
import modal from "../Modal/Modal";






class App {
  async render() {
    spinnerMain.render();
    await headerShop.render();
    await productsNotebook.render();
    //  await productsNotebookTest.render();
    mainSidebar.render();
    shopFooter.render();
    postsProducts.closePosts();
    headerShop.showPostsModels();
   
modal.render();

    spinnerMain.handleClear();
  }
}

export default new App();
