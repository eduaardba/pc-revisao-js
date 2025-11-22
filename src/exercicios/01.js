//desconto em compra
//regra de negócios 
// - se valorcompra >=100 -> 10% de desconto 
//- se valorcompra < 100 -> sem desconto
// crie uma função que execute isso 

function analisarDesconto(valorcompra) {
    let desconto = 0 // escopo de função

    if (valorcompra >=100) {
        desconto = valorcompra * 0.10
    } 

    valorFinal = valorcompra - desconto
    return{
        valorcompra,
        desconto,
        valorFinal,
    }
}

console.log(analisarDesconto(1200))
