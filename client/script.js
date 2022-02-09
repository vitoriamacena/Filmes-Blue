const baseUrl = "http://localhost:3000";
const listfilmes = document.getElementById('movies');
let output = '';
let editar = false;
let idEdicao = 0

function getFilmes() {
    fetch(`${baseUrl}/filmes`)
    .then((res) => res.json())
    .then((data) => {
        data.forEach(filme => {
            output += `
            <div class="movie">
                <div id="icons">
                    <h3 onclick="deleteFilmes(${filme._id})">✖</h3>
                </div>
                <img id="cover" src=${filme.imagem} alt="${filme.titulo}">
                
                <div class="movie-info"> 
                    <h3 id="titulo">${filme.titulo}</h3>
                    <h3 id="nota">${filme.nota}</h3>
                </div>
                <div class="movie-info">
                    <h4 id="genero">${filme.genero}</h4>
                    <h5 onclick="editaFilme('${filme._id}')">Editar</h5>
                </div>
            </div>
            `;
        });
        listfilmes.innerHTML = output
        console.log(listfilmes)
    });
};

getFilmes();


// function checkBox() {
//     var checkbox = document.getElementById("assistido");
//     if(checkbox.checked) {
//         checkbox.value = true;
//     } else {
//         checkbox.value = false;
//     };
        
// };


async function submitForm(e) {
    e.preventDefault();

    let titulo = document.getElementById('titulo').value;
    let genero = document.getElementById('genero').value;
    let nota = document.getElementById('nota').value;
    let cover = document.getElementById('cover').value; 

    const filme = {
        titulo: titulo.value,
        genero: genero.value,
        nota: nota.value,
        cover: cover.value
    }

    if(!editar) {
        
        const req = new Request(`${baseUrl}`, {
            method: 'POST',
            body: JSON.stringify(filme),
            headers: new Headers( {
                'Content-Type': 'application/json'
            })
        })

        const res = await fetch(req);
        const result = await res.json();

        if(result) {
            getFilmes();
        }
    } else {
        const req = new Request(`${baseUrl}/${idEdicao}`, {
            method: 'PUT',
            body: JSON.stringify(filme),
            headers: new Headers( {
                'Content-Type': 'application/json'
            })
        })

        const res = await fetch(req);
        const result = await res.json();

        if(result) {
            editar = false;
            getFilmes();
        }
    }
}

async function getById(id) {
    const res = await fetch(`${baseUrl}/filmes/${id}`)
    const filme = res.json();
    console.log(filme);
}


async function editaFilme(id) {
    editar = true;
    idEdicao = id;

    const filme = await getById(id);

    let title = document.getElementById('titulo');
    let genre = document.getElementById('genero');
    let note = document.getElementById('nota');
    let image = document.getElementById('cover');

    title.value = filme.titulo;
    genre.value = filme.genero;
    note.value = filme.nota;
    image.value = filme.cover;

}

async function deleteFilmes(id) {
    const req = new Request(`${baseUrl}/${id}`, {
        method: 'DELETE',
    })
    const res = await fetch(req);
    const data = await res.json();
    listfilmes.innerHTML = '';
    getFilmes();
}