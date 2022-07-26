
import { ROOT_FOOTER } from "../../constants/root";
import { HEADER } from "../../server/header";



class Footer {
  render() {
    let htmlFooter = '';

    HEADER.forEach(({logo})=> {

        htmlFooter = `
        <div class="footer-element">
        <div class="footer-element__title"></div>
        <div class="footer-element__text"></div>
        <ul>
        <li></li>
        <li></li>
      </ul>
      <div class="footer-element__coperait"></div>
      </div>
      `;
    })


const html = `
<div class='footer-container'>
    ${htmlFooter}
</div>
`;

ROOT_FOOTER.innerHTML = html;

  }
}

const shopFooter = new Footer();


export default shopFooter;