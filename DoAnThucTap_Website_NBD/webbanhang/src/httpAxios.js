import axios from "axios";
import {urlAPI} from "./config";
const httpAxios = axios.create({
    baseURL: urlAPI,
    timeout: 90000,
    headers: {'X-Custom-Header': 'foobar'}
  });

export default httpAxios;