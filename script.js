// configuração do click pro menu mobile

// nav - variavél que recebe o dom da tag nav que será adicionada e removida a classe show
const nav = document.querySelector('header nav');

// abrir_fechar_menu - variavél pro hamburguer e pro x
const abrir_fechar_menu = document.querySelectorAll(
  '#header_navegacao .toggle'
);

// quando clicar no abrir_fechar_menu vai aparecer ou desaparecer
for (const a_f of abrir_fechar_menu) {
  a_f.addEventListener('click', function () {
    nav.classList.toggle('show');
  });
}

// quando clicar aos links do ul, o ul deve desaparecer
const links = document.querySelectorAll('header ul li a');

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show');
  });
}


// scroll reveal

window.sr = ScrollReveal ({reset: true});


sr.reveal('.scrollTexto', {
  duration: 1500});



sr.reveal('.scrollxyz',{
  rotate: {x: 100, y: 50, z: 20},
  duration: 1000
})



//display do botao durante o scroll (link pro topo)
const botaoTop = document.querySelector('a.link-botao-top')
console.log(botaoTop)
function aparecerbotao(){
 if(window.scrollY > 200){
   botaoTop.classList.add('aparecer-botao-to-top');
 }else{
   botaoTop.classList.remove('aparecer-botao-to-top');
 }
}

window.addEventListener('scroll', aparecerbotao)


