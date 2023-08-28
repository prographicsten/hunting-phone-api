const loadPhone = async () => {
    const response  = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone');
    const data = await response.json();
    const phones = data.data;
    displayPhones(phones);
};

const displayPhones = phones => {
    // step 1: find container Id
    const phoneContainer = document.getElementById('phone_container');
    phones.forEach(phone => {
        console.log(phone);
        // step 2: create a div
        const phoneCard = document.createElement('div');
        phoneCard.classList = `card bg-gray-100 shadow-xl mb-8 md:mb-3 py-5`;
        // step 3: create in div innerHTML
        phoneCard.innerHTML = `
        <figure><img src="${phone.image}" alt="${phone.brand}" /></figure>
        <div class="card-body text-center">
            <h2 class="card-title mx-auto">${phone.phone_name}</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end mx-auto mt-4">
                <button class="btn btn-primary btn-sm">Buy Now</button>
            </div>
        </div>
        `;
        // step 4: appendChild
        phoneContainer.appendChild(phoneCard);
    });
};

loadPhone();


// const loadPhone = async () => {
//     const res = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone');
//     const data = await res.json();
//     const phones = data.data;
//     // console.log(phones);
//     displayPhones(phones);
// }

// const displayPhones = phones => {
//     // console.log(phones);
    
//     // step 1: find container id
//     const phoneContainer = document.getElementById('phone_container');

//     phones.forEach(phone => {
//         // console.log(phone)
//         // step 2: create a new div
//         const phoneCard = document.createElement('div');
//         phoneCard.classList = `card bg-gray-100 shadow-xl`;

//         // step 3: create innerText or innerHTML
//         phoneCard.innerHTML = `
//             <div class="card bg-gray-100 shadow-xl">
//                 <figure><img src="${phone.image}" alt="Shoes" /></figure>
//                 <div class="card-body text-center">
//                     <h2 class="card-title mx-auto">${phone.brand}</h2>
//                     <p>${phone.slug}</p>
//                     <div class="card-actions justify-end mx-auto mt-4">
//                         <button class="btn btn-primary btn-sm">Buy Now</button>
//                     </div>
//                 </div>
//             </div>
//         `;
        
//         // step 4: appendChild
//         phoneContainer.appendChild(phoneCard);
//     });
// };


// loadPhone();