//This is the class that will manage all your APIs
//Each method should also invoke the renderer for its own section
class APIManager {
    constructor(render) {
        this.render = render;
        this.users = {}
        this.pokemon = {}
        this.quote = {}
        this.meat = {}
        this.allUsers = JSON.parse(localStorage.allUsers || "[]")
    }
    getUsers() {
        $.ajax({
            method: "GET",
            url: `https://randomuser.me/api/?results=8`,
            success: data =>{
                this.render.renderFriends(data.results.slice(1, 8))
                this.render.renderUsers(data.results[0])
                this.users = data;
            },
            error: function (xhr, text, error) {
                console.log(text)
            }
        })
    }
    getQuote() {
        $.ajax({
            method: "GET",
            url: `https://talaikis.com/api/quotes/random//`,
            success: data =>{
                this.render.renderQuote(data)
                this.quote = data
            },
            error: function (xhr, text, error) {
                console.log(text)
            }
        })
    }
    getPokemon() {

        $.ajax({
            method: "GET",
            url: `https://pokeapi.co/api/v2/pokemon/${Math.floor((Math.random() * 300) + 1)}/`,
            success: data => {
                this.render.renderPokemon({
                    image : data.sprites.front_shiny,
                    name : data.name
                })
                this.pokemon = {
                    image : data.sprites.front_shiny,
                    name : data.name
                }
            },
            error: function (xhr, text, error) {
                console.log(text)
            }
        })
    }
    getMeat() {
        $.ajax({
            method: "GET",
            url: `https://baconipsum.com/api/?type=all-meat&paras=2&start-with-lorem=1`,
            success: data =>{
                this.render.renderMeat(data)
                this.meat = data
            },
            error: function (xhr, text, error) {
                console.log(text)
            }
        })
    }

    getAllSavedUsers(){
        this.render.renderShowAllUsers(this.allUsers);
    }

    save(){
        this.allUsers.push({
            name : this.users.results[0].name.first + " " + this.users.results[0].name.last,
            users : this.users,
            quote : this.quote,
            meat : this.meat,
            pokemon : this.pokemon
        })
        localStorage.allUsers = JSON.stringify(this.allUsers)
        this.load(this.allUsers.length -1)
        
    }
    load(index){
        this.render.renderFriends(this.allUsers[index].users.results.slice(1, 8))
        this.render.renderUsers(this.allUsers[index].users.results[0])
        this.render.renderQuote(this.allUsers[index].quote)
        this.render.renderMeat(this.allUsers[index].meat)
        this.render.renderPokemon(this.allUsers[index].pokemon)
        this.render.renderShowAllUsers(JSON.parse(localStorage.allUsers));
    }

    generateNewPage() {
        this.getUsers()
        this.getPokemon()
        this.getQuote()
        this.getMeat()
        this.getAllSavedUsers()
    }
}