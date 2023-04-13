const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

const criaLi = () => {
    const li = document.createElement('li');
    return li;
}

inputTarefa.addEventListener('keypress', (e) => {
    e.keyCode === 13 && inputTarefa.value ? criaTarefa(inputTarefa.value) : null;
})

const criaBotaoapagar = (li) => {
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    botaoApagar.setAttribute('class', 'apagar');
    botaoApagar.setAttribute('title', 'Apagar esta tarefa');
    li.appendChild(botaoApagar);
}

const limpaInput = () => {
    inputTarefa.value = '';
    inputTarefa.focus()
}

const criaTarefa = (textoInput) => {
    const li = criaLi();
    li.innerText = textoInput;
    tarefas.appendChild(li);
    limpaInput();
    criaBotaoapagar(li);
    salvaTarefa();
}

btnTarefa.addEventListener('click', () => {
    !inputTarefa.value ? inputTarefa.value : ""
    criaTarefa(inputTarefa.value);
});

document.addEventListener('click', (e) => {
    const el = e.target;
    if (el.classList.contains('apagar')) {
       el.parentElement.remove();
       salvaTarefa();
    }
});

const salvaTarefa = () => {
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listaDeTarefas.push(tarefaTexto);

    }
    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
}
function addTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);
    

    for(let tarefa of listaDeTarefas){
        criaTarefa(tarefa);
    }

}


addTarefasSalvas();



