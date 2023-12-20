/*Crie uma função que calcule o fatorial de um número fornecido como argumento. Por exemplo:*/
//fatorial(5) // 5! = 5x4x3x2x1 = 120


function fatorial(param){

    let mult = 1;
    for(param; param > 0; param--){

        mult *= param;
    }
    return;
}

fatorial(5)