//// Search Movie ///
var sInput;

function sMovie(judul)
{
    fetch('https://www.omdbapi.com/?i=tt3896198&apikey=c623d88&s=' +judul)
    .then(response => Response.json())
    .then(response => console.log(Response.json()))
    
}

function getSearchValue()
{
    sInput = document.getElementById("searchBox").value
    document.getElementById("searchTittle").innerHTML = 'Search : "'+ sInput  + '"';
    sMovie(sInput);
    sInput = ""
}
