// lessons 29
// "use strict"

let numberOfFilms;

function start() {
    numberOfFilms = Number(prompt('Сколько фильмов вы уже посмотрели?', ''));

    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) //numberOfFilms == "" т.к. "" == 0-true
        //"" === 0 false
    {
        numberOfFilms = Number(prompt('Сколько фильмов вы уже посмотрели?', ''));
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false,
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из просмотренных фильмов?', '').trim(),   // метод .trim() 30 lessons
            b = +prompt('На сколько оцениваете его?', '');

        if (a !== null && b !== null && a !== "" && b !== "" && a.length < 50) {
            personalMovieDB.movies[a] = b;   // записываем свойства в объект
            console.log('done');
        } else {
            console.log('error');
            i--;                            //  если не выполненилось условие выше (if), возвращаемся на одну итерацию выше
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {

    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}

detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {                      // приходит false, меняем на true => выводим в кансоль, и на оборот.
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.private);


function writeYourGenres(genres) {
    for (let i = 1; i <= 3; i++) {
        // let genre = prompt(`Вашь любимый жанр под номером ${i}`);
        // genres[i-1] = genre;

        genres[i - 1] = prompt(`Вашь любимый жанр под номером ${i}`);
    }
}

writeYourGenres(personalMovieDB.genres);


