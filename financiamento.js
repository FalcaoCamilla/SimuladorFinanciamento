import {Parcela} from './parcela'

class Financiamento{
    #taxaJuros; //mensais
    #prazo; //meses
    #parcelas = [];
    constructor(valor, entrada, taxaJuros, prazo){
        this.#taxaJuros = taxaJuros;
        this.#prazo = prazo;
        //composiçao - financiamento possui ou tem parcelas
        this.#parcelas.push(new Parcela(0,0,0,0, valor - entrada))
    }
}