console.log('HelloWorld');

const player1 = {
	name: 'SubZero',
	hp: 100,
	img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
	weapon: ['Kunai'],
	attack: function(name){
		console.log(name + ' Fight...');
	}
};
 
 const player2 = {
	name: 'Scorpion',
	hp: 100,
	img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
	weapon: ['Sword'],
	attack: function(name){
		console.log(name + ' Fight...');
	}
};

console.log(player1.weapon[0]);
player1.attack(player1.name);

function createPlayer(divName, player1){
	
	const $player1 = document.createElement('div');
	$player1.classList.add(divName);
	
	const $progressbar = document.createElement('div');
	$progressbar.classList.add('progressbar');
	
	const $character = document.createElement('div');
	$character.classList.add('character');
	
	const $life = document.createElement('div');
	$life.classList.add('life');
	$life.style.width = player1.hp + '%';
	$life.style.backgroundColor = 'green';
	
	const $name = document.createElement('div');
	$name.classList.add('name');
	$name.innerText = player1.name;
	
	const $img = document.createElement('img');
	$img.src = player1.img;
	
	$character.appendChild($img);
	$progressbar.appendChild($life);
	$progressbar.appendChild($name);

	$player1.appendChild($progressbar);
	$player1.appendChild($character);
	
	const $root = document.querySelector('.arenas');
	$root.appendChild($player1);
	
	

}

createPlayer('player1', player1);
createPlayer('player2', player2);

