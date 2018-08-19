function init() {
  //put any page initialization/handlebars initialization here
  let recipeFormTemplate = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML)
  document.getElementByTagName("main")[0].innerHTML += recipeFormTemplate({'onsubmit': 'createRecipe();'}) Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-template").innerHTML)
   Handlebars.registerHelper('displayIngredient', function() {
     if(this != "") {
       return new Handlebars.Safestring('<li class="recipeIngredients">` + this + `</li>` )
     }
   })
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
