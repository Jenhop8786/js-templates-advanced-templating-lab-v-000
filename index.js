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
