import { IMG_CATALOG } from "../../constants/imgCatalog";
import { ROOT_SPINNER } from "../../constants/root";


class Spinner {
    handleClear() {
        ROOT_SPINNER.innerHTML = '';
    }


    render() {

        let html = '';
        
        IMG_CATALOG.forEach(({img})=> {
            
            html = `
            <div class='spinner-container'>
            <img class='spinner__img' src='${img}' />
            </div>
            `;
        });
        
        ROOT_SPINNER.innerHTML = html;
        
    }
}

const spinnerMain = new Spinner();

export default spinnerMain;