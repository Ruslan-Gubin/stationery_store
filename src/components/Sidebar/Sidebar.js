import { ROOT_SIDEBAR } from "../../constants/root";
import {
  productsAlbum,
  productsNotebook,
  productsPens,
} from "../Products/Products";

const getTemplate = (data = [], menuId) => {
  const items = data.map((item) => {
    let cls = "";
    if (item.id === menuId) {
      productsNotebook.render();
      cls = "selectmenu";
    }
    return `
    <li class='${cls}' data-type='item' data-id='${item.id}'>${item.value}</li>
    `;
  });

  return `
  <div>
  <ul class="sidebar-container">
  ${items.join("")}
  </ul>
  </div>
  `;
};

class Sidebar {
  constructor(selector, options) {
    this.sidebar = selector;
    this.options = options;
    this.menuId = options.menuId;

    this.setup();
  }

  render() {
    const { data } = this.options;
    this.sidebar.classList.add("selectmenu");
    this.sidebar.innerHTML = getTemplate(data, this.menuId);
  }

  setup() {
    this.clickHandler = this.clickHandler.bind(this);
    this.sidebar.addEventListener("click", this.clickHandler);
  }

  clickHandler(event) {
    const { type } = event.target.dataset;

    if (type === "item") {
      const id = event.target.dataset.id;
      this.select(id);
    }
  }

  get current() {
    return this.options.data.find((item) => item.id === this.menuId);
  }

  select(id) {
    this.menuId = id;

    this.sidebar.querySelectorAll(`[data-type="item"]`).forEach((el) => {
      el.classList.remove("selectmenu");
    });
    this.sidebar.querySelector(`[data-id="${id}"]`).classList.add("selectmenu");

    this.options.onSelect ? this.options.onSelect(this.current) : null;
  }

  destroy() {
    this.sidebar.removeEventListener("click", this.clickHandler);
    this.sidebar.innerHTML = "";
  }
}

export const sidebar = new Sidebar(ROOT_SIDEBAR, {
  menuId: "1",
  data: [
    {
      id: "1",
      value: "Тетради",
      handler() {
          productsNotebook.render();
      },
    },
    {
      id: "2",
      value: "Альбомы",
      handler() {
        productsAlbum.render();
      },
    },
    {
      id: "3",
      value: "Ручки",
      handler() {
       
        productsPens.render();
      },
    },
  ],
  onSelect(item) {
    item.handler();  
  },
});
