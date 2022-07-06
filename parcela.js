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
}