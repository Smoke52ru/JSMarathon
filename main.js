player1 = {
    name: "Liu Kang",
    hp: 50,
    img: 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
    weapon: ['fists', 'sword'],
    attack: function () {
        console.log(self.name + ' Fight...')
    }
}
player2 = {
    name: "Sonya",
    hp: 60,
    img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
    weapon: ['fists', 'pistol'],
    attack: function () {
        console.log(self.name + ' Fight...')
    }
}

function createPlayer(playerClass, characterName, hp){
    let $root = document.createElement('div')
    $root.classList.add(playerClass)

    let $bar = document.createElement('div')
    $bar.classList.add('progressbar')

    let $life = document.createElement('div')
    $life.classList.add('life')
    $life.style.width = hp + '%'

    let $name = document.createElement('div')
    $name.classList.add('name')
    $name.innerText = characterName

    let $character = document.createElement('div')
    $character.classList.add('character')

    let $img = document.createElement('img')
    $img.src = 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif'

    $bar.appendChild($life)
    $bar.appendChild($name)
    $root.appendChild($bar)
    $character.appendChild($img)
    $root.appendChild($character)

    return $root
}

function createPlayer_v2(playerClass, playerObj){
    let $root = document.createElement('div')
    $root.classList.add(playerClass)

    let $bar = document.createElement('div')
    $bar.classList.add('progressbar')

    let $life = document.createElement('div')
    $life.classList.add('life')
    $life.style.width = playerObj['hp'] + '%'

    let $name = document.createElement('div')
    $name.classList.add('name')
    $name.innerText = playerObj['name']

    let $character = document.createElement('div')
    $character.classList.add('character')

    let $img = document.createElement('img')
    $img.src = playerObj['img']

    $bar.appendChild($life)
    $bar.appendChild($name)
    $root.appendChild($bar)
    $character.appendChild($img)
    $root.appendChild($character)

    return $root
}

let $p1 = createPlayer('player1', 'SUB-ZERO', 100)
let $p2 = createPlayer('player2', 'SONYA', 90)

let $p1_v2 = createPlayer_v2('player1', player1)
let $p2_v2 = createPlayer_v2('player2', player2)

let $arenas = document.querySelector('div.arenas')
    $arenas.appendChild($p1_v2)
    $arenas.appendChild($p2_v2)
