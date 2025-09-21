const allplants = () =>{
    const url = 'https://openapi.programming-hero.com/api/plants'
    fetch(url)
    .then(res => res.json())
    .then((data) =>{
console.log(data)
displayplant(data.plants)
    }) 
}

const displayplant = (plants) => {
    const plantcontainer = document.getElementById('plant-container')
    plantcontainer.innerHTML = '';
    for(let plant of plants){
        const plantdiv = document.createElement('div')
        plantdiv.innerHTML= `<div class="bg-white rounded-xl p-4 w-[300px] h-[380px] shadow-lg flex flex-col">
 
  <div class="w-full h-40 mb-3">
    <img src="${plant.image}" alt=""
         class="w-full h-full object-cover rounded-md">
  </div>
  <h2 class="text-xl font-semibold mb-1">${plant.name}</h2>
  <p class="text-gray-600 text-sm flex-grow overflow-auto">
    ${plant.description}
  </p>

  <div class="flex justify-between items-center mt-3">
    <h3 class="text-sm font-medium bg-[#f0fdf4]">${plant.category}</h3>
    <p class="text-sm font-bold text-green-600"><span>ট </span>${plant.price}</p>
  </div>
  <button
    class="mt-3 bg-green-600 hover:bg-green-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition">
    Add to Cart
  </button>
</div>`
        plantcontainer.appendChild(plantdiv)
    }
    
}


const catagories = () =>{
    const url = 'https://openapi.programming-hero.com/api/categories'
    fetch(url)
    .then(res => res.json())
    .then((data) =>{
console.log(data)
displaycatagories(data.categories)
    })
}

const displaycatagories = (categories) => {
    const catagoriescontainer = document.getElementById('catagories-container')
    catagoriescontainer.innerHTML = '';
    for(let category of categories){
        const catagoriesdiv = document.createElement('div')
        catagoriesdiv.innerHTML= `<P>hello</P>`
        catagoriescontainer.appendChild(catagoriesdiv)
    }
}

catagories();
allplants();