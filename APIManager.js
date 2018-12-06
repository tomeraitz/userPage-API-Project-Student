//This is the class that will manage all your APIs
//Each method should also invoke the renderer for its own section
class APIManager {
    constructor(render) {
        this.render = render;
        this.users = {}
        this.pokemon = {}
        this.quote = {}
        this.meat = {}
        this.allUsers = []
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

    save(){
        // let users = JSON.stringify(this.users)
        // localStorage.users = users;
        // let meat = JSON.stringify(this.meat)
        // localStorage.meat = meat;
        // let pokemon = JSON.stringify(this.pokemon)
        // localStorage.pokemon = pokemon;
        // let quote = JSON.stringify(this.quote)
        // localStorage.quote = quote;
        this.allUsers.push({
            name : this.users.results[0].name.first + " " + this.users.results[0].name.last,
            users : this.users,
            quote : this.quote,
            meat : this.meat,
            pokemon : this.pokemon
        })
        localStorage.allUsers = JSON.stringify(this.allUsers)
        this.render.renderShowAllUsers(this.allUsers.name);
    }
    load(){
        // this.render.renderFriends(JSON.parse(localStorage.users).results.slice(1, 8))
        // this.render.renderUsers(JSON.parse(localStorage.users).results[0])
        // this.render.renderQuote(JSON.parse(localStorage.quote))
        // this.render.renderMeat(JSON.parse(localStorage.meat))
        // this.render.renderPokemon(JSON.parse(localStorage.pokemon))
        console.log(JSON.parse(localStorage.allUsers))
    }

    generateNewPage() {
        this.getUsers()
        this.getPokemon()
        this.getQuote()
        this.getMeat()
    }
}