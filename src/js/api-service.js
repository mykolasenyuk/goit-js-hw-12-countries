
import PNotify from '../../node_modules/pnotify/dist/es/PNotify.js'
import axios from 'axios'

export default class ApiServise{
    constructor() {
        this.searchQuery = '';
     }
    
    fetchCountries() {

        // axios.defaults.baseURL = 'https://restcountries.eu/rest/v2/name/';

        // console.log(axios.get(`https://restcountries.eu/rest/v2/name/${this.searchQuery}`))
        // return axios
        //     .get(`https://restcountries.eu/rest/v2/name/${this.searchQuery}`)
           
        //     .then(response => {
        //     console.log(response.data)
        //           if (response.ok) {
        //               return response.data.json();
        //           }
                  
        // //               PNotify.notice({
        // //   text: 'Country is not found!',
        // // })
        //       }       
        // ) 
        

        const BASE_URL = `https://restcountries.eu/rest/v2/name/${this.searchQuery}`;
        return fetch(BASE_URL)
            
              .then(response => {
        // console.log(response)
                  if (response.ok) {
                    //   console.log(response)
                      return response.json();
                      
                  }
                  
                      PNotify.error({
          text: 'Country is not found!',
        })
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