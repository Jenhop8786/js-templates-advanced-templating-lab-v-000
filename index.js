function init() {
  //put any page initialization/handlebars initialization here
  let recipeFormTemplate = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML)
  document.getElementsByTagName("main")[0].innerHTML += recipeFormTemplate({ 'onsubmit': 'createRecipe();' })
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-template").innerHTML)
  Handlebars.registerHelper('displayIngredient', function() {
      if(this != "") {
        return new Handlebars.Safestring(`<li class="recipeIngredients">` + this + `</li>`)
      }
    })
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function createRecipe() {
  let name = document.getElementById("name").value
  let description = document.getElementById("description").value
  let ingredients = []
  let ingredientsValue = document.getElementsByName("ingedients")

  for(let i = 0; i < ingredientsValue.length; i++) {
    ingredients.push(ingredientsValues[i].value)
  }
}
