const searchFood =() =>{
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText);
    searchField.value='';
    const url=`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data.drinks));
}
const displaySearchResult = drinks => {
    const searchResult = document.getElementById('search-result');
    console.log(drinks)
    drinks.forEach(drink => {
        console.log(drink);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML= `
        <div onclick="loadCocktailDetail(${drink.idDrink})" class = "card">
            <img src="${ drink.strDrinkThumb} " class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${drink.strDrink}</h5>
              <p class="card-text">${drink.strInstructions}</p>
            </div>
          </div>
        `
        searchResult.appendChild(div);

    })
}
const loadCocktailDetail =drinkId =>{
  // console.log(drinkId);
  const url =`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`;
  fetch(url)
  .then(res => res.json())
  .then(data => displayCocktailDetail(data.drinks[0]));
}

const displayCocktailDetail = drink => {
  console.log(drink)
  const cocktailDetails = document.getElementById(' cocktail-details');
  const div = document.createElement('div');
  div.classList.add('card') ;
  div.innerHTML =`
  
  <img src="${ drink.strDrinkThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${drink.strDrink}</h5>
          <p class="card-text">${drink.strInstructions}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
  ` 
  cocktailDetails.appendChild(div);
}

