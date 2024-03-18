let express = require('express');
let ejs = require('ejs');

let app = express();

app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});

let livros = [
  { id: 0, ano: 2004, titulo: "Amanhecer de Inverno", autor: 'Luisa Marques',},
  { id: 1, ano: 2005, titulo: "Alvorada de Outono", autor: 'Paulo Silva' },
  { id: 2, ano: 2006, titulo: "Noite de Primavera", autor: 'Carolina Santos' },
  { id: 3, ano: 2007, titulo: "Tardes de Verão", autor: 'Ricardo Oliveira' },
  { id: 4, ano: 2009, titulo: "Caminhos da Esperança", autor: 'Ana Maria Pereira' },
  { id: 5, ano: 2009, titulo: "Segredos do Passado", autor: 'Bruno Almeida' },
  { id: 6, ano: 2010, titulo: "O Mistério da Meia-Noite", autor: 'Mariana Santos' },
  { id: 7, ano: 2011, titulo: "O Fantasma da Floresta", autor: 'Gustavo Silva' },
  { id: 8, ano: 2011, titulo: "Caminhos da Lua", autor: 'Isabella Ramos' },
  { id: 9, ano: 2011, titulo: "O Eco do Silêncio", autor: 'Miguel Silva' },
  { id: 10, ano: 2014, titulo: "O Último Suspiro", autor: 'Ana Torres' },
  { id: 11, ano: 2015, titulo: "Sombras do Destino", autor: 'Lucas Oliveira' },
  { id: 12, ano: 2016, titulo: "Além das Estrelas", autor: 'Sofia Costa' },
  { id: 13, ano: 2016, titulo: "O Labirinto das Memórias", autor: 'Gabriel Santos' },
  { id: 14, ano: 2018, titulo: "A Canção do Oceano", autor: 'Clara Pereira' },
  { id: 15, ano: 2019, titulo: "O Fogo do Renascimento", autor: 'Clara Pereira' },
  { id: 16, ano: 2020, titulo: "O Guardião das Sombras", autor: 'Manuela Fernandes' },
  { id: 17, ano: 2021, titulo: "Véu de Estrelas", autor: 'Pedro Almeida' },
  { id: 18, ano: 2022, titulo: "Luzes do Crepúsculo", autor: 'Joana Oliveira' },
  { id: 19, ano: 2023, titulo: "Cidades de Cristal", autor: 'André Santos' },
  { id: 20, ano: 2024, titulo: "A Queda dos Reinos", autor: 'Beatriz Soares' }
];

app.get('/', (req, res) => {
  res.render('index', { lista: livros });
});

app.get('/buscar', (req, res) => {
  let titulo = req.query?.titulo || '';
  let listaFiltrada = livros.filter(livro => livro.titulo.toUpperCase().includes(titulo.toUpperCase()));
  res.render('index', { lista: listaFiltrada });
});

app.get('/buscar/:ano', (req, res) => {
  let ano = req.params?.ano || '';
  let listaFiltrada = livros.filter(livro => livro.ano == ano);
  res.render('index', { lista: listaFiltrada });
});
