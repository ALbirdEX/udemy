// lessons 24
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

for (let i = 0; i < 2; i++) {
    const a = prompt('Один из просмотренных фильмов?', ''),
        b = +prompt('На сколько оцениваете его?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;   // записываем свойства в объект
        console.log('done');
    } else {
        console.log('error');
        i--;                            //  если не выполненилось условие выше (if), возвращаемся на одну итерацию выше
    }
}

if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}

console.log(personalMovieDB);

