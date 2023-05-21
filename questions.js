const QUESTIONS = [
    {
      title: "Two states",
      description: "Given an array, return the maximum of the array.",
      testCases: [
        {
          input: "[1,2,3,4,5]",
          output: "5"
        }
      ]
    },
    {
      title: "Sum of Squares",
      description: "Given an array, calculate the sum of the squares of its elements.",
      testCases: [
        {
          input: "[1,2,3]",
          output: "14"
        },
        {
          input: "[0, -1, 2]",
          output: "5"
        }
      ]
    },
    {
      title: "Reverse String",
      description: "Given a string, reverse it and return the reversed string.",
      testCases: [
        {
          input: "'hello'",
          output: "'olleh'"
        },
        {
          input: "'OpenAI'",
          output: "'IAnepeO'"
        }
      ]
    },
    {
      title: "Array Sum",
      description: "Given an array of numbers, calculate the sum of all elements.",
      testCases: [
        {
          input: "[1, 2, 3, 4, 5]",
          output: "15"
        },
        {
          input: "[-1, 0, 1, 2, 3]",
          output: "5"
        }
      ]
    },
    {
      title: "Factorial",
      description: "Given a number n, calculate its factorial.",
      testCases: [
        {
          input: "5",
          output: "120"
        },
        {
          input: "0",
          output: "1"
        }
      ]
    },
    {
      title: "Count Vowels",
      description: "Given a string, count the number of vowels (a, e, i, o, u) in the string.",
      testCases: [
        {
          input: "'Hello World'",
          output: "3"
        },
        {
          input: "'OpenAI ChatGPT'",
          output: "4"
        }
      ]
    },
    {
      title: "Palindrome",
      description: "Given a string, determine if it is a palindrome (reads the same forwards and backwards).",
      testCases: [
        {
          input: "'racecar'",
          output: "true"
        },
        {
          input: "'hello'",
          output: "false"
        }
      ]
    },
    {
      title: "Fibonacci Sequence",
      description: "Generate the Fibonacci sequence up to a given number of terms.",
      testCases: [
        {
          input: "5",
          output: "[0, 1, 1, 2, 3]"
        },
        {
          input: "8",
          output: "[0, 1, 1, 2, 3, 5, 8, 13]"
        }
      ]
    },
    {
      title: "Prime Numbers",
      description: "Find all prime numbers up to a given number.",
      testCases: [
        {
          input: "10",
          output: "[2, 3, 5, 7]"
        },
        {
          input: "20",
          output: "[2, 3, 5, 7, 11, 13, 17, 19]"
        }
      ]
    },
    {
      title: "Unique Elements",
      description: "Remove duplicates from an array and return the unique elements.",
      testCases: [
        {
          input: "[1, 2, 2, 3, 4, 4, 5]",
          output: "[1, 2, 3, 4, 5]"
        },
        {
          input: "[10, 20, 30, 20, 40, 30, 50]",
          output: "[10, 20, 30, 40, 50]"
        }
      ]
    }
  ];

module.exports = QUESTIONS;