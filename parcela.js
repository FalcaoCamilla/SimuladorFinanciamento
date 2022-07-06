export class Parcela{
    #numero;
    #valor;
    #juros;
    #amortizacao;
    #saldo;
    constructor(numero, valor, juros, amortizacao, saldo){
        this.#numero = numero;
        this.#amortizacao = amortizacao;
        this.#juros = juros;
        this.#saldo = saldo;
        this.#valor = valor;
    }

    getSaldo(){
        return this.#saldo;
    }
    getDadosFormatados(){
        const dados = [];
        dados.push(this.#numero);
        dados.push(this.#valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}));
        dados.push(this.#juros.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}));
        dados.push(this.#amortizacao.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}));
        dados.push(this.#saldo.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}));
        return dados;
    }
}