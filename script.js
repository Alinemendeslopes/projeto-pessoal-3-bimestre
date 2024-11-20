function academy() {
    return alert('olá, bem vindo(a) a academia genasfitnes')
}

let menu = ''
const option = [
    '1- Fazer mobilidade.',
    '2- Pegar mais peso ',
    '3- Pegar menos peso.',
    '4- Sair.'
]
do {
    prompt(`Opções disponíveis:\n${options.join('\n')}`)
    switch(menu){
        case'1':
        alert('Parabéns você fez a mobilidade e não ficou dolorido(a)!')
        break
        case'2':
        alert('Você pegou mais peso e ficou bombadão!')
        case'3':
        alert('Você pegou menos peso e ficou fraco!')
        case'4':
        alert('Saindo...')
        break
        default:
            alert('Opção indisponível.')
    }

} while(menu !=="4")
