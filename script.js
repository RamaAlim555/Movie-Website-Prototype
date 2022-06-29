//// Search Movie ///
var sInput;

function sMovie(judul)
{
    fetch('http://www.omdbapi.com/?i=tt3896198&apikey=c623d88' +judul)
    .then(Response => console.log(Response))
}

function getSearchValue()
{
    sInput = document.getElementById("searchBox").value
    document.getElementById("searchTittle").innerHTML = 'Search : "'+ sInput  + '"';
    sInput = ""
    sMovie(sInput);
}
