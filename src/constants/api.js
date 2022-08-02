import { getDataCtatalog } from "../utils/getDataApiCatalog";

export const API_NOTEBOOKS = "http://localhost:4444/api/notebooks";
export const API_POSTS = "http://localhost:4444/api/post";

export const DATA_NOTEBOOKS = getDataCtatalog.getData(API_NOTEBOOKS);
export const DATA_POSTS = getDataCtatalog.getData(API_POSTS);
