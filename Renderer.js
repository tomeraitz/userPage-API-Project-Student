// Fill in the functions for your Renderer Class

class Renderer {
    constructor(){
    }
    renderUsers(users) {
        $(".user-container").empty();
        const source = $('#user-template').html();
        let template = Handlebars.compile(source);
        Handlebars.registerHelper('toUpperCase', function(users) {
            return users.fn(this).replace(/\b\w/g, l => l.toUpperCase())
        });
        let newHTML = template(users);
        $(".user-container").append(newHTML);

    }
    renderFriends(users) {
        $(".friends-container").empty();
        const source = $('#user-friends-template').html();
        let template = Handlebars.compile(source);
        Handlebars.registerHelper('toUpperCase', function(users) {
            return users.fn(this).replace(/\b\w/g, l => l.toUpperCase())
        });
        let newHTML = template({users});
        $(".friends-container").append(newHTML);

    }
    renderQuote(quoteInfo) {
        $(".quote-container").empty();
        const source = $('#quote-template').html();
        let template = Handlebars.compile(source);
        let newHTML = template(quoteInfo);
        $(".quote-container").append(newHTML);


    }
    renderPokemon(pokemonInfo) {
        $(".pokemon-container").empty();
        const source = $('#pokemon-template').html();
        let template = Handlebars.compile(source);
        let newHTML = template(pokemonInfo);
        $(".pokemon-container").append(newHTML);

    }
    renderMeat(meatText) {
        $(".meat-container").empty();
        const source = $('#meat-template').html();
        let template = Handlebars.compile(source);
        let newHTML = template({meatText});
        $(".meat-container").append(newHTML);
    }
}


