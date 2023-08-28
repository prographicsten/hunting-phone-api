const loadPhone = async (searchText) => {
    const response  = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await response.json();
    const phones = data.data;
    displayPhones(phones);
};

const displayPhones = phones => {
    // step 1: find container Id
    const phoneContainer = document.getElementById('phone_container');
    // clear phone container cards before adding new cards
    phoneContainer.textContent = '';

    // can you see search results length
    console.log(phones.length);

    // you want show how phone results in 1 page
    phones = phones.slice(0, 9);


    phones.forEach(phone => {
        // console.log(phone);
        // step 2: create a div
        const phoneCard = document.createElement('div');
        phoneCard.classList = `card bg-gray-100 shadow-xl py-5`;
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


const handleSearch = () => {
    // console.log('handle search button clicked');
    const searchField = document.getElementById('search_field');
    const searchFieldValue = searchField.value;
    console.log(searchFieldValue);
    searchField.value = '';
    loadPhone(searchFieldValue);
}


const anotherSearchBtn = () => {
    // console.log('Another Search button clicked');
    const searchField2 = document.getElementById('search_field2');
    const searchFieldValue2 = searchField2.value;
    searchField2.value = '';
    loadPhone(searchFieldValue2);
}


// loadPhone();


