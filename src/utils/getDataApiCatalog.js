import axios from "axios";

class GetDataApiCatalog {
  async getData(url, method = "GET", data = null) {
    try {
      const headers = {};
      let body;
      if (data) {
        headers["Content-Type"] = "application/json";
        body = JSON.stringify(data);
      }

      const response = await axios.get(url, {
        headers,
        body,
      });
      return await response.data;
    } catch (error) {
      console.log(error.message);
      return false;
    }
  }
}
export const getDataCtatalog = new GetDataApiCatalog();


export async function request(url, method = "GET", data = null) {  
    try {
      const headers = {};
      let body;
      if (data) {
        headers["Content-Type"] = "application/json";
        body = JSON.stringify(data);
      }
      const response = await fetch(url, {
        headers,
        body,
      });
      return await response.json();
    } catch (e) {
      console.warn("Error", e.message);
    }
  }

  
  
  
  
  