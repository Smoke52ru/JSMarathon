player1 = {
    player: 1,
    name: "Liu Kang",
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
    weapon: ['fists', 'sword'],
    attack: function () {
        console.log(self.name + ' Fight...')
    }
}
player2 = {
    player: 2,
    name: "Sonya",
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
    weapon: ['fists', 'pistol'],
    attack: function () {
        console.log(self.name + ' Fight...')
    }
}

function createElement(tag, className) {
    const $tag = document.createElement(tag)
    if (className) {
        $tag.classList.add(className)
    }
    return $tag
}

function createPlayer(playerObj){
    let $root = createElement('div', 'player'+playerObj.player)
    let $bar = createElement('div', 'progressbar')
    let $life = createElement('div', 'life')
    let $name = createElement('div', 'name')
    let $character = createElement('div', 'character')
    let $img = createElement('img')

    $life.style.width = playerObj['hp'] + '%'
    $name.innerText = playerObj['name']
    $img.src = playerObj['img']

    $bar.appendChild($life)
    $bar.appendChild($name)
    $root.appendChild($bar)
    $character.appendChild($img)
    $root.appendChild($character)

    return $root
}

const $arenas = document.querySelector('div.arenas')
    let $p1 = createPlayer(player1)
    let $p2 = createPlayer(player2)
    $arenas.appendChild($p1)
    $arenas.appendChild($p2)

let randomDamage = () => Math.ceil(Math.random()*20)


function changeHP(player) {
    const $playerHP = document.querySelector('.player'+ player.player +' .life')
    player.hp -= randomDamage()
    $playerHP.style.width = player.hp + '%'

    if (player.hp <= 0) {
        player.hp = 0
        $playerHP.style.width = player.hp + '%'
        // $arenas.appendChild(playerLose(player.name))
        $arenas.appendChild(playerWin(player.player === 1 ? player2.name : player1.name))

        $randomButton.disabled = true
    }
}

function playerLose(name) {
    const $loseTitle = createElement('div', 'loseTitle')
    $loseTitle.innerText = name +' lose'

    return $loseTitle
}

function playerWin(name) {
    const $winTitle = createElement('div', 'loseTitle')
    $winTitle.innerText = name + ' wins'

    return $winTitle
}

const $randomButton = document.querySelector('.button')
    $randomButton.addEventListener('click', function (){
        console.log('#####: Click')

        changeHP(player1)
        changeHP(player2)
    })
