
function createRecipe() {
  let template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  let result = template(recipe);
  document.getElementsByTagName("main")[0].innerHTML += result;
}

function displayEditForm() {

}

function updateRecipe() {

}

function init() {
  //put any page initialization/handlebars initialization here
  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    return new Handlebars.SafeString('<li name="ingredientsList">' + ingredient + '</li>')
  })
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML)

  var formTemplate = document.getElementById("recipe-form-template").innerHTML
  var template = Handlebars.compile(formTemplate)
  document.getElementsByTagName("main")[0].innerHTML = template({'submitAction': 'createRecipe()'})
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
