const axios = require('axios');
require('dotenv').config();

const api = `http://localhost:${process.env.PORT || 3000}`;

describe('Rotas de livros (axios)', () => {

  let livroId;

  test('POST /livros', async () => {
    const res = await axios.post(`${api}/livros`, {
      titulo: 'Clean Code',
      autor: 'Martin Code'
    });

    expect(res.status).toBe(201);
    expect(res.data.titulo).toBe('Clean Code');

    livroId = res.data.id;
  });

  test('GET /livros', async () => {
    const res = await axios.get(`${api}/livros`);

    expect(res.status).toBe(200);
    expect(Array.isArray(res.data)).toBe(true);
  });

  test('DELETE /livros/:id', async () => {
    const res = await axios.delete(`${api}/livros/${livroId}`);

    expect(res.status).toBe(204);
  });

});