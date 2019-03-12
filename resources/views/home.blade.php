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
    <div id="app" class="container-fluid main">
            <movie-card v-bind:movie="movie" v-for="movie in movies"></movie-card >
    </div>
    <script src="{{ asset('js/app.js') }}"></script>
</body>
</html>
