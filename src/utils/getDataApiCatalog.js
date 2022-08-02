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
  async removeData(url, id) {
    return await fetch(`${url}/${id}`, {
      method: "delete",
    }).then((res) => res.json());
  }
}
export const getDataCtatalog = new GetDataApiCatalog();

export async function sendRequest(url, method = "GET", data = null) {
  const headers = {
    "Content-Type": "application/json",
  };
  return await fetch(url, {
    method: method,
    body: JSON.stringify(data),
    headers: headers,
  }).then((response) => {
    if (response.ok) {
      return response.json();
    }
    return response.json().then((error) => {
      const e = new Error("Что-то пошло не так");
      e.data = error;
      throw e;
    });
  });
}
