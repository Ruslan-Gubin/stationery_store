import shopFooter from "../Footer";
import spinnerMain from "../Spinner";
import { headerShop } from "../Header/Header";
import postsProducts from "../Posts";
import "../../style/index.scss";

// import as from "../Modal";
import { sidebar } from "../Sidebar/Sidebar";
import shopAdmin from "../Admin/Admin";
import { productsNotebook } from "../Products/Products";
import searhProducts from "../../utils/searhProducts";
// import { selection } from "../Select/testSelect";



class App {
async  render() {
    spinnerMain.render();
    headerShop.render();
    shopFooter.render();
    postsProducts.closePosts();
    headerShop.showPostsModels();
    
   

    productsNotebook.render();
    
    sidebar.render();

    spinnerMain.handleClear();
  }
}

export default new App();
