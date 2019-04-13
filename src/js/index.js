import '../scss/style.scss';
import { searchResult } from './searchResults.js';
const axios = require('axios');
const baseUrl = "https://swapi.co/api/";
const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const searchOption = document.getElementById("search-option");


let searchOptionValue = 'films';

searchOption.addEventListener('change', function(e) {
    searchOptionValue = this.value;
    console.log(`select: ${searchOptionValue}`);
});

searchForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const searchValue = searchInput.value;
    let apiUrl = `${baseUrl}${searchOptionValue}/?search=${searchValue}`;
    axios.get(apiUrl)
        .then(response => response.data)
        .then(data => {
            data.results;
            console.log(data.results);
            if(searchValue === '') return;
            searchResult(searchOptionValue, data.results);
        })
        .catch(err => console.log(`wystąpił błąd: ${err}`))
    

})
