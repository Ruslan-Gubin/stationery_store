import shopFooter from "../Footer";
import spinnerMain from "../Spinner";
import { headerShop } from "../Header/Header";
import postsProducts from "../Posts";
import "../../style/index.scss";

import as from "../Modal";
import { sidebar } from "../Sidebar/Sidebar";
import shopAdmin from "../Admin/Admin";
import { selection } from "../Select/testSelect";


class App {
async  render() {
    spinnerMain.render();
    headerShop.render();
    shopFooter.render();
    postsProducts.closePosts();
    headerShop.showPostsModels();
    
    sidebar.render();

    spinnerMain.handleClear();
  }
}

export default new App();
