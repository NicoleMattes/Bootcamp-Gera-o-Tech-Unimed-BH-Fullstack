// Um desenvolvedor tentou criar um projeto que consome a base de dados de filme do TMDB para criar um organizador de filmes, mas desistiu 
// pois considerou o seu código inviável. Você consegue usar typescript para organizar esse código e a partir daí aprimorar o que foi feito?

// A ideia dessa atividade é criar um aplicativo que: 
//    - Busca filmes
//    - Apresenta uma lista com os resultados pesquisados
//    - Permite a criação de listas de filmes e a posterior adição de filmes nela

// Todas as requisições necessárias para as atividades acima já estão prontas, mas a implementação delas ficou pela metade (não vou dar tudo de graça).
// Atenção para o listener do botão login-button que devolve o sessionID do usuário
// É necessário fazer um cadastro no https://www.themoviedb.org/ e seguir a documentação do site para entender como gera uma API key https://developers.themoviedb.org/3/getting-started/introduction

const apiKey = '3f301be7381a03ad8d352314dcc3ec1d';
const userSpace = document.getElementById('user-space');
const loginButton = document.getElementById('login-button');
const searchContainer = document.getElementById('search-container');
const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search');

let requestToken: string;
let username: any;
let password: any;
let sessionId: string;
let listId: number;
let logged = false;
let nome: string;
let listName: string;
let movieListArray: any[] = [];
let movieListUl: any;


//onInit
//verificação para desabilitar o botão de busca ao entrar na pagina
if(logged == false) {
    searchInput!.value = '';
    searchButton!.disabled = true;
    searchInput!.disabled = true;
}

//chamada do login
loginButton!.addEventListener('click', () => {
    login();
})

//função de login
async function login() {
    username = document.getElementById('login').value;
    nome = username;
    password = document.getElementById('senha').value;
    try {
        await criarRequestToken();
        await logar();
        await criarSessao();
        if(logged == true) {
            searchButton!.disabled = false;
            searchInput!.disabled = false;
            isLogedIn();
        }
    } catch (err) {
        console.log(err);
    }
}

//função de pesquisa de filmes na api e criação da lista de filmes encontrados
searchButton!.addEventListener('click', async () => {
  let lista = document.getElementById("lista");
  if (lista) {
    lista.outerHTML = "";
  }
  let query = document.getElementById('search')!.value;
  let listaDeFilmes = await procurarFilme(query);
  let ul = document.createElement('ul');
  ul.id = "lista"
  for (const item of listaDeFilmes.results) {
    let li = document.createElement('li');
    let addBtn = document.createElement('button');
    addBtn.textContent = 'Adicionar a lista';
    addBtn.setAttribute('id', 'add-btn');
    addBtn.addEventListener('click', () => {
        addMovieToList(item.original_title, item.id);
    });
    li.appendChild(document.createTextNode(item.original_title))
    li.appendChild(addBtn);
    ul.appendChild(li)
  }
  searchContainer!.appendChild(ul);
})

//Sequência lógica após usuário realizar o login
function isLogedIn() {
    removeLoginForm();
    loggedInTitleShow();
    createListForm();
}
//remove o formulário de login
function removeLoginForm() {
    let loginForm = document.getElementById('login-form');
    userSpace?.removeChild(loginForm!);
}
//adiciona o titulo de "Usuário entrou"
function loggedInTitleShow() {
    let isLoggedIn = document.getElementById('is-logged');
    let loggedTitle = document.createElement('h2');
    loggedTitle.innerHTML = nome + ' ENTROU!';
    isLoggedIn!.appendChild(loggedTitle);
}
//cria o formulário para criar a lista de filmes
function createListForm() {
    let listFormDiv = document.getElementById('list-form');
    let listNameInput = document.createElement('input');
    let createListButton = document.createElement('button');
    listNameInput.type = 'text';
    createListButton.textContent = 'Create List';
    createListButton.addEventListener('click', () => {
        listName = listNameInput.value;
        createNewList();
    })
    listFormDiv!.appendChild(listNameInput);
    listFormDiv!.appendChild(createListButton);
}

//cria o titulo da lista no front-matter
function createNewList() {
    let movieList = document.getElementById('movie-list');
    let listTitle = document.createElement('h3');
    listTitle.textContent = listName;
    movieList!.appendChild(listTitle);
    let listUl = document.createElement('ul');
    listUl.setAttribute('id', 'movie-list-ul');
    movieList!.appendChild(listUl);
    movieListUl = listUl;
    let saveListButton = document.createElement('button');
    saveListButton.textContent = 'Salvar lista de filmes';
    saveListButton.addEventListener('click', () => {
      saveList();
    });
    movieList!.appendChild(saveListButton);
}

//adiciona filme a lista
function addMovieToList(name, id) {
  let movieObj = {movieName: name, id: id}
  if (movieListUl == undefined) {
    alert('ERROR! Você não possui uma lista criada!')
  } else {
    movieListArray.push(movieObj);
    updateList();
  }
}

//atualiza a lista na tela
function updateList() {
  let movies = document.querySelectorAll('#movie');
  if (movies.length == 0) {
    createLi();
  } else {
    createLi();
  }
}

//cria o item li da lista de filmes
function createLi() {
  let movieLi = document.createElement('li');
  movieLi.setAttribute('id', 'movie');
  if (movieListArray.length == 0) {
    alert('Erro ao adicionar filmes na lista!');
  } else {
    for (let i = 0; i < movieListArray.length; i++) {
      movieLi.textContent = movieListArray[i].movieName;
      movieListUl.appendChild(movieLi);
    }
  }
}

//salva a lista na API
async function saveList() {
  if (movieListArray.length == 0) {
    alert('Erro! Você não possui filmes adicionados na lista!');
  } else {
    let desc = 'Lista criada por' + username;
    await criarLista(listName, desc);
    for (let i = 0; i < movieListArray.length; i++) {
      await adicionarFilmeNaLista(movieListArray[i].id, listId)
    }
  }
}


//API requests
class HttpClient {
  static async get({url, method, body = null}) {
    return new Promise((resolve, reject) => {
      let request = new XMLHttpRequest();
      request.open(method, url, true);

      request.onload = () => {
        if (request.status >= 200 && request.status < 300) {
          resolve(JSON.parse(request.responseText));
        } else {
          reject({
            status: request.status,
            statusText: request.statusText
          })
        }
      }
      request.onerror = () => {
        reject({
          status: request.status,
          statusText: request.statusText
        })
      }

      if (body) {
        request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        body = JSON.stringify(body);
      }
      request.send(body);
    })
  }
}

async function procurarFilme(query) {
    console.log('search movie');
  query = encodeURI(query)
  console.log(query)
  let result = await HttpClient.get({
    url: `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`,
    method: "GET"
  })
  return result
}

async function adicionarFilme(filmeId) {
    console.log('Added movie')
  let result = await HttpClient.get({
    url: `https://api.themoviedb.org/3/movie/${filmeId}?api_key=${apiKey}&language=en-US`,
    method: "GET"
  })
}

async function criarRequestToken() {
    console.log('create token')
  let result = await HttpClient.get({
    url: `https://api.themoviedb.org/3/authentication/token/new?api_key=${apiKey}`,
    method: "GET"
  })
  requestToken = result.request_token
}

async function logar() {
    console.log('logging');
  await HttpClient.get({
    url: `https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=${apiKey}`,
    method: "POST",
    body: {
      username: `${username}`,
      password: `${password}`,
      request_token: `${requestToken}`
    }
  })
  logged = true;
}

async function criarSessao() {
    console.log('Create session');
  let result = await HttpClient.get({
    url: `https://api.themoviedb.org/3/authentication/session/new?api_key=${apiKey}&request_token=${requestToken}`,
    method: "GET"
  })
  sessionId = result.session_id;
}

async function criarLista(nomeDaLista, descricao) {
    console.log('creating list');
  let result = await HttpClient.get({
    url: `https://api.themoviedb.org/3/list?api_key=${apiKey}&session_id=${sessionId}`,
    method: "POST",
    body: {
      name: nomeDaLista,
      description: descricao,
      language: "pt-br"
    }
  })
  listId = result.list_id;
}

async function adicionarFilmeNaLista(filmeId, listaId) {
    console.log('add movie to list');
  let result = await HttpClient.get({
    url: `https://api.themoviedb.org/3/list/${listaId}/add_item?api_key=${apiKey}&session_id=${sessionId}`,
    method: "POST",
    body: {
      media_id: filmeId
    }
  })
}

async function pegarLista() {
    console.log('getting list');
  let result = await HttpClient.get({
    url: `https://api.themoviedb.org/3/list/${listId}?api_key=${apiKey}`,
    method: "GET"
  })
}
