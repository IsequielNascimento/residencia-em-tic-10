//Questão 02
const user = {
    name: "Megatron",
    sex: 'Decepticon',
    age: 8001
}

//Questão 04  A partir do algoritmo criado na questão anterior, refatore-o para que seja utilizada apenas 3 condicionais.

if (!user.name || typeof user.name !== "string") {
    console.log("O nome do usuário não pode estar em branco ou ser diferente de string");
    process.exit();
}
if (!user.sex || typeof user.sex !== "string") {
    console.log("O sexo do usuário não pode estar em branco ou ser diferente de string");
    process.exit();

}
if (!user.age  || typeof user.age !== "number" && user.age !== 0) {
    console.log("A idade do usuário não pode estar em branco ou ser diferente de number");
    process.exit();
}

console.log(`O usuário ${user.name} do sexo ${user.sex}, tem ${user.age} ano(s)!`);



