//https://dev.to/vuevixens/hands-on-vuejs-for-beginners-part-4-324l
Vue.config.devtools = true;

const app = new Vue({
    el: '#app',
    data: {
        games: [
            {
                name: 'Super Mario 64',
                console: 'Nintendo 64',
                rating: 4
            },
            {
                name: 'The Legend of Zelda Ocarina of Time',
                console: 'Nintendo 64',
                rating: 5
            },
            {
                name: 'Secret of Mana',
                console: 'Super Nintendo',
                rating: 4
            },
            {
                name: 'Fallout 76',
                console: 'Multiple',
                rating: 1
            },
            {
                name: 'Super Metroid',
                console: 'Super Nintendo',
                rating: 6
            }
        ]
    },
    methods: {
        addToRating(game) {
            game.rating++;
        }
    }
});
