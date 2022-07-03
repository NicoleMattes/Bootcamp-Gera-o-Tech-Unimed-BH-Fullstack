// Um desenvolvedor tentou criar um projeto que consome a base de dados de filme do TMDB para criar um organizador de filmes, mas desistiu 
// pois considerou o seu código inviável. Você consegue usar typescript para organizar esse código e a partir daí aprimorar o que foi feito?
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
// A ideia dessa atividade é criar um aplicativo que: 
//    - Busca filmes
//    - Apresenta uma lista com os resultados pesquisados
//    - Permite a criação de listas de filmes e a posterior adição de filmes nela
// Todas as requisições necessárias para as atividades acima já estão prontas, mas a implementação delas ficou pela metade (não vou dar tudo de graça).
// Atenção para o listener do botão login-button que devolve o sessionID do usuário
// É necessário fazer um cadastro no https://www.themoviedb.org/ e seguir a documentação do site para entender como gera uma API key https://developers.themoviedb.org/3/getting-started/introduction
var apiKey = '3f301be7381a03ad8d352314dcc3ec1d';
var userSpace = document.getElementById('user-space');
var loginButton = document.getElementById('login-button');
var searchContainer = document.getElementById('search-container');
var searchButton = document.getElementById('search-button');
var searchInput = document.getElementById('search');
var requestToken;
var username;
var password;
var sessionId;
var listId;
var logged = false;
var nome;
var listName;
var movieListArray = [];
var movieListUl;
//onInit
//verificação para desabilitar o botão de busca ao entrar na pagina
if (logged == false) {
    searchInput.value = '';
    searchButton.disabled = true;
    searchInput.disabled = true;
}
//chamada do login
loginButton.addEventListener('click', function () {
    login();
});
//função de login
function login() {
    return __awaiter(this, void 0, void 0, function () {
        var err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    username = document.getElementById('login').value;
                    nome = username;
                    password = document.getElementById('senha').value;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 5, , 6]);
                    return [4 /*yield*/, criarRequestToken()];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, logar()];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, criarSessao()];
                case 4:
                    _a.sent();
                    if (logged == true) {
                        searchButton.disabled = false;
                        searchInput.disabled = false;
                        isLogedIn();
                    }
                    return [3 /*break*/, 6];
                case 5:
                    err_1 = _a.sent();
                    console.log(err_1);
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    });
}
//função de pesquisa de filmes na api e criação da lista de filmes encontrados
searchButton.addEventListener('click', function () { return __awaiter(_this, void 0, void 0, function () {
    var lista, query, listaDeFilmes, ul, _loop_1, _i, _a, item;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                lista = document.getElementById("lista");
                if (lista) {
                    lista.outerHTML = "";
                }
                query = document.getElementById('search').value;
                return [4 /*yield*/, procurarFilme(query)];
            case 1:
                listaDeFilmes = _b.sent();
                ul = document.createElement('ul');
                ul.id = "lista";
                _loop_1 = function (item) {
                    var li = document.createElement('li');
                    var addBtn = document.createElement('button');
                    addBtn.textContent = 'Adicionar a lista';
                    addBtn.setAttribute('id', 'add-btn');
                    addBtn.addEventListener('click', function () {
                        addMovieToList(item.original_title, item.id);
                    });
                    li.appendChild(document.createTextNode(item.original_title));
                    li.appendChild(addBtn);
                    ul.appendChild(li);
                };
                for (_i = 0, _a = listaDeFilmes.results; _i < _a.length; _i++) {
                    item = _a[_i];
                    _loop_1(item);
                }
                searchContainer.appendChild(ul);
                return [2 /*return*/];
        }
    });
}); });
//Sequência lógica após usuário realizar o login
function isLogedIn() {
    removeLoginForm();
    loggedInTitleShow();
    createListForm();
}
//remove o formulário de login
function removeLoginForm() {
    var loginForm = document.getElementById('login-form');
    userSpace === null || userSpace === void 0 ? void 0 : userSpace.removeChild(loginForm);
}
//adiciona o titulo de "Usuário entrou"
function loggedInTitleShow() {
    var isLoggedIn = document.getElementById('is-logged');
    var loggedTitle = document.createElement('h2');
    loggedTitle.innerHTML = nome + ' ENTROU!';
    isLoggedIn.appendChild(loggedTitle);
}
//cria o formulário para criar a lista de filmes
function createListForm() {
    var listFormDiv = document.getElementById('list-form');
    var listNameInput = document.createElement('input');
    var createListButton = document.createElement('button');
    listNameInput.type = 'text';
    createListButton.textContent = 'Create List';
    createListButton.addEventListener('click', function () {
        listName = listNameInput.value;
        createNewList();
    });
    listFormDiv.appendChild(listNameInput);
    listFormDiv.appendChild(createListButton);
}
//cria o titulo da lista no front-matter
function createNewList() {
    var movieList = document.getElementById('movie-list');
    var listTitle = document.createElement('h3');
    listTitle.textContent = listName;
    movieList.appendChild(listTitle);
    var listUl = document.createElement('ul');
    listUl.setAttribute('id', 'movie-list-ul');
    movieList.appendChild(listUl);
    movieListUl = listUl;
    var saveListButton = document.createElement('button');
    saveListButton.textContent = 'Salvar lista de filmes';
    saveListButton.addEventListener('click', function () {
        saveList();
    });
    movieList.appendChild(saveListButton);
}
//adiciona filme a lista
function addMovieToList(name, id) {
    var movieObj = { movieName: name, id: id };
    if (movieListUl == undefined) {
        alert('ERROR! Você não possui uma lista criada!');
    }
    else {
        movieListArray.push(movieObj);
        updateList();
    }
}
//atualiza a lista na tela
function updateList() {
    var movies = document.querySelectorAll('#movie');
    if (movies.length == 0) {
        createLi();
    }
    else {
        createLi();
    }
}
//cria o item li da lista de filmes
function createLi() {
    var movieLi = document.createElement('li');
    movieLi.setAttribute('id', 'movie');
    if (movieListArray.length == 0) {
        alert('Erro ao adicionar filmes na lista!');
    }
    else {
        for (var i = 0; i < movieListArray.length; i++) {
            movieLi.textContent = movieListArray[i].movieName;
            movieListUl.appendChild(movieLi);
        }
    }
}
//salva a lista na API
function saveList() {
    return __awaiter(this, void 0, void 0, function () {
        var desc, i;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(movieListArray.length == 0)) return [3 /*break*/, 1];
                    alert('Erro! Você não possui filmes adicionados na lista!');
                    return [3 /*break*/, 6];
                case 1:
                    desc = 'Lista criada por' + username;
                    return [4 /*yield*/, criarLista(listName, desc)];
                case 2:
                    _a.sent();
                    i = 0;
                    _a.label = 3;
                case 3:
                    if (!(i < movieListArray.length)) return [3 /*break*/, 6];
                    return [4 /*yield*/, adicionarFilmeNaLista(movieListArray[i].id, listId)];
                case 4:
                    _a.sent();
                    _a.label = 5;
                case 5:
                    i++;
                    return [3 /*break*/, 3];
                case 6: return [2 /*return*/];
            }
        });
    });
}
//API requests
var HttpClient = /** @class */ (function () {
    function HttpClient() {
    }
    HttpClient.get = function (_a) {
        var url = _a.url, method = _a.method, _b = _a.body, body = _b === void 0 ? null : _b;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_c) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var request = new XMLHttpRequest();
                        request.open(method, url, true);
                        request.onload = function () {
                            if (request.status >= 200 && request.status < 300) {
                                resolve(JSON.parse(request.responseText));
                            }
                            else {
                                reject({
                                    status: request.status,
                                    statusText: request.statusText
                                });
                            }
                        };
                        request.onerror = function () {
                            reject({
                                status: request.status,
                                statusText: request.statusText
                            });
                        };
                        if (body) {
                            request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
                            body = JSON.stringify(body);
                        }
                        request.send(body);
                    })];
            });
        });
    };
    return HttpClient;
}());
function procurarFilme(query) {
    return __awaiter(this, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log('search movie');
                    query = encodeURI(query);
                    console.log(query);
                    return [4 /*yield*/, HttpClient.get({
                            url: "https://api.themoviedb.org/3/search/movie?api_key=".concat(apiKey, "&query=").concat(query),
                            method: "GET"
                        })];
                case 1:
                    result = _a.sent();
                    return [2 /*return*/, result];
            }
        });
    });
}
function adicionarFilme(filmeId) {
    return __awaiter(this, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log('Added movie');
                    return [4 /*yield*/, HttpClient.get({
                            url: "https://api.themoviedb.org/3/movie/".concat(filmeId, "?api_key=").concat(apiKey, "&language=en-US"),
                            method: "GET"
                        })];
                case 1:
                    result = _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function criarRequestToken() {
    return __awaiter(this, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log('create token');
                    return [4 /*yield*/, HttpClient.get({
                            url: "https://api.themoviedb.org/3/authentication/token/new?api_key=".concat(apiKey),
                            method: "GET"
                        })];
                case 1:
                    result = _a.sent();
                    requestToken = result.request_token;
                    return [2 /*return*/];
            }
        });
    });
}
function logar() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log('logging');
                    return [4 /*yield*/, HttpClient.get({
                            url: "https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=".concat(apiKey),
                            method: "POST",
                            body: {
                                username: "".concat(username),
                                password: "".concat(password),
                                request_token: "".concat(requestToken)
                            }
                        })];
                case 1:
                    _a.sent();
                    logged = true;
                    return [2 /*return*/];
            }
        });
    });
}
function criarSessao() {
    return __awaiter(this, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log('Create session');
                    return [4 /*yield*/, HttpClient.get({
                            url: "https://api.themoviedb.org/3/authentication/session/new?api_key=".concat(apiKey, "&request_token=").concat(requestToken),
                            method: "GET"
                        })];
                case 1:
                    result = _a.sent();
                    sessionId = result.session_id;
                    return [2 /*return*/];
            }
        });
    });
}
function criarLista(nomeDaLista, descricao) {
    return __awaiter(this, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log('creating list');
                    return [4 /*yield*/, HttpClient.get({
                            url: "https://api.themoviedb.org/3/list?api_key=".concat(apiKey, "&session_id=").concat(sessionId),
                            method: "POST",
                            body: {
                                name: nomeDaLista,
                                description: descricao,
                                language: "pt-br"
                            }
                        })];
                case 1:
                    result = _a.sent();
                    listId = result.list_id;
                    return [2 /*return*/];
            }
        });
    });
}
function adicionarFilmeNaLista(filmeId, listaId) {
    return __awaiter(this, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log('add movie to list');
                    return [4 /*yield*/, HttpClient.get({
                            url: "https://api.themoviedb.org/3/list/".concat(listaId, "/add_item?api_key=").concat(apiKey, "&session_id=").concat(sessionId),
                            method: "POST",
                            body: {
                                media_id: filmeId
                            }
                        })];
                case 1:
                    result = _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function pegarLista() {
    return __awaiter(this, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log('getting list');
                    return [4 /*yield*/, HttpClient.get({
                            url: "https://api.themoviedb.org/3/list/".concat(listId, "?api_key=").concat(apiKey),
                            method: "GET"
                        })];
                case 1:
                    result = _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
