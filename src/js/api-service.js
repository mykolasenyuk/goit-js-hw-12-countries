
import PNotify from '../../node_modules/pnotify/dist/es/PNotify.js'

console.log(PNotify.notice())
export default class ApiServise{
    constructor() {
        this.searchQuery = '';
     }
    
    fetchCountries() {
        // console.log(this)
        const BASE_URL = `https://restcountries.eu/rest/v2/name/${this.searchQuery}`;
          return fetch(BASE_URL)
              .then(response => {
                  if (response.ok) {
                      return response.json();
                  }
                  else {
                      PNotify.error({
          text: '404 Country is not found!',
        })}
              }       
              )
             
    }
    get query() {
        return this.searchQuery
    }
    set query(newQuery) {
        this.searchQuery = newQuery
        
    }
}