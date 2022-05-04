let titles=document.getElementById('titles')

fetch('./assets/data/movies.json')
.then((response)=>{
    return response.json();
})
.then((datas)=>{
    console.log(datas)
    console.log(datas.results)

    datas.results.forEach(movieObj => {
        titles.innerHTML +=`<div class="card">
                                    <img class="card-img"src="${movieObj.poster_path}">
                                    <div class="card-title"><h2>${movieObj.original_title}</h2></div>
                                    <div class="card-text">${movieObj.overview}</div>
                                    <div class="badge">Note :${movieObj.vote_average}/10</div>
                                </div>`;                                                                         
    })
})