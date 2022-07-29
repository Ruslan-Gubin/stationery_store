import {  getDataCtatalog, request } from "../../utils/getDataApiCatalog";



class Test {
    async render(){
        const data1 = await getDataCtatalog.getData("http://localhost:4444/api/products");
        console.log(data1);
       const data2 = await request("http://localhost:4444/api/products");
       console.log(data2);
    }
}
const testApi = new Test();
export default testApi;

