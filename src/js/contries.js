import countryCardTemplate from '../templates/country-card.hbs';
import countiesCardTemplate from '../templates/countries.hbs'
import ApiServise from '../js/api-service'




const refs = {
    // card: document.querySelector('.card'),
    input: document.querySelector('input'),
    countriesList: document.querySelector('countries-list')
}

console.log(refs.countriesList);


const apiServise = new ApiServise()


refs.input.addEventListener('input', onSearch);

function onSearch(e) {
    e.preventDefault();
    // clearCardList();

    apiServise.query = e.target.value;
    // if (apiServise.query === '') {
    //     return alert('empty');
    // }
    apiServise.fetchCountries().then(data => {
        console.log(data)
     createCoutriesListMarup(data)
    })

}
function createCoutriesListMarup(item) {
    refs.countriesList.insertAdjacentHTML('beforeend', item)
}
// function buildListMarkupItem(items) {
//   return countiesCardTemplate(items);
// }



// function clearCardList() {
//     refs.countriesList.innerHTML = '';
    
// }


// function searchCountry(evt) {
//     evt.preventDefault();
//     const searhQuery = evt.currentTarget.elements.query.value
//     const searchValue = evt.target.value
//     console.log(searchValue)
//     API.fetchCountries(searchValue)
//         // .then(renderCountryCard)
    
// }


// console.log(counties)
// function renderCountryCard(country) {
//     const markup = countiesCardTemplate(country)
//     refs.card.innerHTML=markup
// }