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
    // console.log(categories[i].title);
    list.appendChild(element);
  }
}

const findCourses = query => {
    const url = `https://elearning-aueb.herokuapp.com/courses/search?category=${query}`;
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

const getParameterByName = (name, url = window.location.href) => {
    name = name.replace(/[\[\]]/g, '\\$&');
    let regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

window.onload = () => {
    findCategories();

    let categoryId = getParameterByName('category');   
    findCourses(categoryId);
}