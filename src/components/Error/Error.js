
class Error {
 
    render(paht) {
    let html = `
        <div class='error-container'>
        
        <div class='error-message'>
        <h3>Нет доступа! </h3>
        <p> Попробуйте зайти позже</p>
        </div>
        
        </div>
        `;
        paht.innerHTML = html;
 
      }
      

    }
    
    export const error = new Error();



