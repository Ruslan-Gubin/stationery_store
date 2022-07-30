import { ROOT_SIDEBAR } from "../../constants/root";
import { SIDEBAR_MENU } from "../../server/SidebarMenu";





class Sidebar {
   
    render() {
        let htmlSidebar = '';
        
        SIDEBAR_MENU.forEach(({notes, map, album, pens, plasticine, graters, Pencils, notesArr}) => {
            
            htmlSidebar = `
            <div class='sidebar-item'>
            <li>${notes}</li>
            <li>${map}</li>
            <li>${album}</li>
            <li>${Pencils}</li>
            <li>${pens}</li>
            <li>${plasticine}</li>
            <li>${graters}</li>
            <li>${notesArr.name}</li>
            </div>    
            `;
        });
        
        const html =`
        <ul class='sidebar-container'>
            ${htmlSidebar}
        </ul>
        
        `;

        ROOT_SIDEBAR.innerHTML = html; 

    }
}

const mainSidebar = new Sidebar();


export default mainSidebar;