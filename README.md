1. var vs let vs const

var → Function-scoped, can be re-declared and updated.

let → Block-scoped, cannot be re-declared in the same block but can be updated.

const → Block-scoped, cannot be re-declared or updated (value fixed after assignment).

2️. map() vs forEach() vs filter()

map() → Loops and returns a new array with changed/processed items.

forEach() → Loops but returns nothing, just runs a function on each item.

filter() → Loops and returns a new array with items that pass a condition.

3️. Arrow Functions

A shorter way to write functions using =>.
const add = (a, b) => a + b;

4️. Destructuring Assignment

Easily take values from arrays or objects into variables.
const [x, y] = [10, 20];    
const {name, age} = person;   


5.Template Literals

Strings written with backticks (`) allowing:

${ } to insert variables

Multi-line text without \n
also need it for dynamic text too
Example:
`Hi this is ${user}, there is ${count} E-mail`
