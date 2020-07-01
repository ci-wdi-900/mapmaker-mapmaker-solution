const doubleAll = function(numbers) {
  const doubled = [];
  
  for (let i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
  }
  
  return doubled;
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

const yelledGreetings = function(greetings) {
  const yelled = [];

  for (let i = 0; i < greetings.length; i++) {
    yelled.push(greetings[i] + '!')
  }

  return yelled;
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
    //     initials += name[i];
    //   }
    // }

    // initialsList.push(initials);
  }

  return initialsList;
}

const doubleOdd = function(numbers) {
  const answers = [];

  for (let i = 0; i < numbers.length; i++) {
    // One-line math.abs version:
    answers.push(
      Math.abs(numbers[i] % 2) === 1
        ? numbers[i] * 2
        : numbers[i]
      )

    // Non-abs version:
    // const answer = numbers[i] % 2 === 1 || numbers[i] % 2 === -1
    //   ? numbers[i] * 2
    //   : numbers[i];
  
    // answers.push(answer)

    // if and re-assignment version:
    // let answer = numbers[i];

    // if (answer % 2 === 1 || answer % 2 === -1) {
    //   answer = answer * 2;
    // }

    // answers.push(answer);
  }

  return answers;
}

const upperCaseFirstLetters = function(names) {
  let uppercasedNames = [];

  for (let i = 0; i < names.length; i++) {
    uppercasedNames.push(names[i][0].toUpperCase() + names[i].slice(1).toLowerCase())
  }

  return uppercasedNames;
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


module.exports = {
  doubleAll,
  absoluteValues,
  yelledGreetings,
  changeToInitials,
  doubleOdd,
  upperCaseFirstLetters,
  add1ToLeft,
}
