const {
  doubleAll,
  absoluteValues,
  yelledGreetings,
  changeToInitials,
  doubleOdd,
  upperCaseFirstLetters,
  add1ToLeft,
} = require('./main.js')


describe('doubleAll', () => {
  it(`doubles all numbers passed in`, () => {
    const originalNumbers1 = [1, 2, 3, 4];
    const numbers1 = [1, 2, 3, 4];
    const originalNumbers2 = [-5, 101, 0, 32.5];
    const numbers2 = [-5, 101, 0, 32.5];
    expect(doubleAll(numbers1)).toEqual([2, 4, 6, 8]);
    expect(doubleAll(numbers2)).toEqual([-10, 202, 0, 65]);
    expect(numbers1).toEqual(originalNumbers1);
    expect(numbers2).toEqual(originalNumbers2);
  })

  it(`doesn't modify the original array`, () => {
    const originalNumbers1 = [1, 2, 3, 4];
    const numbers1 = [1, 2, 3, 4];
    const originalNumbers2 = [-5, 101, 0, 32.5];
    const numbers2 = [-5, 101, 0, 32.5];
    doubleAll(numbers1)
    doubleAll(numbers2)
    expect(numbers1).toEqual(originalNumbers1);
    expect(numbers2).toEqual(originalNumbers2);
  })
})

describe('absoluteValues', () => {
  it(`returns numbers unchanged if they're positive`, () => {
    expect(absoluteValues([1, 3, 1000])).toEqual([1, 3, 1000]);
    expect(absoluteValues([1, 5, 100])).toEqual([1, 5, 100]);
  })
  
  it(`returns positive versions of negative numbers`, () => {
    expect(absoluteValues([-1, -3, 1000])).toEqual([1, 3, 1000]);
    expect(absoluteValues([1, -5, 100])).toEqual([1, 5, 100]);
  })

  it(`can handle zeroes`, () => {
    expect(absoluteValues([0, 0, 0])).toEqual([0, 0, 0]);
    expect(absoluteValues([0])).toEqual([0]);
  })

  it(`doesn't modify the original array`, () => {
    const originalNumbers = [-1, -3, 1000];
    const numbers = [-1, -3, 1000];
    absoluteValues(numbers)
    expect(numbers).toEqual(originalNumbers);
  })
})

describe('yelledGreetings', () => {
  it(`adds an exclamation point to the end of each string`, () => {
    expect(yelledGreetings(['hello', 'there', 'you absolute fiend'])).toEqual(['hello!', 'there!', 'you absolute fiend!']);
    expect(yelledGreetings(['hey', 'you'])).toEqual(['hey!', 'you!']);
  })

  it(`doesn't modify the original array`, () => {
    const originalGreetings = ['hello', 'there', 'you absolute fiend'];
    const greetings = ['hello', 'there', 'you absolute fiend'];
    absoluteValues(greetings)
    expect(greetings).toEqual(originalGreetings);
  })
})

describe('changeToInitials', () => {
  it(`will return the first letters from each word`, () => {
    expect(changeToInitials(['Colin Jaffe', 'Mesuara Kaleziq'])).toEqual(['CJ', 'MK'])
    expect(changeToInitials(['Larry Bird', 'Robert Parrish'])).toEqual(['LB', 'RP'])
  })

  it(`doesn't modify the original array`, () => {
    const originalNumbers = [-1, -3, 1000];
    const numbers = [-1, -3, 1000];
    absoluteValues(numbers)
    expect(numbers).toEqual(originalNumbers);
  })
})

describe('doubleOdd', () => {
  it(`doubles all odd numbers passed in`, () => {
    expect(doubleOdd([1, 2, 3, 4, 101, 0, 32.5])).toEqual([2, 2, 6, 4, 202, 0, 32.5]);
  })
  
  it(`can handle negative numbers`, () => {
    expect(doubleOdd([-5, -1, -100, -2])).toEqual([-10, -2, -100, -2]);
  })
})

describe('upperCaseFirstLetters', () => {
  it(`uppercases the first letter of each name (as a string) in the given array`, () => {
    expect(upperCaseFirstLetters(['colin', 'mesuara', 'genghis', 'pak', 'ginny', 'michael', 'tenzin'])).toEqual(['Colin', 'Mesuara', 'Genghis', 'Pak', 'Ginny', 'Michael', 'Tenzin'])
  })

  it(`lowercases the other letters of each name`, () => {
    expect(upperCaseFirstLetters(['cOlin', 'geNghis', 'mesUara', 'ginny', 'michael', 'pak', 'tenzin'])).toEqual(['Colin', 'Genghis', 'Mesuara', 'Ginny', 'Michael', 'Pak', 'Tenzin'])
  })
})

describe('add1ToLeft', () => {
  it(`adds a 1 on the left side of positive numbers`, () => {
    expect(add1ToLeft([1, 2, 30, 400])).toEqual([11, 12, 130, 1400])
  })

  it(`can handle negative numbers`, () => {
    expect(add1ToLeft([-1, -50])).toEqual([-11, -150])
  })
})
