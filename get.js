let api = "https://669a52209ba098ed61ff31bc.mockapi.io/Pets";

const getInfoFromApi = async () => {
    let resp = null
    try {
        resp = await fetch(api);
    } catch (e) {
        console.log(e);
        return;
    }

    let json = await resp.json();

    const visualPets = () => {
        for (const pets of json) {
            const card = document.createElement("div");
            //    card.classList.add("card");
            card.innerHTML = `
           <div class="card mb-3" style="max-width: 540px;">
           <div class="row g-0">
             <div class="col-md-4">
               <img src="${pets.photoUrl}" class="img-fluid rounded-start">
             </div>
             <div class="col-md-8">
               <div class="card-body">
                 <h5 class="card-title">${pets.name}</h5>
                 <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                 <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                 <button type="button" class="btn btn-dark">Добавить</button>
               </div>
             </div>
           </div>
           </div> `;

            card.dataset.id = pets.id;

            window.pets.appendChild(card);
        }
    }

    visualPets();
}

let promise = getInfoFromApi();
promise.then(() => {
    console.log("today");
});

