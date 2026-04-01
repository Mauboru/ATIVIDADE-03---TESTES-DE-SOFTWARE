const axios = require('axios');
require('dotenv').config();
const api = `http://localhost:${process.env.PORT || 3000}`;

// Altere para ids que existem no seu banco
const LIVRO_ID = 1;
const USUARIO_ID = 1;

describe("Empréstimos", () => {
    test("deve registrar um novo empréstimo", async () => {
        const res = await axios.post(`${api}/emprestimos`, {
            livro_id: LIVRO_ID,
            usuario_id: USUARIO_ID,
            data_devolucao_prevista: "2025-05-01",
        });
        expect(res.status).toBe(201);
        expect(res.data).toHaveProperty("id");

        await axios.delete(`${api}/emprestimos/${res.data.id}`);
    });

    test("deve retornar uma lista de empréstimos", async () => {
        const res = await axios.get(`${api}/emprestimos`);
        expect(res.status).toBe(200);
        expect(Array.isArray(res.data)).toBe(true);
    });

    test("deve deletar um empréstimo", async () => {
        // criar o teste
    });

    test("deve retornar 404 ao deletar empréstimo inexistente", async () => {
        // criar o teste
    });

    test("deve retornar um empréstimo pelo id", async () => {
        // criar o teste
    });
    
    test("deve retornar 404 para empréstimo inexistente", async () => {
        // criar o teste
    });

    test("deve retornar 400 ao registrar empréstimo sem livro_id", async () => {
        try {
            await axios.post(`${api}/emprestimos`, {
                usuario_id: USUARIO_ID,
                data_devolucao_prevista: "2025-05-01",
            });
        } catch (err) {
            expect(err.response.status).toBe(400);
        }
    });

    test("deve retornar 400 ao registrar empréstimo sem usuario_id", async () => {
        // criar o teste
    });

    test("deve retornar 400 ao registrar empréstimo sem data de devolução", async () => {
        // criar o teste
    });

    test("deve registrar a devolução de um empréstimo", async () => {
        // criar o teste
    });

    test("deve retornar 404 ao devolver empréstimo inexistente", async () => {
        // criar o teste
    });

    test("deve listar empréstimos de um usuário específico", async () => {
        // criar o teste
    });

    test("deve retornar 400 ao emprestar livro já emprestado", async () => {
        // criar o teste
    });
});