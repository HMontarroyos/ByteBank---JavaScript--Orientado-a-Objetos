//Projeto Bytebank Orientado a Objetos 
import {Cliente} from "./Cliente.js";
import {Conta} from "./Conta.js";

const cliente1 = new Cliente("Ricardo", 11122233309);
const cliente2 = new Cliente("Alice", 88822233309);
const cliente3 = new Cliente("Hebert", 15486709836);

const contaCorrenteRicardo = new Conta(1001, cliente1);
contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.sacar(100);

const contaCorrenteHebert = new Conta(9883, cliente3);
contaCorrenteHebert.depositar(400);
contaCorrenteHebert.sacar(100)
contaCorrenteHebert.tranferir(200, contaCorrenteRicardo);

const conta2 = new Conta(102, cliente2);

let valor = 200;
contaCorrenteRicardo.tranferir(valor, conta2);

console.log(contaCorrenteRicardo);
console.log(contaCorrenteHebert);



