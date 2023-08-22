/* import axios from 'axios'
import VueAxios from 'vue-axios'
import Vue from 'vue'
Vue.use(VueAxios, axios)

axios.defaults.baseURL = 'http://localhost/backend/public/api';
 */
import axios from "axios";

export default axios.create({
  baseURL: "http://localhost/backend/public/api",
  headers: {
    "Content-type": "application/json"
  }
});
   