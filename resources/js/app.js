
require('./bootstrap');

window.Vue = require('vue');

Vue.component('movie-card', require('./components/MovieCardComponent.vue').default);


const app = new Vue({
    el: '#app',
    data: {
        movieSearch: '',
        newTitle: '',
        newYear: '',
        newContent: '',
        newImg: '',
        movies: [
            { title: 'Le Iene', year: '1990', content: 'abcd', img: 'https://images-na.ssl-images-amazon.com/images/I/51xiT0l57mL._SY445_.jpg' },
            { title: 'Pulp Fiction', year: '13990', content: 'abcd', img: 'https://images-na.ssl-images-amazon.com/images/I/51xiT0l57mL._SY445_.jpg' },
            { title: 'Itchi the Killer', year: '1950', content: 'vdg', img: 'https://images-na.ssl-images-amazon.com/images/I/51xiT0l57mL._SY445_.jpg' },
            { title: 'Dal tramonto all\'Alba', year: '1997', content: 'gvv', img: 'https://images-na.ssl-images-amazon.com/images/I/51xiT0l57mL._SY445_.jpg' },
            { title: 'Bad Taste', year: '1990', content: 'abcd', img: 'https://images-na.ssl-images-amazon.com/images/I/51xiT0l57mL._SY445_.jpg' },
            { title: 'L\'aldila\'', year: '13990', content: 'abcd', img: 'https://images-na.ssl-images-amazon.com/images/I/51xiT0l57mL._SY445_.jpg' },
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
       ],
       selectedMovies: []
    },
    mounted() {

    },
    methods: {
        addMovie() {
            // alert('ok')
            var newMovie = {
                title: this.newTitle,
                year: this.newYear,
                content: this.newContent,
                image: this.newImg,
            }
            this.movies.push(newMovie);
        },
        searchMovie() {
            const axios = require('axios');

            // Make a request for a user with a given ID
            axios.get('https://api.themoviedb.org/3/movie/550', {
                params: {
                    api_key: 'e1cd6fed3cf1a6213a3fd2941b25d0fc',
                }
            })
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                })
                .then(function () {
                    // always executed
                });
        },
        searchMovie_static() {
            var query = this.movieSearch;

            let selected = movies.filter(number => number.includes(query));
            console.log(selected);


            // for (let i = 0; i < array.length; i++) {
            //     const element = array[i];

            //     if (.includes(query)) {

            //     }
            // }
        },
    }
});


