<template>
        <div class="movie_cont">
            <div class="card">
                <div class="card-header">
                    {{movie.title}}
                </div>
                <div class="card-body">
                    <h3>Anno: {{movie.year}}</h3>
                    <h4>Riassunto: {{movie.content}}</h4>
                    <img v-bind:src="movie.img" alt="">
                </div>
            </div>
        </div>
</template>

<script>
    export default {
        props: ['movie'],
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>

<style lang="scss">
    .card {
        background: rgb(192, 204, 206);
        margin: 10px;
        width: 200px;
    }
    .movie_cont {
        width: 250px;
        height: 100%;
        h3 {
            border-bottom: .5px solid grey;
            margin-bottom: 5px;
        }
    }
</style>
