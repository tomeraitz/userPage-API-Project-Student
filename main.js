// Create instances of your classes here
const render = new Renderer();
const api = new APIManager(render);

api.generateNewPage()

$("#gen-page").on("click", function(){
    api.generateNewPage()
})

$("#save").on("click", function(){
    api.save();
})

$("#load").on("click", function(){
    api.load();
})



// Render your page and create an on-click to generate a new user here

