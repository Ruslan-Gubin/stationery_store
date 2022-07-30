import { DATA_NOTEBOOKS } from "../../constants/api";
import { ROOT_ADMIN } from "../../constants/root";


class Admin {
  async render() {
    const data = await DATA_NOTEBOOKS;
    data.forEach(({ id, name, price, oldPrice, img }) => {
      //  data ? this.render(data) : error.render(ROOT_ADMIN);
      console.log({ id, name, price, oldPrice, img });
    });

    // let htmlCatalog = "";
    // htmlAdmin = `

    // `;

    //     const html = `
    // <ul class='admin-container'>
    // ${htmlAdmin}
    // </ul>
    // `;
    // ROOT_ADMIN.innerHTML = html;
  }
}

const shopAdmin = new Admin();
export default shopAdmin;
