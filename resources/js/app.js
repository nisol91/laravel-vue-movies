
require('./bootstrap');

window.Vue = require('vue');

Vue.component('movie-card', require('./components/MovieCardComponent.vue').default);


const app = new Vue({
    el: '#app',
    data: {
       movies: [
            { title: 'A', year: '1990', Content: 'abcd', img: 'http' },
            { title: 'Ab', year: '13990', Content: 'abcd', img: 'http' },
            { title: 'Adw', year: '1950', Content: 'vdg', img: 'http' },
            { title: 'Avcc', year: '1997', Content: 'gvv', img: 'http' },
            { title: 'A', year: '1990', Content: 'abcd', img: 'http' },
            { title: 'Ab', year: '13990', Content: 'abcd', img: 'http' },
            { title: 'Adw', year: '1950', Content: 'vdg', img: 'http' },
            { title: 'Avcc', year: '1997', Content: 'gvv', img: 'http' },
            { title: 'A', year: '1990', Content: 'abcd', img: 'http' },
            { title: 'Ab', year: '13990', Content: 'abcd', img: 'http' },
            { title: 'Adw', year: '1950', Content: 'vdg', img: 'http' },
            { title: 'Avcc', year: '1997', Content: 'gvv', img: 'http' },
            { title: 'A', year: '1990', Content: 'abcd', img: 'http' },
            { title: 'Ab', year: '13990', Content: 'abcd', img: 'http' },
            { title: 'Adw', year: '1950', Content: 'vdg', img: 'http' },
            { title: 'Avcc', year: '1997', Content: 'gvv', img: 'http' },
            { title: 'A', year: '1990', Content: 'abcd', img: 'http' },
            { title: 'Ab', year: '13990', Content: 'abcd', img: 'http' },
            { title: 'Adw', year: '1950', Content: 'vdg', img: 'http' },
            { title: 'Avcc', year: '1997', Content: 'gvv', img: 'http' },
            { title: 'A', year: '1990', Content: 'abcd', img: 'http' },
            { title: 'Ab', year: '13990', Content: 'abcd', img: 'http' },
            { title: 'Adw', year: '1950', Content: 'vdg', img: 'http' },
            { title: 'Avcc', year: '1997', Content: 'gvv', img: 'http' },
       ]
    }
});


