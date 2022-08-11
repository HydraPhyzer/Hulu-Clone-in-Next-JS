let MoviesObj=
[
    {
        Title:"Popular : ",
        Request:`https://api.themoviedb.org/3/movie/popular?api_key=512f02bfeaad808b483c6f3bb546db74&language=en-US`
    },
    {
        Title:"Top Rated : ",
        Request:`https://api.themoviedb.org/3/movie/top_rated?api_key=512f02bfeaad808b483c6f3bb546db74&language=en-US`
    },
    {
        Title:"Tv Trending : ",
        Request:`https://api.themoviedb.org/3/trending/tv/day?api_key=512f02bfeaad808b483c6f3bb546db74&language=en-US`
    },
    {
        Title:"Movies Trending : ",
        Request:`https://api.themoviedb.org/3/trending/movie/day?api_key=512f02bfeaad808b483c6f3bb546db74&language=en-US`
    },
    {
        Title:"Horror Movies : ",
        Request:`https://api.themoviedb.org/3/discover/movie?api_key=512f02bfeaad808b483c6f3bb546db74&with_genres=28`
    },
    {
        Title:"Romantic Movies : ",
        Request:`https://api.themoviedb.org/3/discover/movie?api_key=512f02bfeaad808b483c6f3bb546db74&with_genres=10749`
    },
    {
        Title:"Family Movies : ",
        Request:`https://api.themoviedb.org/3/discover/movie?api_key=512f02bfeaad808b483c6f3bb546db74&with_genres=10751`
    }
]

export default MoviesObj