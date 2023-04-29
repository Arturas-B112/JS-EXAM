/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */

class Movie {
  constructor(title, director, budget) {
    this.title = title;
    this.director = director;
    this.budget = budget;
  }

  wasExpensive() {
    if (!isNaN(this.budget)) {
      if (this.budget > 100000000) {
        console.log(`${this.title} was expensive`);
        return true;
      } else {
        console.log(`${this.title} was not expensive`);
        return false;
      }
    }
  }
}

const spiderman = new Movie(
  'Spider-Man: No Way Home',
  'Kevin Feige',
  200000000
);

spiderman.wasExpensive();
