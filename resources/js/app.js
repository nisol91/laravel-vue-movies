
require('./bootstrap');

window.Vue = require('vue');

Vue.component('movie-card', require('./components/MovieCardComponent.vue').default);


const app = new Vue({
    el: '#app',
    data: {
        text: 'Tutti i film',
        classes: [],
        errors: [],
        newTitle: null,
        newYear: null,
        newContent: null,
        newImg: null,
        movies: [
            { title: 'Le Iene', year: '1990', content: 'abcd', img: 'https://images-na.ssl-images-amazon.com/images/I/51xiT0l57mL._SY445_.jpg' },
            { title: 'Pulp Fiction', year: '13990', content: 'abcd', img: 'https://images-na.ssl-images-amazon.com/images/I/51xiT0l57mL._SY445_.jpg' },
            { title: 'Itchi the Killer', year: '1950', content: 'vdg', img: 'https://images-na.ssl-images-amazon.com/images/I/51xiT0l57mL._SY445_.jpg' },
            { title: 'Dal tramonto all\'Alba', year: '1997', content: 'gvv', img: 'https://images-na.ssl-images-amazon.com/images/I/51xiT0l57mL._SY445_.jpg' },
            { title: 'Bad Taste', year: '1990', content: 'abcd', img: 'https://images-na.ssl-images-amazon.com/images/I/51xiT0l57mL._SY445_.jpg' },
            { title: 'L\'aldila\'', year: '13990', content: 'abcd', img: 'https://images-na.ssl-images-amazon.com/images/I/51xiT0l57mL._SY445_.jpg' },
        ],
        movieSearch: '',
        selectedMovies: []
    },
    mounted() {

    },
    methods: {
        showMovies() {
            this.selectedMovies = [];
            this.classes = [];
            this.text = 'Tutti i film';
        },
        addMovie() {
            var newMovie = {
                title: this.newTitle,
                year: this.newYear,
                content: this.newContent,
                image: this.newImg,
            }
            this.movies.push(newMovie);


            this.selectedMovies = [];
            this.classes = [];
            alert('movie added')

        },
        searchMovie() {
            const axios = require('axios');


            // Make a request for a user with a given ID
            axios.get('https://api.themoviedb.org/3/movie/550', {
                params: {
                    api_key: 'e1cd6fed3cf1a6213a3fd2941b25d0fc',
                },
                proxy: {
                    host: '127.0.0.1',
                    port: 8000,
                },
                transformRequest: [(data, headers) => {
                    delete headers.common.Authorization
                    return data
                }]
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
            this.classes = ['nascosto'];
            this.selectedMovies = [];
            var query = this.movieSearch;
            var film = this.movies;
            var selectedMovies = this.selectedMovies


            film.forEach(function(element) {
                if (element.title.includes(query)) {
                    console.log(element.title);

                    selectedMovies.push(element);
                }
            })
            console.log(selectedMovies);

            this.text = 'Hai cercato: \"' + query + '\"';

            this.movieSearch = '';
        },
        checkForm: function (e) {
            if (this.newTitle && this.newYear && this.newContent && this.newImg) {
                this.addMovie()
            }

            this.errors = [];

            if (!this.newTitle) {
                this.errors.push('Title required.');
            }
            if (!this.newYear) {
                this.errors.push('Year required.');
            }
            if (!this.newContent) {
                this.errors.push('Content required.');
            }
            if (!this.newImg) {
                this.errors.push('Image required.');
            }

            e.preventDefault();
        },
    }
});


