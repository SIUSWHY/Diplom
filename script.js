const cards = [
    {
        img: 'img/1.png',
        author: 'Дефо Даниель',
        interpreter: 'Шишмарева Мария Андреевна',
        editor: 'Иванова Виктория',
        genre: 'Зарубежная приключенческая литература и др.',
        publishing_house: 'Лабиринт, 2021 г.',
        price: '496',
    }, {
        img: 'img/2.jpg',
        author: 'Ньюман Питер',
        interpreter: 'Путилин Аркадий',
        editor: '-',
        genre: 'Современная зарубежная проза',
        publishing_house: 'АСТ, 2021 г.',
        price: '711',
    }, {
        img: 'img/3.jpg',
        author: 'Мейер Марисса',
        interpreter: 'Колябина Е. И., Шолохова Елена',
        editor: '-',
        genre: 'Молодежная литература и др.',
        publishing_house: 'АСТ, 2021 г.',
        price: '541',
    }, {
        img: 'img/4.png',
        author: 'Верн Жюль',
        interpreter: 'Бекетова А.',
        editor: 'Иванова Виктория',
        genre: 'Зарубежная приключенческая литература и др.',
        publishing_house: 'Лабиринт, 2021 г.',
        price: '557',
    }, {
        img: 'img/5.png',
        author: 'Ли Стейси',
        interpreter: 'Нефедова Анна',
        editor: '-',
        genre: 'Молодежная литература',
        publishing_house: ' Аркадия, 2021 г.',
        price: '912',
    }, {
        img: 'img/6.jpg',
        author: 'Файзал Хафса',
        interpreter: '-',
        editor: '-',
        genre: 'Молодежная литература, Современная зарубежная проза',
        publishing_house: ' Эксмо, 2021 г.',
        price: '331',
    }, {
        img: 'img/7.jpg',
        author: 'Лавкрафт Говард Филлипс',
        interpreter: 'Брилова Л., Мичковский О., Дорогокупля В. Н.',
        editor: '-',
        genre: 'Классическая зарубежная проза',
        publishing_house: 'Феникс, 2021 г.',
        price: '609',
    }, {
        img: 'img/8.jpg',
        author: 'Лукьяненко Сергей Васильевич',
        interpreter: '-',
        editor: '-',
        genre: 'Современная отечественная проза',
        publishing_house: 'АСТ, 2021 г.',
        price: '620',
    },


    // author - Автор
    // interpreter - Переводчик
    // editor-Редактор
    // genre-Жанр
    // publishing_house-Издательство

]

// for (let i = 0; i < cards.length; i++) {
//     const new_card = document.createElement('div');

//     new_card.innerHTML = `
//     <div class="holder">
//             <img class="style_poster_book" src="${cards[i].img}">
//             <div class="block">
//                 <div class="max_size_text_block">
//                 <div class="discrip_text_style">Автор: <div class="input_discrip_text_style">${cards[i].author}</div>
//                 </div>
//                 <div class="discrip_text_style">Переводчик: <div class="input_discrip_text_style">${cards[i].interpreter}</div>
//                 </div>
//                 <div class="discrip_text_style">Редактор: <div class="input_discrip_text_style">${cards[i].editor}</div>
//                 </div>
//                 <div class="discrip_text_style">Жанр: <div class="input_discrip_text_style">${cards[i].genre}</div>
//                 </div>
//                 <div class="discrip_text_style">Издательство: <div class="input_discrip_text_style">${cards[i].publishing_house}
//                     </div>
//                 </div>
//                 </div>
//                 <div class="buy_button_style">
//                     <div class="price_text_style">Цена: ${cards[i].price} р.</div>
//                 </div>
//             </div>
//         </div>`;

//     document.querySelector('.style_books_gallery').appendChild(new_card);
// }

// меню с выбором ингридиентов 
const favDialog = document.getElementById('favDialog');
$(document).on('click', '.holder', function () {
    favDialog.showModal();
})

$(document).on('click', '.closeButton', function () {
    favDialog.close();
})


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}