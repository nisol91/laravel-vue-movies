
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
        movies: [],
        // movies: [
        //     { title: 'Le Iene', year: '1990', content: 'abcd', img: 'https://images-na.ssl-images-amazon.com/images/I/51xiT0l57mL._SY445_.jpg' },
        //     { title: 'Pulp Fiction', year: '13990', content: 'abcd', img: 'https://images-na.ssl-images-amazon.com/images/I/51xiT0l57mL._SY445_.jpg' },
        //     { title: 'Itchi the Killer', year: '1950', content: 'vdg', img: 'https://images-na.ssl-images-amazon.com/images/I/51xiT0l57mL._SY445_.jpg' },
        //     { title: 'Dal tramonto all\'Alba', year: '1997', content: 'gvv', img: 'https://images-na.ssl-images-amazon.com/images/I/51xiT0l57mL._SY445_.jpg' },
        //     { title: 'Bad Taste', year: '1990', content: 'abcd', img: 'https://images-na.ssl-images-amazon.com/images/I/51xiT0l57mL._SY445_.jpg' },
        //     { title: 'L\'aldila\'', year: '13990', content: 'abcd', img: 'https://images-na.ssl-images-amazon.com/images/I/51xiT0l57mL._SY445_.jpg' },
        // ],
        movieSearch: '',
        selectedMovies: [],
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
            this.movies = [];
            const instance = axios.create();
            var films = this.movies

            //fixa un problema di tmdb
            // va a resettare i common headers che di default hanno un header che non piace a tmdb
            instance.defaults.headers.common = {
                'Accept': 'application/json, text/plain, */*'
            };

            instance.get('https://api.themoviedb.org/3/search/movie', {
                headers: {
                    'Content-Type': null
                },
                params: {
                    api_key: 'e1cd6fed3cf1a6213a3fd2941b25d0fc',
                    query: this.movieSearch,
                },
            })
                .catch(function (error) {
                    // handle error
                    console.log('here');
                    console.log(error);
                })
                .then(function (response) {
                    console.log('response');
                    console.log(response.data.results);
                    var collection = response.data.results;

                    collection.forEach(function (element) {
                        films.push(element);
                    })
                    //IMPORTANTE: cosa ho fatto qui? ho pushato dentro a films ogni elemento dell array risultato della chiamata a tmdb.
                    //ma la cosa piu importante e': films lo avevo definito FUORI dalla chiamata, se no non sa cosa e', non sa che e' this.movies, e quindi non
                    //riesce a modificarlo nei data: .Quindi, definendolo all inizio del metodo, lui sa che films e' il this.movies dei data, e quindi lo modifica
                    //pushandoci dentro tutti gli elementi della chiamata.
                })
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


