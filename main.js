
async function getData(){
    let movie = document.querySelector("#search").value
    // let movie = 'avengers'

    // console.log(movie)
    const url = `https://www.omdbapi.com/?t=${movie}&apikey=a3757b0`
    
    let res = await fetch(url)
    let data = await res.json()
    console.log(data)

    if(data.Response == 'False'){
        console.log('hello there')
        document.querySelector('#container').innerHTML = null
        let err = document.createElement("img")
        err.src = `https://c.tenor.com/U5QXJDAXq_AAAAAi/erro.gif`
        // err.append(document.querySelector("#container"))
        document.querySelector('#container').append(err)
    }
    else{

        append(data)
    }
}

// getData()

function append(data){

    let container = document.querySelector("#container")

    container.innerHTML = null
    
    let poster = document.createElement("img")
    poster.src = data.Poster
    poster.setAttribute("class", 'poster')

    let text = document.createElement("div")
    text.setAttribute('class', 'box')

    let released = document.createElement("p")
    released.innerText = `Released: ${data.Released}`
    released.setAttribute("class", 'date')

    let genre = document.createElement("p")
    genre.innerText = data.Genre
    genre.setAttribute("class", 'genre')

    let name = document.createElement("p")
    name.innerText = data.Title
    name.setAttribute("class", 'name')

    let plot = document.createElement("p")
    plot.innerText = data.Plot
    plot.setAttribute("class", 'plot')

    let rating = document.createElement("p")
    rating.innerText = `IMDB Rating: ${data.imdbRating}`
    rating.setAttribute("class", 'rating')

    if(data.imdbRating > 8.5){
        rating.innerHTML = `<p class="rating">IMDB Rating: ${data.imdbRating} Recommended</p>`
    }

    text.append(released, genre, name, plot, rating)
    container.append(poster,text)
}