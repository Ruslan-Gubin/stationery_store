import modal from "../components/Modal/Modal";
import { ROOT_MODAL } from "../constants/root";

const fruits = [
  {id: 1, title: 'Яблоки', price: 20, img: 'https://e1.edimdoma.ru/data/ingredients/0000/2374/2374-ed4_wide.jpg?1487746348'},
  {id: 2, title: 'Апельсины', price: 30, img: 'https://fashion-stil.ru/wp-content/uploads/2019/04/apelsin-ispaniya-kg-92383155888981_small6.jpg'},
  {id: 3, title: 'Манго', price: 40, img: 'https://itsfresh.ru/upload/iblock/178/178d8253202ef1c7af13bdbd67ce65cd.jpg'},
];

const toHTML = fruit => `
<div class="col"> 
        <div class="card">
          <img class="card-img-top" style="height: 300px;" src="${fruit.img}" alt='${fruit.title}'>
          <div class="card-body">
            <h5 class="card-title">${fruit.title}</h5>
            <a href="#" class="btn btn-primary" data-btn='price'>Посмотреть цену</a>
            <a href="#" class="btn btn-danger">Удалить</a>
          </div>
        </div>
         </div>
`;

function render  () {
  let html =  fruits.map(toHTML).join('');
  document.querySelector('#fruits').innerHTML = html;
}
render();

Element.prototype.appendAfter = function(element) {
  element.parentNode.insertBefore(this, element.nextSibling);
};

function noop() {}

function _createModalFooter(buttons = []) {
if (buttons.length === 0) {
  return document.createElement('div');
}
const wrap = document.createElement('div');
wrap.classList.add('modal-footer');
buttons.forEach(btn => {
const btns = document.createElement('button');
btns.textContent = btn.text;
btns.classList.add('btn');
btns.classList.add(`btn-${btn.type}`);
btns.onclick = btn.handler || noop;
wrap.appendChild(btns);
});

return wrap;
}

let modalData = {
title: 'First Modal',
closable: true,
content:`
<h4>Modal is working</h4>
<p>text text text</p>
`,
width: '400px',
  footerButtons:[
   {text: 'Ok', type: 'primary', handler() {
    modal.setContent('Вы нажали кнопку: Ok');
    
    }},
    {text: 'Cancel', type: 'danger', handler() {
      modal.setContent('Вы нажали кнопку: Cansel');
    }}
  ]
};

export function _createModal() {
    const DEFAULT_WIDTH = '600px';
    const {content, title, closable, width, footerButtons} = modalData;
    const modal = document.createElement("div");
    modal.classList.add("rmodal");    
  modal.insertAdjacentHTML("afterbegin",`
      <div class="modal-overlay"data-close='true'>
        <div class="modal-window" style='width: ${width || DEFAULT_WIDTH}'>
          <div class="modal-header">
            <span class="modal-title">${title || 'Окно' }</span>
            ${closable ? `<span class="modal-close" data-close='true'>X</span>` : ''}
          </div>
          <div class="modal-body" data-content>
            ${content || ''}
          </div>          
          </div>
        </div>
      </div>
      `
  );
  const footer = _createModalFooter(footerButtons);
  footer.appendAfter(modal.querySelector('[data-content]'));
  ROOT_MODAL.appendChild(modal);
  return modal;
}

document.addEventListener('click', event => {
  event.preventDefault();
  const btnType = event.target.dataset.btn;
 if (btnType === 'price') {
console.log('price');
 }
});


