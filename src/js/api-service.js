
// export default function onSearch(e) {
//     e.preventDefault();
//     const searhQuery = e.target.value
//     const BASE_URL = `https://restcountries.eu/rest/v2/name/${searhQuery}`;

//     fetch(BASE_URL)
//         .then(r => r.json())
//     .then(console.log)
// }




// function fetchCountries(countryName) {
    
//     return fetch(`${BASE_URL}${countryName}`).then(response => response.json());
// }
export default class ApiServise{
    constructor() {
        this.searchQuery = '';
     }
    
    fetchCountries() {
        console.log(this)
        const BASE_URL = `https://restcountries.eu/rest/v2/name/${this.searchQuery}`;
          return fetch(BASE_URL)
        .then(response => response.json())
             
    }
    get query() {
        return this.searchQuery
    }
    set query(newQuery) {
        this.searchQuery = newQuery
        
    }
}