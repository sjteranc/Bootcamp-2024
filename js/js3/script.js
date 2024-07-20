const url = 'https://pokeapi.co/api/v2/pokemon';
const totalPokemon = 898;
let timer;

async function handleFetch(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return await response.json();
}

async function getPokemon(idOrName) {
  try {
    const data = await handleFetch(`${url}/${idOrName}`);
    return data;
  } catch (error) {
    console.error('Error fetching Pokémon:', error);
    return null;
  }
}

function getImageID(id) {
  return String(id).padStart(3, '0');
}

async function generateNameOptions(correctName) {
  const nameOptions = [correctName];
  const usedNames = new Set([correctName]);

  while (nameOptions.length < 4) {
    const randomOptionId = Math.floor(Math.random() * totalPokemon) + 1;
    const optionName = await getPokemon(randomOptionId).then(data => data.name);
    if (optionName && !usedNames.has(optionName)) {
      nameOptions.push(optionName);
      usedNames.add(optionName);
    }
  }

  return nameOptions;
}

function displayNameOptions(nameOptions, correctName) {
  nameOptions.sort(() => Math.random() - 0.5);

  const nameButtons = document.querySelectorAll('.name-option');
  nameButtons.forEach((button, index) => {
    button.textContent = nameOptions[index];
    button.onclick = () => checkAnswer(nameOptions[index], correctName);
    button.classList.remove('hide');
    button.disabled = false;
  });

  startTimer(correctName);
}

function checkAnswer(selectedName, correctName) {
  const pokemonImage = document.getElementById('pokemon-image');
  const correctMessage = document.getElementById('correct-message');
  const incorrectMessage = document.getElementById('incorrect-message');
  const correctPokemonName = document.getElementById('correct-pokemon-name');
  const nameButtons = document.querySelectorAll('.name-option');

  clearInterval(timer);

  if (selectedName === correctName) {
    pokemonImage.style.filter = 'brightness(100%)';
    correctMessage.classList.remove('hide');
    playCorrectSound(); // Play the sound when correct
    setTimeout(() => {
      correctMessage.classList.add('hide');
    }, 3000);
  } else {
    pokemonImage.style.filter = 'brightness(100%)';
    correctPokemonName.textContent = correctName;
    incorrectMessage.classList.remove('hide');
    setTimeout(() => {
      incorrectMessage.classList.add('hide');
    }, 3000);
  }

  nameButtons.forEach(button => {
    button.classList.add('hide');
  });
}

function search() {
  const randomId = Math.floor(Math.random() * totalPokemon) + 1;
  const pokemonImage = document.getElementById('pokemon-image');
  const timerElement = document.getElementById('timer');

  timerElement.classList.add('hide');
  clearInterval(timer);
  
  pokemonImage.classList.add('hide');

  playWhosSound(); 

  getPokemon(randomId).then(data => {
    if (data) {
      const id = getImageID(randomId);
      pokemonImage.src = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`;
      pokemonImage.style.filter = 'brightness(0%)';
      generateNameOptions(data.name).then(nameOptions => {
        displayNameOptions(nameOptions, data.name);
        
        pokemonImage.classList.remove('hide'); 
      });
    }
  });
}

function startTimer(correctName) {
  let timeLeft = 10;
  const timerElement = document.getElementById('timer');
  timerElement.textContent = timeLeft;
  timerElement.classList.remove('hide');

  timer = setInterval(() => {
    timeLeft -= 1;
    timerElement.textContent = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(timer);
      checkAnswer(null, correctName); 
    }
  }, 1000);
}

function playCorrectSound() {
  const audio = document.getElementById('correctSound');
  audio.volume = 0.05; 
  audio.play();
}

function playWhosSound() {
  const audio = document.getElementById('whosSound');
  audio.volume = 0.05; 
  audio.play();
}