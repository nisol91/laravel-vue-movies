<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>Boolflix: Laravel + Vue.js</title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link rel="shortcut icon" href="{{ asset('icon.png') }}">
    <link rel="stylesheet" type="text/css" media="screen" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.4/css/bulma.css">
</head>
<body>
    <div id="app" class="container-fluid external_cont">
        <div class="input_cont">
            <input class="input" type="text" placeholder="Inserisci titolo" v-model="newTitle">
            <input class="input" type="text" placeholder="Inserisci anni" v-model="newYear">
            <input class="input" type="text" placeholder="Inserisci riassunto" v-model="newContent">
            <input class="input" type="text" placeholder="Inserisci url immagine" v-model="newImg">
            <button class="button" type="submit" @click="addMovie">Add Movie</button>
        </div>
        <div class="search_movie">
            <input class="input" type="text" placeholder="Inserisci nome film" v-model="movieSearch" @keyup.13="searchMovie_static">
            <button class="button" type="submit" @click="searchMovie_static">Search Movie</button>
        </div>

            {{-- <div class="container main">
                <movie-card v-bind:movie="movie" v-for="movie in movies"></movie-card >
            </div> --}}

            <div class="container main">
                <movie-card v-bind:movie="movie" v-for="movie in selectedMovies"></movie-card >
            </div>
    </div>
    <script type="text/javascript" src="{{ asset('js/tmdb.js') }}"></script>
    <script src="{{ asset('js/app.js') }}"></script>
</body>
</html>
