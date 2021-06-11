"use strict";

let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

console.log(numberOfFilms);

let personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
};

// for (let i = 1; i < 3; i++) {
//         let j = prompt("Один из последних просмотренных фильмов?", "");
//         personalMovieDB.movies[j] = prompt("На сколько оцените его?", "0");
// }

// const a = prompt("Один из последних просмотренных фильмов?", ""),
//       b = prompt("На сколько оцените его?", "0"),
//       c = prompt("Один из последних просмотренных фильмов?", ""),
//       d = prompt("На сколько оцените его?", "0");

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

for (let i = 1; i < 3; i++) {
        let j = prompt("Один из последних просмотренных фильмов?", "");
        if ((j == "") || (j == null) || (j.length > 50)) {
                i--;
                continue;
        } else {
                let z = prompt("На сколько оцените его?", "");
                while ((z == "") || (z == null) || (z.length > 50)) {
                        z = prompt("Неверное значение. На сколько оцените его?", "");
                }
                personalMovieDB.movies[j] = z;
        }   
}

console.log(personalMovieDB);



if (personalMovieDB.count < 10) {
        alert("Просмотрено довольно мало фильмов");
} else if ((personalMovieDB.count >= 10) && (personalMovieDB.count <= 30)) {
        alert("Вы классический зритель");
} else if (personalMovieDB.count > 30) {
        alert("Вы киноман");
} else {
        alert("Произошла ошибка");
}

// решение из видео

// for (let i = 0; i < 2; i++) {
//         const a = prompt("Один из последних просмотренных фильмов?", ""),
//               b = prompt("На сколько оцените его?", "0");

//         if (a != null && b != null && a != '' && b != '' $$ a.length < 50) {
//                 personalMovieDB.movies[a] = b;
//                 console.log('done');
//         } else {
//                 console.log('error');
//                 i--;
//         }
// }

