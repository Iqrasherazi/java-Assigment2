//Question#1
function reverseArray(arr) {
    return arr.slice().reverse();
}

const smallArray = [1, 2, 3, 4, 5];
const reversedSmallArray = reverseArray(smallArray);
console.log("Reversed small array:", reversedSmallArray);

//Question#2
function filterOutNegativeNumbers(arr) {
    return arr.filter(num => num >= 0);
}

// Test with an array containing both negative and positive numbers
const mixedArray = [1, -2, 3, -4, 5, -6];
const filteredArray = filterOutNegativeNumbers(mixedArray);
console.log("Filtered array:", filteredArray); // Output: [1, 3, 5]

// Test with an array containing only negative numbers
const negativeArray = [-1, -2, -3, -4, -5];
const filteredNegativeArray = filterOutNegativeNumbers(negativeArray);
console.log("Filtered array with only negatives:", filteredNegativeArray); // Output: []

// Test with an array containing only positive numbers
const positiveArray = [1, 2, 3, 4, 5];
const filteredPositiveArray = filterOutNegativeNumbers(positiveArray);
console.log("Filtered array with only positives:", filteredPositiveArray); // Output: [1, 2, 3, 4, 5]

//Question#3
function countVowels(str) {
    // Define a set of vowels (both lowercase and uppercase)
    const vowels = 'aeiouAEIOU';
    // Initialize a count variable
    let count = 0;
    
    // Loop through each character in the string
    for (let char of str) {
        // Check if the character is a vowel
        if (vowels.includes(char)) {
            count++;
        }
    }
    
    return count;
}

// Test with various strings

const testString1 = "Hello, World!";
console.log("Number of vowels in '" + testString1 + "':", countVowels(testString1)); // Output: 3

const testString2 = "Rhythms";
console.log("Number of vowels in '" + testString2 + "':", countVowels(testString2)); // Output: 0

const testString3 = "AEIOUaeiou";
console.log("Number of vowels in '" + testString3 + "':", countVowels(testString3)); // Output: 10


//Question#4

function isPalindrome(str) {
    // Normalize the string by removing non-alphanumeric characters and converting to lowercase
    const normalizedStr = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
    
    // Reverse the normalized string
    const reversedStr = normalizedStr.split('').reverse().join('');
    
    // Compare the normalized string with the reversed string
    return normalizedStr === reversedStr;
}

// Test the function with different strings
console.log(isPalindrome("kayak")); // true
console.log(isPalindrome("mom"));   // true
console.log(isPalindrome("radar")); // true
console.log(isPalindrome("refer")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("A man, a plan, a canal, Panama")); // true


//Question#5


function isInRange(val1, val2) {
    // Check if either value falls within the range 50 to 99 (inclusive)
    return (val1 >= 50 && val1 <= 99) || (val2 >= 50 && val2 <= 99);
}

// Test cases
console.log(isInRange(45, 55)); // true, because 55 is in the range
console.log(isInRange(30, 45)); // false, neither value is in the range
console.log(isInRange(75, 100)); // true, because 75 is in the range
console.log(isInRange(50, 99)); // true, both values are exactly on the boundary
console.log(isInRange(49, 100)); // false, neither value is in the range


//Question#6

function getMinValue(array, mapFunction) {
    // Map each element of the array using the provided mapFunction
    const mappedArray = array.map(mapFunction);
    
    // Find the minimum value in the mapped array
    const minValue = Math.min(...mappedArray);
    
    return minValue;
}

// Example usage
const array = [1, 2, 3, 4, 5];

// Define a function to map each element (e.g., square the value)
const mapFunction = x => x * x;

// Get the minimum value after mapping
const result = getMinValue(array, mapFunction);

console.log(result); // Output: 1, because the mapped array is [1, 4, 9, 16, 25] and the minimum value is 1


//question 7
function repeatLastThreeChars(originalString) {
    // Ensure the original string is at least 3 characters long
    if (originalString.length < 3) {
        throw new Error("The string length must be 3 or more characters.");
    }

    // Extract the last 3 characters of the string
    const lastThreeChars = originalString.slice(-3);
    
    // Create the new string by repeating the last 3 characters 4 times
    const updatedString = lastThreeChars.repeat(4);

    return updatedString;
}

// Test the function with different strings
console.log(repeatLastThreeChars("JavaScript")); // Expected output: "iptiptiptipt"
console.log(repeatLastThreeChars("hello"));      // Expected output: "llo llollo llollo llollo"
console.log(repeatLastThreeChars("world"));      // Expected output: "rldrldrldrld"


//Question 8

function classifyAngle(angle) {
    // Ensure the angle is within a valid range
    if (angle < 0 || angle > 180) {
        return "Invalid angle. The angle must be between 0 and 180 degrees.";
    }

    // Classify the angle
    if (angle === 90) {
        return "Right angle";
    } else if (angle === 180) {
        return "Straight angle";
    } else if (angle > 90 && angle < 180) {
        return "Obtuse angle";
    } else if (angle > 0 && angle < 90) {
        return "Acute angle";
    } else if (angle === 0) {
        return "No angle";
    }
}

// Test the function with different angles
console.log(classifyAngle(45));    // Expected output: "Acute angle"
console.log(classifyAngle(90));    // Expected output: "Right angle"
console.log(classifyAngle(120));   // Expected output: "Obtuse angle"
console.log(classifyAngle(180));   // Expected output: "Straight angle"
console.log(classifyAngle(200));   // Expected output: "Invalid angle. The angle must be between 0 and 180 degrees."
console.log(classifyAngle(-10));   // Expected output: "Invalid angle. The angle must be between 0 and 180 degrees."

//question 9

function smallestRoundNumber(value) {
    // Convert the value to an integer (in case a non-integer is passed)
    value = Math.ceil(value);

    // If the value is already a round number, return it
    if (value % 10 === 0) {
        return value;
    }

    // Calculate the smallest round number greater than or equal to the given value
    // by rounding up to the next multiple of 10
    return Math.ceil(value / 10) * 10;
}

// Test the function with different values
console.log(smallestRoundNumber(45));    // Expected output: 50
console.log(smallestRoundNumber(120));   // Expected output: 120
console.log(smallestRoundNumber(592));   // Expected output: 600
console.log(smallestRoundNumber(1000));  // Expected output: 1000
console.log(smallestRoundNumber(0));     // Expected output: 0
console.log(smallestRoundNumber(-5));    // Expected output: 0

//Question 10
function findIndex(arr, target) {
    // Loop through the array
    for (let i = 0; i < arr.length; i++) {
        // Check if the current element matches the target item
        if (arr[i] === target) {
            // Return the index if a match is found
            return i;
        }
    }
    
    // Return -1 if the target item is not found in the array
    return -1;
}

// Test the function with different arrays and target values
console.log(findIndex([10, 20, 30, 40, 50], 30)); // Expected output: 2
console.log(findIndex(['apple', 'banana', 'cherry'], 'banana')); // Expected output: 1
console.log(findIndex([1, 2, 3, 4, 5], 6)); // Expected output: -1
console.log(findIndex([true, false, true], false)); // Expected output: 1
console.log(findIndex([], 1)); // Expected output: -1
