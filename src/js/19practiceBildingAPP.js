// lessons 19
// "use strict"

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', ''); //ставим унарный + т.к. работаем с числами
console.log(numberOfFilms)

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false,
};

const a = prompt('Один из просмотренных фильмов?', ''),
    b = +prompt('На сколько оцениваете его?', ''),
    c = prompt('Один из просмотренных фильмов?', ''),
    d = +prompt('На сколько оцениваете его?', '');

personalMovieDB.movies[a] = b;  // записыаем записываем свойства в объект,
personalMovieDB.movies[c] = d;  // записыаем в ключ - lastMovie, в значение -  reiting.

console.log(personalMovieDB)