
require('./bootstrap');

window.Vue = require('vue');

Vue.component('movie-card', require('./components/MovieCardComponent.vue').default);


const app = new Vue({
    el: '#app',
    data: {
       movies: [
            { title: 'A', year: '1990', content: 'abcd', img: 'https://images-na.ssl-images-amazon.com/images/I/51xiT0l57mL._SY445_.jpg' },
            { title: 'Ab', year: '13990', content: 'abcd', img: 'https://images-na.ssl-images-amazon.com/images/I/51xiT0l57mL._SY445_.jpg' },
            { title: 'Adw', year: '1950', content: 'vdg', img: 'https://images-na.ssl-images-amazon.com/images/I/51xiT0l57mL._SY445_.jpg' },
            { title: 'Avcc', year: '1997', content: 'gvv', img: 'https://images-na.ssl-images-amazon.com/images/I/51xiT0l57mL._SY445_.jpg' },
            { title: 'A', year: '1990', content: 'abcd', img: 'https://images-na.ssl-images-amazon.com/images/I/51xiT0l57mL._SY445_.jpg' },
            { title: 'Ab', year: '13990', content: 'abcd', img: 'https://images-na.ssl-images-amazon.com/images/I/51xiT0l57mL._SY445_.jpg' },
            { title: 'Adw', year: '1950', content: 'vdg', img: 'https://images-na.ssl-images-amazon.com/images/I/51xiT0l57mL._SY445_.jpg' },
            { title: 'Avcc', year: '1997', content: 'gvv', img: 'https://images-na.ssl-images-amazon.com/images/I/51xiT0l57mL._SY445_.jpg' },
            { title: 'A', year: '1990', content: 'abcd lore', img: 'https://images-na.ssl-images-amazon.com/images/I/51xiT0l57mL._SY445_.jpg' },
            { title: 'Ab', year: '13990', content: 'abcd', img: 'https://images-na.ssl-images-amazon.com/images/I/51xiT0l57mL._SY445_.jpg' },
            { title: 'Adw', year: '1950', content: 'vdg', img: 'https://images-na.ssl-images-amazon.com/images/I/51xiT0l57mL._SY445_.jpg' },
            { title: 'Avcc', year: '1997', content: 'gvv', img: 'https://images-na.ssl-images-amazon.com/images/I/51xiT0l57mL._SY445_.jpg' },
            { title: 'A', year: '1990', content: 'abcd', img: 'https://images-na.ssl-images-amazon.com/images/I/51xiT0l57mL._SY445_.jpg' },
            { title: 'Ab', year: '13990', content: 'abcd', img: 'https://images-na.ssl-images-amazon.com/images/I/51xiT0l57mL._SY445_.jpg' },
            { title: 'Adw', year: '1950', content: 'vdg', img: 'https://images-na.ssl-images-amazon.com/images/I/51xiT0l57mL._SY445_.jpg' },
            { title: 'Avcc', year: '1997', content: 'gvv', img: 'https://images-na.ssl-images-amazon.com/images/I/51xiT0l57mL._SY445_.jpg' },
            { title: 'A', year: '1990', content: 'abcd', img: 'http' },
            { title: 'Ab', year: '13990', content: 'Do ut officia enim Lorem do culpa occaecat officia incididunt irure velit id laboris do.', img: 'http' },
            { title: 'Adw', year: '1950', content: 'vdg', img: 'http' },
            { title: 'Avcc', year: '1997', content: 'gvv', img: 'http' },
            { title: 'A', year: '1990', content: 'abcd', img: 'http' },
            { title: 'Ab', year: '13990', content: 'abcd', img: 'http' },
            { title: 'Adw', year: '1950', content: 'vdg', img: 'http' },
            { title: 'Avcc', year: '1997', content: 'gvv', img: 'http' },
       ]
    },
    mounted() {
            const axios = require('axios');

            // Make a request for a user with a given ID
            axios.get('/user?ID=12345')
                .then(function (response) {
                    // handle success
                    console.log(response);
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
                .then(function () {
                    // always executed
                });
    }
});


