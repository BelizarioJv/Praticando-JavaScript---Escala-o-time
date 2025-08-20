let escalacaolist = []
function addPlayer(){
    const escalacao = document.getElementById("escalaçao-section");
    
    const h3 = document .createElement('h3');
    h3.innerText = `Jogador`;
    escalacao.appendChild(h3)
    
    const ul = document.createElement("ul");

    const positionLi = document.createElement("li");
    positionLi.innerText = "Posição do jogador: "
    const positionInput = document.createElement("input");
    positionInput.type = "text";
    positionInput.name = "Posiçao";
    positionLi.appendChild(positionInput);
    ul.appendChild(positionLi);
    ul.appendChild(document.createElement("br"));

    const namePlayer = document.createElement("li");
    namePlayer.innerText = "Nome do jogador: ";
    const namePlayerInput = document.createElement("input");
    namePlayerInput.type = "text";
    namePlayerInput.name = "Fullname";
    namePlayer.appendChild(namePlayerInput);
    ul.appendChild(namePlayer);
    ul.appendChild(document.createElement("br"))

    const numberPlayer = document.createElement("li");
    numberPlayer.innerText = "Numero da camisa do jogador: ";
    const numberPlayerInput = document.createElement("input");
    numberPlayerInput.type = "number";
    numberPlayerInput.name = "Numero da camisa do jogador";
    numberPlayer.appendChild(numberPlayerInput);
    ul.appendChild(numberPlayer);
    ul.appendChild(document.createElement("br"));

    const buttonConfirm = document.createElement("button");
    buttonConfirm.innerText = "Confirmar";
    buttonConfirm.onclick =function (){
         const mensagem = `Deseja confirmar a escalação do jogador:\n` +
        `\nNome: ${namePlayerInput.value}` +
        `\nPosição do jogador: ${positionInput.value}` +
        `\nNúmero da camisa do jogador: ${numberPlayerInput.value}`;
        const resposta = confirm(mensagem);
        if(resposta){
        escalacaolist.push([namePlayerInput.value,numberPlayerInput.value]);

        escalacao.removeChild(h3);
        escalacao.removeChild(ul);
        for(let i = 0 ; i < escalacaolist.length;i++){
            listaJogadores = []
            alert(`Nome do jogador: ${escalacaolist[i][0]} camisa: ${escalacaolist[i][1]}`);
            }
        }
    }
    ul.appendChild(buttonConfirm);
    escalacao.appendChild(ul)
}
