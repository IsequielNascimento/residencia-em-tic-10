//Questão 02
const user = {
    name: 'Megatron',
    sex: 'Decepticon',
    age: 8001
}

if (!user.name) {
    console.log("O usuário não tem nome registrado");
}
// user.name ? '' : console.log("O usuário não tem nome registrado")

if (!user.sex) {
    console.log("O usuário não tem sexo registrado");
}
// user.sex ?'':console.log("O usuário não tem sexo registrado")

if (!user.age && user.age !== 0) {
    console.log("O usuário não tem idade registrada");
}

// user.age? '':    console.log("O usuário não tem idade registrada")


if (user.name && user.sex && user.age) {
    console.log(`O usuário ${user.name} do sexo ${user.sex}, tem ${user.age} ano(s)!`);
}

// user.name && user.sex && user.age?console.log(`O usuário ${user.name} do sexo ${user.sex}, tem ${user.age} ano(s)!`):console.log("Verifique se todas as informações estão preenchidas")
// ...

//Questão 03

if (typeof user.name !== "string") {
    console.log("O nome do usuário foi registrado no formato errado. Deve ser string");

}

if (typeof user.sex !== "string") {
    console.log("O sexo do usuário foi registrado no formato errado. Deve ser string");

}
if (typeof user.age !== "number") {
    console.log("A idade do usuário foi registrado no formato errado. Deve ser number");

}
