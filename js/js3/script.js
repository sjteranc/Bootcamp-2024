const url = 'https://pokeapi.co/api/v2/pokemon';
const totalPokemon = 898;

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
}

function checkAnswer(selectedName, correctName) {
  const pokemonImage = document.getElementById('pokemon-image');
  const correctMessage = document.getElementById('correct-message');
  const nameButtons = document.querySelectorAll('.name-option');

  if (selectedName === correctName) {
    pokemonImage.style.filter = 'brightness(100%)';
    correctMessage.classList.remove('hide'); // Asegura que se muestre el mensaje de "Correcto!"
    setTimeout(() => {
      correctMessage.classList.add('hide'); // Oculta el mensaje de "Correcto!" después de 2 segundos
    }, 1);
    nameButtons.forEach(button => {
      button.classList.add('hide');
    });
  } else {
    alert('Incorrect! Try again.');
  }
}

function search() {
  const randomId = Math.floor(Math.random() * totalPokemon) + 1;
  const pokemonImage = document.getElementById('pokemon-image');

  getPokemon(randomId).then(data => {
    if (data) {
      const id = getImageID(randomId);
      pokemonImage.src = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`;
      pokemonImage.style.filter = 'brightness(0%)';
      generateNameOptions(data.name).then(nameOptions => {
        displayNameOptions(nameOptions, data.name);
      });
    }
  });
}
