let friends = [];

function add() {
    let name = document.getElementById('friend-name');
    let list = document.getElementById('friends-list');

    if(name.value == "") {
        alert("Por favor, digite o nome do amigo.");
        return;
    } else if(friends.includes(name.value)) {
        alert("Já existe um amigo com esse nome. Por favor, escolha outro nome.");
        return;
    }
    
    friends.push(name.value);

    if (list.textContent == '') {
        list.textContent = name.value;
    } else {
        list.textContent = `${list.textContent}, ${name.value}`;
    }

    name.value = '';
}

function randomize() {
    if(friends.length == 0) {
        return;
    } else if(friends.length < 4) {
        alert(`Número insuficiente de amigos para a realização do sorteio. Por favor, adicione ${4 - friends.length} ou mais participantes.`);
        return;
    }
    
    shuffle(friends);

    let randomization = document.getElementById('random-list');
    for (let i = 0; i < friends.length; i++) {
        if (i == friends.length - 1) {
            randomization.innerHTML = `${randomization.innerHTML} ${friends[i]} --> ${friends[0]} <br/>`;
        } else {
            randomization.innerHTML = `${randomization.innerHTML} ${friends[i]} --> ${friends[i + 1]} <br/>`;
        }
    }
}

function shuffle(list) {
    for (let index = list.length; index; index--) {
        const randomIndex = Math.floor(Math.random() * index);
        [list[index - 1], list[randomIndex]] = [list[randomIndex], list[index - 1]];
    }
}

function restart() {
    friends = [];
    document.getElementById('friends-list').innerHTML = '';
    document.getElementById('random-list').innerHTML = '';
}