/**
 Exercício 5 
 
 Criar um projeto node no vsCode, seguindo a estrutura já compartilhada na aula 4, contendo o código de aplicação/fonte e arquivos
 de teste. 
 Deve conter ao menos 3 casos de teste em cada um dos exercícios. 
 Entrega por meio de um repositório do github atualizado. 
 Você tem um vetor com notas de diferentes usuários para os respectivos filmes: 
 Entrada: 
 [
  {nome: "Minha mãe é uma peça", avaliações: [5,4,4,4,5]}, 
  {nome: "Saneamento Básico", avaliações: [3,4,2,3,4]},
  {nome: "Se eu fosse você", avaliações: [1,2,3]} 
 ] 
   
 Saída:
  Quantas pessoas votaram no filme? 
  Qual é a média das notas? 
  Deve retornar a avaliação: 
            Media >=4 "Filme recomendado" 
            Media entre 3 e 4 "Filme razoável"
            Média <3 "Filme ruim""

 */

export class AvaliarFilmes {
  getFilmesAvaliados() {
    const filmesAvaliadosJson = [
      { nome: "Minha mãe é uma peça", avaliacoes: [5, 4, 4, 4, 5] },
      { nome: "Saneamento Básico", avaliacoes: [3, 4, 2, 3, 4] },
      { nome: "Se eu fosse você", avaliacoes: [1, 2, 3] },
    ];

    return filmesAvaliadosJson;
  }

  getQuantPessoasVotaram(filme) {
    return filme.avaliacoes.length;
  }

  getMediaNotas(filme) {
    const somaNotas = filme.avaliacoes.reduce(
      (total, valor) => total + valor,
      0,
    );

    return somaNotas / filme.avaliacoes.length;
  }

  getAvaliacao(media) {
    if (media >= 4) {
      return "Filme recomendado";
    } else if (media >= 3 && media < 4) {
      return "Filme razoável";
    } else {
      return "Filme ruim";
    }
  }

  imprimirAvaliacao() {
    this.getFilmesAvaliados().forEach((filme) => {
      console.log(`\nFilme: ${filme.nome}`);
      console.log(
        `Quantidade de pessoas que votaram: ${this.getQuantPessoasVotaram(filme)}`,
      );
      console.log(`Média das notas: ${this.getMediaNotas(filme)}`);
      console.log(`Avaliação: ${this.getAvaliacao(this.getMediaNotas(filme))}`);
    });
  }
}

const avaliarFilmes = new AvaliarFilmes();
avaliarFilmes.imprimirAvaliacao();
