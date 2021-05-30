const books = [
    {
        img: 'img/glav/books/b1.jpg',
        price: 609,
        title: 'Хребты безумия',
        id: 1,
    }, {
        img: 'img/glav/books/b2.jpg',
        price: 462,
        title: 'Станционный смотритель. Долг платежом красен',
        id: 2,
    }, {
        img: 'img/glav/books/b3.png',
        price: 861,
        title: 'Неведение отца Брауна',
        id: 3,
    }, {
        img: 'img/glav/books/b4.png',
        price: 816,
        title: 'Забытая деревня',
        id: 4,
    }, {
        img: 'img/glav/books/b5.jpg',
        price: 672,
        title: 'В конце они оба умрут',
        id: 5,
    }, {
        img: 'img/glav/books/b6.jpg',
        price: 375,
        title: 'Стивен Хокинг',
        id: 6,
    }, {
        img: 'img/glav/books/b7.png',
        price: 896,
        title: 'Гомункул. Приключения Лэнгдона Сент-Ива',
        id: 7,
    }, {
        img: 'img/glav/books/b8.png',
        price: 880,
        title: 'Не как у людей',
        id: 8,
    },
]

for (let i = 0; i < books.length; i++) {
    const book = document.createElement('div');

    book.innerHTML = `
        <div class="margin">
            <img src="${books[i].img}" alt="">
            <div class="book_price">${books[i].price} р.</div>
            <div class="book_discript">${books[i].title}</div>
        </div>`;

    document.querySelector('.img_books_container').appendChild(book);
}