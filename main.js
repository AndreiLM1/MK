
const $arenas = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');

//let gameStopped = false;

const player1 = {
	player: 1,
	name: 'SubZero',
	hp: 100,
	img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
	weapon: ['Kunai'],
	attack: function(name){
		console.log(name + ' Fight...');
	}
};
 
 const player2 = {
	player: 2,
	name: 'Scorpion',
	hp: 100,
	img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
	weapon: ['Sword'],
	attack: function(name){
		console.log(name + ' Fight...');
	}
};

//console.log(player1.weapon[0]);
//player1.attack(player1.name);

function createElement(tagType, className){
	const $element = document.createElement(tagType);
	if(className){
		$element.classList.add(className);
	}
	return $element;
}

function createPlayer(playerObj){
	
	const $player = createElement('div', 'player' + playerObj.player);
	const $progressbar = createElement('div', 'progressbar');
	const $character = createElement('div', 'character');
	const $life = createElement('div', 'life');
	const $name = createElement('div', 'name');
	const $img = createElement('img');
	
	$life.style.width = playerObj.hp + '%';
	//$life.style.backgroundColor = 'green';
	$name.innerText = playerObj.name;
	$img.src = playerObj.img;
	
	$progressbar.appendChild($life);
	$progressbar.appendChild($name);
	$character.appendChild($img);

	$player.appendChild($progressbar);
	$player.appendChild($character);
	
	return $player;
}

function changeHP(playerObj){
	const $playerLife = document.querySelector('.player' + playerObj.player + ' .life');
	playerObj.hp -= Math.min(getRandomValue(20), playerObj.hp);
	$playerLife.style.width = playerObj.hp + '%';
}

function gameOver(name, titleType){
	const $Title = createElement('div', 'loseTitle');
	$Title.innerText = titleType == 'draw' ? titleType: name + ' ' + titleType;
	$randomButton.disabled = true
	//gameStopped = true;
	return $Title;
}

function getRandomValue(range){
	return Math.ceil(Math.random() * range);
}

$randomButton.addEventListener('click', function(){
	
	//if(!gameStopped){
	
		changeHP(player1);
		changeHP(player2);
		
		if(player1.hp <= 0 && player2.hp <= 0){
			$arenas.appendChild(gameOver('', 'draw'));		
		}else if(player1.hp <= 0){
			//$arenas.appendChild(gameOver(player1.name, 'lose'));
			$arenas.appendChild(gameOver(player2.name, 'win'));
		}else if(player2.hp <= 0){
			//$arenas.appendChild(gameOver(player2.name, 'lose'));
			$arenas.appendChild(gameOver(player1.name, 'win'));
		}
	//}
});

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));

