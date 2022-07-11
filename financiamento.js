import {Parcela} from "./parcela.js"

const corpoTabela = document.querySelector('#corpoTabela');

export class Financiamento{
    #taxaJuros; //mensais
    #prazo; //meses
    #parcelas = [];
    constructor(valor, entrada, taxaJuros, prazo){
        this.#taxaJuros = taxaJuros;
        this.#prazo = prazo;
        //composiçao - financiamento possui ou tem parcelas
        this.#parcelas.push(new Parcela(0,0,0,0,valor - entrada)) //a primeira parcela se preocupa apenas com o parametro saldo (saldo devedor, valor que a pessoa quer financiar - valor de entrada)
    }

    static calcJuros(valor, taxaJuros){
        return valor * (taxaJuros / 100);
    }

    calcParcelasMensais(){
        let saldo = this.#parcelas[this.#parcelas.length-1].getSaldo();
        let prazo = this.#prazo - (this.#parcelas.length - 1);
        let amortizacao = saldo / prazo;
        for (let i = 0; i < prazo; i++){
            const numero = this.#parcelas.length;
            const juros = Financiamento.calcJuros(saldo, this.#taxaJuros);
            const valor = juros + amortizacao;
            saldo -= amortizacao;
            if (saldo < 0){saldo = 0};
            this.#parcelas.push(new Parcela(numero, valor, juros, amortizacao, saldo));
        }
    }

    exibeParcelas(){
        const parcelas = this.#parcelas.slice(1);
        console.log(parcelas)
        for(const parcela of parcelas){
            const linha = corpoTabela.insertRow(-1);
            for (const dado of parcela.getDadosFormatados()){
                const celula = linha.insertCell(-1);
                celula.textContent = dado;
            }
        }
    }
}