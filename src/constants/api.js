import { getDataCtatalog } from "../utils/getDataApiCatalog";

export const API_NOTEBOOKS = 'http://localhost:4444/api/notebooks';
export const DATA_NOTEBOOKS =  getDataCtatalog.getData(API_NOTEBOOKS);




