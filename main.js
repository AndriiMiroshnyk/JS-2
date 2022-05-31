"use strict";

//№1
function countOccurrences(str, substr) {
    function repeatedLetters(substr) {
        for (let i = 0; i < substr.length; i++) {
            if (substr.indexOf(substr[i]) !== substr.lastIndexOf(substr[i])) {
              return false;
            }
        }
        return true;
    }
    function stringHasNumber(str) {
        return /\d/.test(str);
    }
    function subStringHasNumber(substr) {
        return /\d/.test(substr);
    }
    if (str === str.toLowerCase() && substr === substr.toLowerCase() && repeatedLetters(substr) && !stringHasNumber(str) && !subStringHasNumber(substr)) {
        let cnt = 0;
        let position = -1;
        while ((position = str.indexOf(substr, position + 1)) != -1) {
            cnt += 1;
        }
        console.log(cnt);
    }
    else {
        console.log("Enter the right string and substring");
    }
}

countOccurrences("azyxxzyzy", "zy"); //3
countOccurrences("ababagalamaga", "ab"); //2

//№2
function storage() {
    let person = {
        name: "",
        age: "",
        set setName(value) {
            this.name = value;
        },
        set setAge(value) {
            this.age = value;
        },
        get getName() {
            return this.name; 
        },
        get getAge() {
            return this.age; 
        },
    };
    return {
        setValue(key, value) {
            person[key] = value;
        },
        getValue(key) {
            console.log(person[key]);
        }
    }
}

const propsStorage = storage();
propsStorage.setValue('name', 'Peter');
propsStorage.setValue('age', 30);
propsStorage.getValue('name'); // Peter
propsStorage.getValue('age'); // 30
propsStorage.setValue('age', 31);
propsStorage.getValue('age'); // 31
propsStorage.getValue('occupation'); // undefined

//№3
function toDigitArray(N) {
    if (isNaN(N)) {
        console.log("Please enter the number!");
    }
    else if (N < 1) {
        console.log("Please enter the natural number!");
    }
    else {
        let unsortedDigitArray = Array.from(String(N), Number);
        let reversedArray = unsortedDigitArray.reverse();
        console.log(reversedArray);
    }
}

toDigitArray(46156); //[6, 5, 1, 6, 4]

//№4
function calculateRoundedRating(rating) {
    if (typeof rating !=='number') {
        console.log("Please enter the number!");
    }
    else if (rating < 1 || rating > 5) {
        console.log("Rating should be in the range [1, 5]!");
    }
    else {
        console.log(`Rating is: ${Math.round(rating*2)/2}`);
    }
}   

calculateRoundedRating(3.666); // 3.5
calculateRoundedRating(1.92); // 2
calculateRoundedRating(4.299999); // 4.5
calculateRoundedRating(1.2499999); // 1
calculateRoundedRating(-1.2499999); //Rating should be in the range [1, 5]!
calculateRoundedRating(13.2499999); //Rating should be in the range [1, 5]!
calculateRoundedRating("2.2399999"); //Please enter the number!

//№5
function countWords(text) {
    let cleanText = text.replace(/\s+/g, ' ').trim();
    let textArray = cleanText.split(' ');
    console.log(`Number of words: ${textArray.length}`);
}

countWords('   You  area programmer '); //3
countWords('      You  are     a   programmer   student    '); //5

//№6
function extractYears(text) {
    let yearsStrArray = text.match(/\d+/g);
    let yearsNumArray = yearsStrArray.map(str => {
        return Number(str);
    })
    let filteredNumArray = yearsNumArray.filter(num => num >= 1900 && num <= 2099);
    console.log(filteredNumArray);
}

extractYears('Usually people who were born in 1995 can find they first job not later than in 2020 but also not earlier than in 2012. Number 11999 is not included in the result because it\'s too big. It is out of range between 1900 and 2099.');
//[1995, 2020, 2012, 1900, 2099]
