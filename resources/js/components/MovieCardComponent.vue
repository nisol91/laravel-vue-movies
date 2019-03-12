<template>
    <!-- <div class="container"> -->
        <!-- <div class="row justify-content-center"> -->
            <div class="movie_cont">
                <div class="card">
                    <div class="card-header">
                        {{movie.title}}
                    </div>
                    <div class="card-body">
                        {{movie.year}}
                    </div>
                </div>
            </div>
        <!-- </div> -->
    <!-- </div> -->
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
        background: lightblue;
        margin: 10px;
        width: 200px;
    }
    .movie_cont {
        width: 250px;
        height: 100%;
    }
</style>
