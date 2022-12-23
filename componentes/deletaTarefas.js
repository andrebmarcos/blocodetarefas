const BotaoDeleta = () => {
    const botaoDeleta = document.createElement('button')
    botaoDeleta.classList.add('delete-button')

    botaoDeleta.innerText = 'Delete'
    botaoDeleta.addEventListener('click', deleteTarefa)
    return botaoDeleta   
}

 const deleteTarefa = (evento) => {
    const botaoDeleta = evento.target
    const tarefaCompleta = botaoDeleta.parentElement
    tarefaCompleta.remove()
    return botaoDeleta
 }

 export default BotaoDeleta