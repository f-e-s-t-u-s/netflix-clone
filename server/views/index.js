var boxCopies = 20;


// document.addEventListener('DOMContentLoaded', function(){
//     var container = document.querySelector('.data')

// for( let i = 0; i<boxCopies; i++){
//     const dataDiv = document.createElement('div');
//     dataDiv.className = 'data'


//     const boxDiv = document.createElement('div')
//     boxDiv.className = 'box'
//     dataDiv.appendChild(boxDiv)

//     const descriptionDiv = document.createElement('div')
//     descriptionDiv.className = 'description'

//     const moviename = document.createElement('h3')
//     moviename.textContent = 'hajshs'

//     const date = document.createElement('h3')
//     date.textContent = 'jdss'

//     descriptionDiv.appendChild(moviename)
//     descriptionDiv.appendChild(date)
//     dataDiv.appendChild(descriptionDiv)
//     container.appendChild(dataDiv)

//     // const genres = document.querySelectorAll('.genres .data');
//     //     genres.forEach(function(genre) {
//     //         genre.appendChild(dataDiv.cloneNode(true));
//     //     });
// }
// })


function showContent(contentTYpe){
    const divContent = document.querySelectorAll('.content')
    for(let i =0; i<divContent.length; i++){
        divContent[i].style.display = 'none';
    }
    const selected = document.getElementById(contentTYpe)
    selected.style.display = 'block'
}

window.addEventListener('DOMContentLoaded', function(){
    const first = document.querySelector('.content')
   first.style.display = 'block'
   const firstButton = first.getAttribute('id')
   showContent(firstButton)
})
