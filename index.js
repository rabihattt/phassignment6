

function allplants() {
  fetch("https://openapi.programming-hero.com/api/plants")
    .then(res => res.json())
    .then(data => {
      displayPlants(data.plants);
    });
}


function displayPlants(plants) {
  const container = document.getElementById("plant-container");
  container.innerHTML = "";

  plants.forEach(plant => {
    const div = document.createElement("div");
    div.innerHTML = `
      <div class="bg-white rounded-xl p-4 w-[300px] h-[380px] shadow-lg flex flex-col">
        <div class="w-full h-40 mb-3">
          <img src="${plant.image}" alt=""
            class="w-full h-full object-cover rounded-md">
        </div>
        <h2 class="text-xl font-semibold mb-1">${plant.name}</h2>
        <p class="text-gray-600 text-sm flex-grow overflow-auto">${plant.description}</p>
        <div class="flex justify-between items-center mt-3">
          <h3 class="text-sm font-medium bg-[#f0fdf4]">${plant.category}</h3>
          <p class="text-sm font-bold text-green-600"><span>ট </span>${plant.price}</p>
        </div>
        <button 
          class="add-to-cart mt-3 bg-green-600 hover:bg-green-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition" 
          data-id="${plant.id}"
          data-name="${plant.name}"
          data-price="${plant.price}">
          Add to Cart
        </button>
      </div>`;
    container.appendChild(div);
  });


  const buttons = document.querySelectorAll(".add-to-cart");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const name = btn.dataset.name;
      const price = btn.dataset.price;
      addToCart({ name, price });
    });
  });
}


let cart = [];


function addToCart(item) {
  cart.push(item);
  renderCart();
}


function renderCart() {
  const cartContainer = document.getElementById("addcart");
  cartContainer.innerHTML = "<h2 class='font-bold mb-2'>Your Cart</h2>";


  cart.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = "flex justify-between items-center border-b py-1";
    div.innerHTML = `
      <span>${item.name} - ট ${item.price}</span>
      <button class="text-red-600 font-bold remove-btn" data-index="${index}">X</button>
    `;
    cartContainer.appendChild(div);
  });


  const removeBtns = cartContainer.querySelectorAll(".remove-btn");
  removeBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const idx = btn.dataset.index;
      cart.splice(idx, 1);
      renderCart();
    });
  });
}


function categories() {
  fetch("https://openapi.programming-hero.com/api/categories")
    .then(res => res.json())
    .then(data => {
      displayCategories(data.categories);
    });
}


function displayCategories(categories) {
  const container = document.getElementById("catagories-container");
  container.innerHTML = "";

  categories.forEach(cat => {
    const btn = document.createElement("button");
    btn.className = "btn btn-wide bg-[#cff0dc] m-1";
    btn.innerText = cat.category_name;

    btn.addEventListener("click", () => {
      fetch(`https://openapi.programming-hero.com/api/category/${cat.id}`)
        .then(res => res.json())
        .then(data => {
          displayPlants(data.data);
        });
    });

    container.appendChild(btn);
  });
}


function categories() {
  fetch("https://openapi.programming-hero.com/api/categories")
    .then(res => res.json())
    .then(data => {
      displayCategories(data.categories);
    });
}


function categories() {
  fetch("https://openapi.programming-hero.com/api/categories")
    .then(res => res.json())
    .then(data => {
      displayCategories(data.categories);
    });
}


function displayCategories(categories) {
  const container = document.getElementById("catagories-container");
  container.innerHTML = "";



  categories.forEach(cat => {
    const btn = document.createElement("button");
    btn.className = "btn btn-wide bg-[#cff0dc] m-1 category-btn";
    btn.innerText = cat.category_name;

    btn.addEventListener("click", () => {
      clearActive();
      btn.classList.add("bg-green-600", "text-white");

      
      fetch(`https://openapi.programming-hero.com/api/category/${cat.id}`)
        .then(res => res.json())
        .then(data => {
      
          displayPlants(data.plants);
        });
    });

    container.appendChild(btn);
  });
}


function clearActive() {
  const allBtns = document.querySelectorAll(".category-btn");
  allBtns.forEach(b => b.classList.remove("bg-green-600", "text-white"));
}


categories();
allplants(); 
