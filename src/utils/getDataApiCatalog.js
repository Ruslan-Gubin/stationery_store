import axios from "axios";

class GetDataApiCatalog {
  async getData(url) {
    try {
      const response = await axios.get(url, {
        params: {
          limit: 1000,
        },
      });
      return response.data;
    } catch (error) {
      console.log(error.message);
      return false;
    }
  }
}
export const getDataCtatalog = new GetDataApiCatalog();
