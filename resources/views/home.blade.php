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
        <div class="input_cont has-text-centered">
            <form action="" @submit="checkForm">
                <p v-if="errors.length">
                    <b>Please correct the following error(s):</b>
                    <ul>
                    <li v-for="error in errors">@{{ error }}</li>
                    </ul>
                </p>
                <label for="title"></label>
                <input class="input" name="title" type="text" placeholder="Inserisci titolo" v-model="newTitle">
                <label for="year"></label>
                <input class="input" name="year" type="text" placeholder="Inserisci anni" v-model="newYear">
                <label for="content"></label>
                <input class="input" name="content" type="text" placeholder="Inserisci riassunto" v-model="newContent">
                <label for="img"></label>
                <input class="input" name="img" type="text" placeholder="Inserisci url immagine" v-model="newImg">
                <button class="button" type="submit" >Add Movie</button>
            </form>
        </div>
        <div class="search_movie has-text-centered">
            <input class="input" type="text" placeholder="Inserisci nome film" v-model="movieSearch" @keyup.13="searchMovie_static">
            <button class="button" type="submit" @click="searchMovie_static">Search Movie</button>

            <button class="button" type="submit" @click="searchMovie">Chiamata a tmdb</button>
            <button class="button" type="submit" @click="showMovies">Mostra tutti i film</button>

        </div>

            <h2 id="title">@{{text}}</h2>
            <div class="container main">
                <movie-card v-bind:movie="movie" v-bind:class="classes" v-for="movie in movies"></movie-card >
            </div>

            <div class="container main">
                <movie-card v-bind:movie="movie" v-for="movie in selectedMovies"></movie-card >
            </div>
    </div>
    <script src="{{ asset('js/app.js') }}"></script>
</body>
</html>
