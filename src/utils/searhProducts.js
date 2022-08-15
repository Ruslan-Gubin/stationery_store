// const { DATA_NOTEBOOKS, DATA_ALBUM, DATA_PENS } = require("../constants/api");


// async function searhProducts() {

//   const formSearh = document.querySelector('#formSearh');

//     formSearh.addEventListener("submit", async (e) => {
//         e.preventDefault();

//         const formData = new FormData(formSearh);
//         const data = Object.fromEntries(formData.entries());
  
        
//       });



//     let notebooks = await DATA_NOTEBOOKS;
//     let album = await DATA_ALBUM;
//     let pens = await DATA_PENS;
    
//     function mergeArray (...arays) {
//         let fuulArray = [];
//         arays.forEach(aray => fuulArray = [...fuulArray, ...aray]);
//         return fuulArray;
//     }
//     const data = mergeArray(notebooks,album,pens);
  

// }
// searhProducts();

// export default searhProducts;