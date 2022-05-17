// This is how old I am in human years
var myAge = 23;

// This holds the value of the first two years of a dogs life
var earlyYears = 2;

earlyYears = earlyYears * 10.5

// Whats left after the first two early years
var laterYears = earlyYears - 2;

// Number of dog years accounted for by my later years
laterYears = laterYears * 4;

// This is my age in dog years
var myAgeInDogYears = earlyYears + laterYears;

// This is my name in lower case
var myName = 'Luke'.toLowerCase();

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
