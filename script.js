const cards = [
    {
        img: 'img/1.png',
        author: 'Дефо Даниель',
        interpreter: 'Шишмарева Мария Андреевна',
        editor: 'Иванова Виктория',
        genre: 'Зарубежная приключенческая литература и др.',
        publishing_house: 'LostBook, 2021 г',
        price: '496',
    }, {
        img: 'img/2.jpg',
        author: 'Ньюман Питер',
        interpreter: 'Путилин Аркадий',
        editor: '-',
        genre: 'Современная зарубежная проза',
        publishing_house: 'АСТ, 2021 г.',
        price: '711',
    },

]

for (let i = 0; i < cards.length; i++) {
    const new_card = document.createElement('div');

    new_card.innerHTML = `
    <div class="holder">
            <img class="style_poster_book" src="${cards[i].img}">
            <div class="block">
                <div class="discrip_text_style">Автор: <div class="input_discrip_text_style">${cards[i].author}</div>
                </div>
                <div class="discrip_text_style">Переводчик: <div class="input_discrip_text_style">${cards[i].interpreter}</div>
                </div>
                <div class="discrip_text_style">Редактор: <div class="input_discrip_text_style">${cards[i].editor}</div>
                </div>
                <div class="discrip_text_style">Жанр: <div class="input_discrip_text_style">${cards[i].genre}</div>
                </div>
                <div class="discrip_text_style">Издательство: <div class="input_discrip_text_style">${cards[i].publishing_house}
                    </div>
                </div>
                <div class="buy_button_style">
                    <div class="price_text_style">Цена: ${cards[i].price} р.</div>
                </div>
            </div>
        </div>`;

    document.querySelector('.style_books_gallery').appendChild(new_card);
}
{/* ${cards[i].img} */ }