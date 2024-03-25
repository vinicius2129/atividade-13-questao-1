const livros = require('./livros');

module.exports = function rotasLivros(app) {
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
};
