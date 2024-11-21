function academy() {
    return alert('olá, bem vindo(a) a academia Genasfitness')
}
academy()
let starttraining = prompt('Começe o seu treino! (sim/não)')
if (starttraining=='sim'){
    let menu = ''
do{
menu =  prompt(`Opções disponíveis
    1- Fazer mobilidade.
    2- Pegar mais peso 
    3- Pegar menos peso.
    4- Sair.`)
    switch(menu){
        case'1':
        alert('Parabéns você fez a mobilidade e não ficou dolorido(a)!')
        break
        case'2':
        alert('Você pegou mais peso e ficou bombadão!')
        break
        case'3':
        alert('Você pegou menos peso e ficou fraco!')
        break
        case'4':
        alert('Saindo...')
        break
        default:
            alert('Opção indisponível.')
    }
} 
while(menu !=="4") }
else {
    (starttraining=='não')
    alert('Você não irá treinar hoje!')
}
