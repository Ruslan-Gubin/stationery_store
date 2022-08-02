import { sendRequest } from "./getDataApiCatalog";


class GetFormData {
  getFormPostData(formName, url) {
    formName.addEventListener("submit", async (e) => {
      e.preventDefault();

      const formData = new FormData(formName);
      const data = Object.fromEntries(formData.entries());

      await sendRequest(url, "POST", data)
        .then(() => formName.reset())
        .catch((err) => console.log(err));
    });
  }
}
const getFormData = new GetFormData();
export default getFormData;
