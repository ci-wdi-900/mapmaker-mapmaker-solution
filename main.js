const doubleAll = function(numbers) {
  const doubled = [];

  for (let i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
  }

  return doubled;
}

const yelledGreetings = function(greetings) {
  const yelled = [];

  for (let i = 0; i < greetings.length; i++) {
    yelled.push(greetings[i] + '!')
  }

  return yelled;
}

const absoluteValues = function(numbers) {
  const absolutes = [];

  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i]
    const absolute = number < 0 ? number * -1 : number;
    absolutes.push(absolute);
  }

  return absolutes;
}

const upperCaseFirstLetters = function(names) {
  let uppercasedNames = [];

  for (let i = 0; i < names.length; i++) {
    uppercasedNames.push(names[i][0].toUpperCase() + names[i].slice(1).toLowerCase())
  }

  return uppercasedNames;
}

const changeToInitials = function(names) {
  const initialsList = [];

  for (let i = 0; i < names.length; i++) {
    // Looking for the space version:
    const name = names[i];
    const initial1 = name[0];
    const spaceIndex = name.indexOf(' ');
    const initial2 = name[spaceIndex + 1];

    initialsList.push(initial1 + initial2);


    // alternate one-liner:
    // initialsList.push(names[i][0] + names[i][names[i].indexOf(' ') + 1])

    // Internal for-loop version:
    // const name = names[i];
    // let initials = '';

    // for (let i = 0; i < name.length; i++) {
    //   if (i === 0 || name[i - 1] === ' ') {

  // for (let i = 0; i < names.length; i++) {
  //   uppercasedNames.push(names[i][0].toUpperCase() + names[i].slice(1).toLowerCase())
  // }
  //
  // return uppercasedNames;
  }

  return initialsList;
}

const doubleOdd = function(numbers) {
  const answers = [];

  for (let i = 0; i < numbers.length; i++) {
    // if version
    if (numbers[i] % 2 === 1 || numbers[i] % 2 === -1) {
      answers.push(numbers[i] * 2)
    } else {
      answers.push(numbers[i])
    }

    // if and re-assignment version:
    // let answer = numbers[i];
    // if (answer % 2 === 1 || answer % 2 === -1) {
    //   answer = answer * 2;
    // }
    //
    // answers.push(answer);

    // Math.abs (absolute value) version
    // if (Math.abs(numbers[i]) % 2 === 1) {
    //   answers.push(numbers[i] * 2);
    // } else {
    //   answers.push(numbers[i]);
    // }

    // ternary version
    // const answer = numbers[i] % 2 === 1 || numbers[i] % 2 === -1
    //   ? numbers[i] * 2
    //   : numbers[i];


    // One-line math.abs and ternary version:
    // answers.push(Math.abs(numbers[i] % 2) === 1 ? numbers[i] * 2 : numbers[i])

  } // closes for loop

  return answers;
}

const add1ToLeft = function(numbers) {
  const with1Addeds = [];
  for (let i = 0; i < numbers.length; i++) {
    const stringifiedNumber = numbers[i].toString();
    const stringWith1Added = stringifiedNumber[0] === '-'
      ? '-1' + stringifiedNumber.slice(1)
      : '1' + stringifiedNumber

    with1Addeds.push(Number(stringWith1Added));
  }

  return with1Addeds;
}


if (typeof doubleAll === 'undefined') {
  doubleAll = undefined;
}

if (typeof yelledGreetings === 'undefined') {
  yelledGreetings = undefined;
}

if (typeof absoluteValues === 'undefined') {
  absoluteValues = undefined;
}

if (typeof upperCaseFirstLetters === 'undefined') {
  upperCaseFirstLetters = undefined;
}
if (typeof changeToInitials === 'undefined') {
  changeToInitials = undefined;
}

if (typeof doubleOdd === 'undefined') {
  doubleOdd = undefined;
}

if (typeof add1ToLeft === 'undefined') {
  add1ToLeft = undefined;
}


module.exports = {
  doubleAll,
  yelledGreetings,
  absoluteValues,
  upperCaseFirstLetters,
  changeToInitials,
  doubleOdd,
  add1ToLeft,
}
