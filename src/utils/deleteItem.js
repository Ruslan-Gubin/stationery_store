import App from "../components/App";
import { getDataCtatalog } from "./getDataApiCatalog";



class DeleteItem {

    removeItem(url, classItem) {
        document.addEventListener("click", async (event) => {
          if (event.target.classList.contains(classItem)) {
            const id = event.target.getAttribute("data-id");
            await getDataCtatalog.removeData(url, id);

          }
        });
      }

}

const deleteItem = new DeleteItem(); 

export default deleteItem;