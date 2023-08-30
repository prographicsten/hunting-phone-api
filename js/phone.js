const loadPhone = async (searchText = 'iPhone' , isShowMore) => {
    const response  = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await response.json();
    const phones = data.data;
    // console.log(phones);
    displayPhones(phones, isShowMore);
};

const displayPhones = (phones, isShowMore) => {
    // step 1: find container Id
    const phoneContainer = document.getElementById('phone_container');
    // clear phone container cards before adding new cards
    phoneContainer.textContent = '';

    // display show all button if there are more than 12 phones
    const showMoreContainers = document.getElementById('show_more_container');
    if(phones.length > 12 && !isShowMore) {
        showMoreContainers.classList.remove('hidden');
    }
    else {
        showMoreContainers.classList.add('hidden', 'true');
    }

    // console.log('is show more', isShowMore);
    // can you see search results length
    // console.log(phones.length);

    // you want show how phone results in 1 page. if not show more
    if(!isShowMore) {
        phones = phones.slice(0, 12);
    }


    phones.forEach(phone => {
        // console.log(phone);
        // step 2: create a div
        const phoneCard = document.createElement('div');
        phoneCard.classList = `card bg-gray-100 shadow-xl py-5 mb-5`;
        // step 3: create in div innerHTML
        phoneCard.innerHTML = `
        <figure><img src="${phone.image}" alt="${phone.brand}" /></figure>
        <div class="card-body text-center">
            <h2 class="card-title mx-auto">${phone.phone_name}</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end mx-auto mt-4">
                <button onclick="handleShowDetail('${phone.slug}')" class="btn btn-primary btn-sm">Show Details</button>
            </div>
        </div>
        `;
        // step 4: appendChild
        phoneContainer.appendChild(phoneCard);
    });
    // hide loading spinner
    toggleLoadingSpinner(false);
};


// =================================================================
const handleShowDetail = async (id) => {
    // console.log("Show Details is called", id);
    // load single phone data
    const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
    // console.log(res);
    const data = await res.json();
    // console.log(data);
    const phone = data.data;
    // console.log(phone);
    showPhoneDetails(phone);
};

const showPhoneDetails = async (phone) => {
    // console.log(phone);
    // find modal container id
    const modalContainer = document.getElementById('modal_container');
    // set up all HTML elements in modal container
    modalContainer.innerHTML = `
    <div class="bg-[#0D6EFD0D] rounded-lg mb-3">
        <img class="mx-auto py-3" src="${phone?.image}" alt="">
    </div>
    <h3 id="phone_name" id="show_details_phone_name" class="font-bold text-lg mb-2">${phone.name}</h3>
    <p class="text-[10px] lg:text-xs font-semibold text-[#403F3F] mb-2"> Storage : <span class="font-normal text-[#706F6F]">${phone?.mainFeatures?.storage}</span></p>
    <p class="text-[10px] lg:text-xs font-semibold text-[#403F3F] mb-2"> Display Size : <span class="font-normal text-[#706F6F]">${phone?.mainFeatures?.displaySize}</span></p>
    <p class="text-[10px] lg:text-xs font-semibold text-[#403F3F] mb-2"> Chipset : <span class="font-normal text-[#706F6F]">${phone?.mainFeatures?.chipSet}</span></p>
    <p class="text-[10px] lg:text-xs font-semibold text-[#403F3F] mb-2"> Memory : <span class="font-normal text-[#706F6F]">${phone?.mainFeatures?.memory}</span></p>
    <p class="text-[10px] lg:text-xs font-semibold text-[#403F3F] mb-2"> Slug : <span class="font-normal text-[#706F6F]">${phone?.slug}</span></p>
    <p class="text-[10px] lg:text-xs font-semibold text-[#403F3F] mb-2"> Release data : <span class="font-normal text-[#706F6F]">${phone?.releaseDate}</span></p>
    <p class="text-[10px] lg:text-xs font-semibold text-[#403F3F] mb-2"> Brand : <span class="font-normal text-[#706F6F]">${phone?.brand}</span></p>
    <p class="text-[10px] lg:text-xs font-semibold text-[#403F3F] "> GPS : <span class="font-normal text-[#706F6F]">${phone?.others?.GPS}</span></p>
    `;


    // show the modal
    show_details_modal.showModal();
}

// =================================================================


const handleSearch = (isShowMore) => {
    // console.log('handle search button clicked');
    toggleLoadingSpinner(true);
    const searchField = document.getElementById('search_field');
    const searchFieldValue = searchField.value;
    // searchField.value = '';
    loadPhone(searchFieldValue, isShowMore);
}


const anotherSearchBtn = () => {
    // console.log('Another Search button clicked');
    toggleLoadingSpinner(true);
    const searchField2 = document.getElementById('search_field2');
    const searchFieldValue2 = searchField2.value;
    // searchField2.value = '';
    loadPhone(searchFieldValue2);
}


const toggleLoadingSpinner = (isLoading) => {
    const loadingSpinner = document.getElementById('loading_spinner');
    if(isLoading){
        loadingSpinner.classList.remove('hidden');
    }
    else{
        loadingSpinner.classList.add('hidden');
    }
};


const handleShowMore = () => {
    handleSearch(true);
};



// toggleLoadingSpinner();

loadPhone();


