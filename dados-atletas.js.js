class Atleta {
    constructor(nome, idade, peso, altura, notas) {
        // this.nome é a variável de instância
        // nome é o parâmetro do constructor
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
    }

    calculaCategoria() {
        if (this.idade > 8 && this.idade < 12) {
            return "Infantil";
        } else if (this.idade > 11 && this.idade < 14) {
            return "Juvenil";
        } else if (this.idade > 13 && this.idade < 16) {
            return "Intermediário";
        } else if (this.idade > 15 && this.idade < 31) {
            return "Adulto";
        } else {
            return "Sem categoria"
        }
    };

    calculaIMC() {
        return this.peso / (this.altura * this.altura)
    };

    calculaMediaValida() {
        let notasOrganizadas = this.notas.slice().sort((a, b) => a - b);
        let notasComputadas = notasOrganizadas.slice(1, 3);
        let somaNotasComputadas = notasComputadas.reduce((total, atual) => total + atual, 0);
        let media = somaNotasComputadas / notasComputadas.length;

        return media;
    };

    obtemNomeAtleta() {
        return this.nome
    };

    obtemIdadeAtleta() {
        return this.idade
    };

    obtemPesoAtleta() {
        return this.peso
    }

    obtemNotasAtleta() {
        return this.notas
    };

    obtemCategoria() {
        return this.calculaCategoria()
    };

    obtemIMC() {
        return this.calculaIMC ()
    };

    obtemMediaValida() {
        return this.calculaMediaValida ()
    }
}

const atleta = new Atleta("Cesar Abascal", 30, 80, 1.70, [10, 9.34, 8.42, 10, 7.88]);

console.log (`Nome: ${atleta.nome}`);
console.log (`Idade: ${atleta.idade}`);
console.log (`Peso: ${atleta.peso}`);
console.log (`Altura: ${atleta.altura}`);
console.log (`Notas: ${atleta.notas}`);
console.log (`Categoria: ${atleta.obtemCategoria()}`);
console.log (`IMC: ${atleta.obtemIMC()}`);
console.log (`Média válida: ${atleta.obtemMediaValida()}`);