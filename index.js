function init() {
  //put any page initialization/handlebars initialization here
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function createRecipe() {
  let template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  let result = template(recipe);
  document.getElementsByTagName("main")[0].innerHTML += result;
}

Handlebars.displayIngredient('ingredient', function() {

})

function displayEditForm() {

}

function updateRecipe() {

}
