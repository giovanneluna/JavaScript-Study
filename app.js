//Mensagem na tela
alert('Trolei Você $%&@$%@%$@%$%@$%@$%@$%')
//Link Href auto redirect (caso não esteja dentro de uma função, ele redireciona imediatamente para o link setado.)
function puxar(){
    window.location.href = 'https://google.com'
}
function discord () {
    window.location.href = 'https://discord.com/'
}
function kabum () {
    window.location.href = 'https://www.kabum.com.br/'
}

//Variaveis Setadas com #(id) .(classe). As varaveis tem papeis diferentes.o [] serve para selecionar a posição
var button = document.querySelector('#app button')
var input = document.querySelector('#app input#idade')
var button1 = document.getElementsByTagName('button')[0]
var button2 = document.getElementsByTagName('button')[1]
var button3 = document.getElementsByTagName('button')[2]
var link = document.querySelector('#app a')

// Ao clicar em um link href inexistente não vai exibir o nome na frente da url ex:Bookelectronics/#div | Bookelectronics/(sem nada)
link.addEventListener('click',function (event){
console.log('Clicou')
})

//Redirecionamento de Link com Menssagem
button3.addEventListener('click', function () {
    alert('Você vai pra KABUMMMMMMM')
    window.location.href = 'https://kabum.com.br'
})
button2.addEventListener('click', function () {
    alert('Você vai pro discord')
    window.location.href = 'https://discord.com'
})
button1.addEventListener('click', function () {
    alert('Você vai pro google')
    window.location.href = 'https://google.com'
})

//Event de não ter refresh apos clicar em um formulario
button.addEventListener('click', function (event){
    event.preventDefault()
    console.log(event)
})

function showAge(){
    alert('Sua idade é'+input.value)
}
//Estilização do codigo
var element = document.querySelector('div#app')
element.style.background = 'burlywood'
element.style.height = '200px'
element.style.widht = '200px'
var text = document;querySelector

var app = document.querySelector('div#app')

//Link Href 
var link = document.createElement('a')
var textLink = document.createTextNode('Visitar Curso de JavaScript')

link.setAttribute('href','https://station.cataline.io/basecamp/javascript')
link.appendChild(textLink)

app.appendChild()