//Array to store objects in
let persons = [];

class Person {
  constructor(fName, lName, age, legal) {
    //Initiates the class attributes
    this.fName = fName;
    this.lName = lName;
    this.age = age;
    this.fullName = fName + ' ' + lName;

    //Checks if object is legal or not
    if (age >= 18) this.legal = true;
    else this.legal = false;
  }

  //toString method that returns info about the object as a String
  toString() {
    //Returns attribute values with string text
    return (
      this.fullName +
      ' är ' +
      this.age +
      ' år gammal. Är personen myndig?: ' +
      this.legal
    );
  }

  birthday() {
    //Adds a year when the object has had a birthday.
    this.age++;

    //Checks if age is below or under 18, legal
    if (this.age >= 18) {
      this.legal = true;
    }
  }
  //Function to check that object doesn't greet itself
  greetings(otherPerson) {
    //Checks to see if otherPerson is same as current object
    if (otherPerson == this) return '';
    //Returns a greeting between both objects
    return 'Yoo på dig ' + otherPerson.fName + '! Jag är ' + this.fName;
  }

}

//Creates Superhero class, child class of Person class
class Superhero extends Person {
  constructor(fName, lName, age, legal, superName) {
    //Calls constructor in parent class Person
    super(fName, lName, age, legal);

    //Initiates attribute superhero name
    this.superName = document.getElementById('superName').value;
  }

  //Returns a String with all attributes
  toString() {
    return (
      'Superhjälten ' +
      this.superName +
      ' heter även ' +
      this.fullName +
      ' och är ' +
      this.age +
      ' år gammal. Är personen myndig?: ' + this.legal
    );
  }
  //Function to return the superhero name
  heroName() {
    return this.superName;
  }

  //Function to display message that the heroes are flying
  fly() {
    return 'Superhjälten ' + this.superName + ' flyyyyger!<br>';
  }
}

//Function to create new object of Person class att click of btn
btn.addEventListener('click', function newPerson() {
  //Collects values entered into input fields
  let fName = document.getElementById('fName').value;
  let lName = document.getElementById('lName').value;
  let age = document.getElementById('age').value;
  let superName = document.getElementById('superName').value;

  //checks that Person isn't a superhero before creating new object
  if (
    superName == '' &&
    fName != '' &&
    lName != '' &&
    age != '' &&
    checkbox.checked == false
  ) {
    //New object from Person class is created and saved into an array
    persons.push(new Person(fName, lName, age));

    //Displays person object is saved
    console.log('Du har sparat en person');
    output.innerHTML = 'Du har sparat en person! <br>' + toString();
  } else {
    return;
  }
  displayObjects();
});

//Function to create new object of Superhero class at click of btn
btn.addEventListener('click', function newSuperhero() {
  //Collects values entered into input fields
  let fName = document.getElementById('fName').value;
  let lName = document.getElementById('lName').value;
  let age = document.getElementById('age').value;
  let superName = document.getElementById('superName').value;
  let checkbox = document.getElementById('checkbox');

  //Checks if superName is entered before creating superhero object
  if (superName != '' && fName != '' && lName != '' && age != '' && checkbox.checked == true) {
    //New object from superhero class is created and saved into the array
    persons.push(new Superhero(fName, lName, age, superName));

    //Returns information about the class Superhero object
    output.innerHTML =
      'Du har sparat superhjälten ' +
      superName +
      '! <br>Den heter även ' +
      fName +
      ' ' +
      lName +
      ' och är ' +
      age +
      ' gammal.';
    console.log('Du har sparat en superhjälte!');
  }
});

//Function to validate that fname, lname and age has been entered
btn.addEventListener('click', function validate() {
  let fName = document.getElementById('fName').value;
  let lName = document.getElementById('lName').value;
  let age = document.getElementById('age').value;

  //Checks that all input fields have been entered
  if (fName == '') {
    output.innerHTML = 'Du måste skriva in ett förnamn.';
    return;
  }
  if (lName == '') {
    output.innerHTML = 'Du måste skriva in ett efternamn.';
    return;
  }
  if (age == '') {
    output.innerHTML = 'Du måste skriva in en ålder';
    return;
  }
});

//Function to display objects of Person class
function displayObjects() {
  //Loop to display information about person object
  for (let i = 0; i < persons.length; i++) {
    output.innerHTML = '';
    output.innerHTML +=
      'Du har sparat en person!<br>' + persons[i].toString() + '<br>';
  }
}

//Function to make all objects celebrate birthday, and becoma one year older
btnBirthday.addEventListener('click', function bDay() {

  //unneccessary CSS
    let img = document.getElementById('image');
    img.src = 'images/birthday.jpg'

    //Empties output
    output.innerHTML = "";

  //Loops updated birthday age and information for all objects
  persons.forEach((person) => {
    person.birthday();
    document.getElementById('output').innerHTML += person.toString() + '<br>';
  });
});

//Function to make all saved objects greet each other
btnGreet.addEventListener('click', function greet() { 
    //unneccessary CSS
    let img = document.getElementById('image');
    img.src = 'images/fistbump.jpg'

    //Empties output
    output.innerHTML = "";

    //Loops greetings between current object and other saved objects
    persons.forEach((person) => {
        persons.forEach((otherPerson) => {
            document.getElementById('output').innerHTML += person.greetings(otherPerson) + '<br>';
        })
    })
})

//Function to make the superheroes fly
btnFly.addEventListener('click', function fly() {
  output.innerHTML = '';

  //Unneccessary CSS
  let img = document.getElementById('image');
  img.src = 'images/superhero.jpg'

    //Loops a display that the heroes are flying
    persons.forEach((hero) => {
        if (hero.constructor.name === 'Superhero') {
            document.getElementById('output').innerHTML += hero.fly();
        }
    });

  });

//Makes the Clean output btn empty the output
btnCleanOutput.addEventListener('click', function cleanOutput() {
  output.innerHTML = '';
});

//Makes the clean input btn empty all input fields
btnCleanInput.addEventListener('click', function cleanInput() {
  document.getElementById('fName').value = '';
  document.getElementById('lName').value = '';
  document.getElementById('age').value = '';
  document.getElementById('superName').value = '';
  document.getElementById('checkbox').checked = false;
});

