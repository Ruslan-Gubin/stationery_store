import { getDataCtatalog } from "./getDataApiCatalog";

class DeleteItem {
    removeItem(url, classItem) {
        document.addEventListener("click", async (event) => {
          if (event.target.classList.contains(classItem)) {
            const id = event.target.getAttribute("data-id");
            await getDataCtatalog.removeData(url, id);
            console.log('delete Item');
          }
        });
      }

}

const deleteItem = new DeleteItem(); 

export default deleteItem;