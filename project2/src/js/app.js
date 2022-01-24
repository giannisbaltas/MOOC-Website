
const searchEngine = query => {
  const url = `https://elearning-aueb.herokuapp.com/courses/search?title=${query}`;
  fetch(url)
  .then( response => response.json())
  .then( jsonData => { 
    console.log(jsonData);

    let template = Handlebars.compile(document.getElementById("template").innerHTML);
    let loaded = template(jsonData);
    document.getElementById("final_query_courses").innerHTML = loaded;
  })
  .catch(err => console.log('Request Failed', err));
}

const findCategories = () => {
    fetch('https://elearning-aueb.herokuapp.com/categories')
    .then( response => response.json())
    .then( jsonData => {  
      renderCategoriesResults(jsonData);
    })
    .catch(err => console.log('Request Failed', err));
}

const renderCategoriesResults = categories => {
  const list = document.getElementById("resultCategories");

  for(let i = 0; i < categories.length; i++){
    const element = document.createElement("a");
    element.href = `courses.html?category=${categories[i].id}`;
    element.innerText = categories[i].title;
    console.log(categories[i].title);
    list.appendChild(element);
  }
}

window.onload = () => {
  const searchFieldElement = document.getElementById("searchField");
  const searchBtn = document.querySelector(".search_btn");

  let searchTimeoutToken = 0;
  searchFieldElement.onkeyup = (event) => {
    clearTimeout(searchTimeoutToken);    
    setTimeout( () => {
      searchEngine(searchFieldElement.value); // every time user press a key on search field it returns the current results
    }, 250);
  };

  searchBtn.addEventListener('click', () => {
    searchEngine(searchFieldElement.value);
  });

  findCategories();
}


