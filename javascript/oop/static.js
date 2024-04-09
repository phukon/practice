class Speak {
  /**
   * species is a static property of the class Speak, not of individual instances like mouth1 or mouth2.
   * so mouth1.species or mouth2.species won't work
   */
  static species = 'Homo Sapien';
  #note = 'this is a private note';

  lol() {
    console.log('hello');
  }

  displaySpecies() {
    console.log(Speak.species); // not using the `this` keyword, instead using the class name
  }

  addPrivateNote(privateNote) {
    this.#note = privateNote;
  }

  speakPrivateNote() {
    console.log(this.#note);
  }
}

let mouth1 = new Speak();
let mouth2 = new Speak();

mouth1.lol();
mouth1.addPrivateNote("I'm Batman!");
mouth1.speakPrivateNote();
mouth1.displaySpecies();

console.log(); // to add a new line

mouth2.lol();
mouth2.addPrivateNote("I'm Spiderman!");
mouth2.speakPrivateNote();
mouth2.displaySpecies();
