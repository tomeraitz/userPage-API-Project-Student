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
    $("#userList").toggle();
})

$("body").on("click", ".chooseAuser", function(){
    let index = $(this).data().id
    api.load(index);
})




