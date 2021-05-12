import countryCardTemplate from '../templates/country-card.hbs';
import countiesCardTemplate from '../templates/countries.hbs'
import ApiServise from '../js/api-service'




const refs = {
    // card: document.querySelector('.card'),
    input: document.querySelector('input'),
    countriesList: document.querySelector('.countries-list')
}

console.log(refs.countriesList);


const apiServise = new ApiServise()


refs.input.addEventListener('input', onSearch);

function onSearch(e) {
    e.preventDefault();
    clearCardList();

    apiServise.query = e.target.value;
   
    apiServise.fetchCountries().then(data => {
        console.log(data)
        if (data.length > 10) {
           return alert('too many') 
        }else if (data.length > 1) {
           countriesMarup(data) 
        }
         else{countryMarup(data)}
        
        
    })

}
function countriesMarup(items) {
    refs.countriesList.insertAdjacentHTML
    ('beforeend',countiesCardTemplate(items))
}

function countryMarup(items) {
    refs.countriesList.insertAdjacentHTML
    ('beforeend',countryCardTemplate(items))
}
//
// function createCoutriesListMarup(items) {
//   return countiesCardTemplate(items);
// }






function clearCardList() {
    refs.countriesList.innerHTML = '';
    
}



