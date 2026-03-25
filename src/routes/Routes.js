const { Router } = require('express');
const router = Router();

const livros = [];

router.get('/disponiveis', (req, res) => {
  res.json(livros.filter(l => l.disponivel));
});

router.get('/:id', (req, res) => {
  const livro = livros.find(l => l.id == req.params.id);
  if (!livro) return res.status(404).send();
  res.json(livro);
});

router.post('/', (req, res) => {
  const novo = { id: Date.now(), ...req.body };
  livros.push(novo);
  res.status(201).json(novo);
});

router.put('/:id', (req, res) => {
  const livro = livros.find(l => l.id == req.params.id);
  if (!livro) return res.status(404).send();

  Object.assign(livro, req.body);
  res.json(livro);
});

router.delete('/:id', (req, res) => {
  const index = livros.findIndex(l => l.id == req.params.id);
  if (index === -1) return res.status(404).send();

  livros.splice(index, 1);
  res.status(204).send();
});

module.exports = router;