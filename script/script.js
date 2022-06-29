//// Search Movie ///
var sInput;

///
function showCards(m)
{
    return`<div class="col-md-4 my-3">
    <div class="movie-card" href>
        <div align="center">
            <img src="`+m.Poster+` class="moviePoster" id="`+m.imdbID+`" onclick="movieFindDetail('`+m.imdbID+`')">
            <h5 class="card-title">`+m.Title+`</h5>
            <h6 class="mb-1 pb-3">`+m.Year+`</h6>
        </div>
    </div>
    </div>`;
}
function showDetail(mDetail)
{
    return`<div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        ...
      </div>
    </div>
  </div>`;
}

//////////////////////////////////////////////////////////////////////////////////////////////////
function sMovie(judul)
{
    fetch('https://www.omdbapi.com/?i=tt3896198&apikey=c623d88&s=' +judul)
    .then(response => (response.json()))
    .then(response => 
        {
            const movieList = response.Search;
            console.log(movieList);
            let card = "";
            movieList.forEach(m => card += showCards(m));
            document.getElementById("cardGenerator").innerHTML = card;
        }
)}
///////////////////////////////////////////////////////////////////////////////////////////////


function getSearchValue()
{
    sInput = document.getElementById("searchBox").value
    document.getElementById("searchTittle").innerHTML = 'Search : "'+ sInput  + '"';
    sMovie(sInput);
    sInput = ""
}

///////////////////////////////////////////////////////////////////////////////////////////////
function movieFindDetail(id)
{
    fetch('https://www.omdbapi.com/?i='+id+'&apikey=c623d88')
    .then(response => (response.json()))
    .then(response => 
    {
        const movieDetail = response;
        console.log(movieDetail);
    })
}
///////////////////////////////////////////////////////////////////////////////////////////////
///    const movieList = response.Search;
///let card = "";
///movieList.forEach(m => card += showCards(m));
///console.log(card);
