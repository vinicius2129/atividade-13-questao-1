let pesquisa = document.getElementById("pesquisa");
let inpTitulo = document.getElementById('inp_titulo');
let inpAno = document.getElementById('inp_ano');
let inpRadioTitulo = document.getElementById('escolha_livro_titulo');
let inpRadioAno = document.getElementById('escolha_livro_ano');

pesquisa.addEventListener('submit', pesquisar);
inpRadioAno.addEventListener('change', mudarInput);
inpRadioTitulo.addEventListener('change', mudarInput);

function pesquisar(evento) {
  evento.preventDefault();

  let inputRadioValue = document.querySelector('input[name=escolha_livro]:checked').value;

  if (inputRadioValue === "titulo") {
    window.location.assign('/buscar?titulo=' + inpTitulo.value); 
  } else {
    window.location.assign('/buscar/' + inpAno.value); 
  }
}

function mudarInput() {
  let inpRadio = document.querySelectorAll('input[name=escolha_livro]');

  if (inpRadio[0].checked) {
    inpTitulo.disabled = false;
    inpAno.disabled = true;
  } else {
    inpTitulo.disabled = true;
    inpAno.disabled = false;
  }
}
