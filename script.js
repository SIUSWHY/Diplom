const cards = [
    {
        img: 'img/1.png',
        id: 1,
        data: {
            image: 'img/1.png',
            title: 'Даниель Дефо: Библиотека приключений. Приключения Робинзона Крузо',
            autor: '',

        }
    }, {
        img: 'img/2.jpg',
        id: 2,
    }, {
        img: 'img/3.jpg',
        id: 3,
    }, {
        img: 'img/4.png',
        id: 4,
    }, {
        img: 'img/5.png',
        id: 5,
    }, {
        img: 'img/6.jpg',
        id: 6,
    }, {
        img: 'img/7.jpg',
        id: 7,
    }, {
        img: 'img/8.jpg',
        id: 8,
    }, {
        img: 'img/8.jpg',
        id: 8,
    }, {
        img: 'img/8.jpg',
        id: 8,
    },
]
cards.data

for (let i = 0; i < cards.length; i++) {
    const new_card = document.createElement('div');

    new_card.innerHTML = `
    <div class="holder">
                <img class="style_poster_book shadow" id="myBtn" src="${cards[i].img}">
            </div>`;

    document.querySelector('.style_books_gallery').appendChild(new_card);
}

// меню с характеристиками книг 
const favDialog = document.getElementById('favDialog');
$(document).on('click', '.holder', function () {
    favDialog.showModal();
})

$(document).on('click', '.closeButton', function () {
    favDialog.close();
})

const reg = document.getElementById('registr');
$(document).on('click', '.reg', function () {
    reg.showModal();
})