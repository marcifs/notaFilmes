import assert from "node:assert";
import { AvaliarFilmes } from "../src/avaliarFilmes.js";

describe("Testes da classe AvaliarFilmes", () => {
  it("CT01 - Validar quantidade de votos do primeiro filme", () => {
    const avaliarFilmes = new AvaliarFilmes();
    const filmes = avaliarFilmes.getFilmesAvaliados();
    const filme = filmes[0];

    const resultado = avaliarFilmes.getQuantPessoasVotaram(filme);

    assert.equal(resultado, 5);
  });

  it("CT02 - Validar quantidade de votos do segundo filme", () => {
    const avaliarFilmes = new AvaliarFilmes();
    const filmes = avaliarFilmes.getFilmesAvaliados();
    const filme = filmes[1];

    const resultado = avaliarFilmes.getQuantPessoasVotaram(filme);

    assert.equal(resultado, 5);
  });

  it("CT03 - Validar quantidade de votos do terceiro filme", () => {
    const avaliarFilmes = new AvaliarFilmes();
    const filmes = avaliarFilmes.getFilmesAvaliados();
    const filme = filmes[2];

    const resultado = avaliarFilmes.getQuantPessoasVotaram(filme);

    assert.equal(resultado, 3);
  });

  it("CT04 - Validar média das avaliações do primeiro filme", () => {
    const avaliarFilmes = new AvaliarFilmes();
    const filmes = avaliarFilmes.getFilmesAvaliados();
    const filme = filmes[0];

    const resultado = avaliarFilmes.getMediaNotas(filme);

    assert.equal(resultado, 4.4);
  });

  it("CT05 - Validar média das avaliações do segundo filme", () => {
    const avaliarFilmes = new AvaliarFilmes();
    const filmes = avaliarFilmes.getFilmesAvaliados();
    const filme = filmes[1];

    const resultado = avaliarFilmes.getMediaNotas(filme);

    assert.equal(resultado, 3.2);
  });

  it("CT06 - Validar média das avaliações do terceiro filme", () => {
    const avaliarFilmes = new AvaliarFilmes();
    const filmes = avaliarFilmes.getFilmesAvaliados();
    const filme = filmes[2];

    const resultado = avaliarFilmes.getMediaNotas(filme);

    assert.equal(resultado, 2);
  });

  it("CT07 - Validar avaliação do primeiro filme", () => {
    const avaliarFilmes = new AvaliarFilmes();
    const filmes = avaliarFilmes.getFilmesAvaliados();
    const filme = filmes[0];
    const resultado = avaliarFilmes.getAvaliacao(
      avaliarFilmes.getMediaNotas(filme),
    );

    assert.equal(resultado, "Filme recomendado");
  });

  it("CT08 - Validar avaliação do segundo filme", () => {
    const avaliarFilmes = new AvaliarFilmes();
    const filmes = avaliarFilmes.getFilmesAvaliados();
    const filme = filmes[1];

    const resultado = avaliarFilmes.getAvaliacao(
      avaliarFilmes.getMediaNotas(filme),
    );

    assert.equal(resultado, "Filme razoável");
  });

  it("CT09 - Validar avaliação do terceiro filme", () => {
    const avaliarFilmes = new AvaliarFilmes();
    const filmes = avaliarFilmes.getFilmesAvaliados();
    const filme = filmes[2];

    const resultado = avaliarFilmes.getAvaliacao(
      avaliarFilmes.getMediaNotas(filme),
    );

    assert.equal(resultado, "Filme ruim");
  });
});
