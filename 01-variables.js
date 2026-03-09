Console.log( " javascript notes");


Foundations of Variables
// What is a variable?  
// A named container that stores data for later use.
// Declaration keywords:
// var → function‑scoped, older style.
// let → block‑scoped, modern style.
// const → block‑scoped, cannot be reassigned.
// Naming rules:
// Start with a letter, _, or $.
// Cannot use reserved words like for, if, etc.

// Data types:
// Primitive: string, number, boolean, null, undefined, symbol, bigint.
// Non‑primitive: object, array, function.
// SIMPLE EXAMPLE IS ...
let name = "Alice";
const age = 25;
var isStudent = true;



///////     this  [ 3 to 26 ] is taken from Chai aur code   ///////// 
const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

//const variable imp points
// cannot be reassigned
// cannot be redeclared
// must be initialized at the time of declaration
// const variables are block-scoped i.e they are only accessible within the block they are declared in*/
/*const variables cannot be hoisted;
    hoisted variables are those that are declared with var keyword and can be accessed before they are declared in the code */

// const varibles are immutable (cannot be changed after assignment0)
// const variables are used to store vlaues that shold not be changed throughtout the program

// example of cosnt variable are pi, ravity, speed of light , etc
// hoisted variables are those that are declared with var keyword and can be accessed before they are declared in the code 


Introduction to Scope
// Scope types:
// Global → accessible everywhere.
// Function → accessible only inside functions.
// Block → accessible inside {} when using let or const.

1)  Global Scope:
// Variables declared outside any function or block.
// Accessible everywhere in the program.
// Risk: pollutes the global namespace.

// example 1 of global scope 
let globalVar = "I am global!";
console.log(globalVar); // Accessible anywhere



2)  Function Scope:
// Variables declared with var inside a function are only accessible within that function.
// example 1 of Function scope 
function greet() {
  var message = "Hello!";
  console.log(message); // Accessible here
}
// console.log(message); // Error: not defined



3) Block Scope:

// Variables declared with let or const inside {} are only accessible within that block.
// example 1 of Block scope
if (true) {
  let blockVar = "Inside block";
  console.log(blockVar); // Works
}
// console.log(blockVar); // Error


%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
Intermediate Level: Hoisting , Shadowing AND Reassignment & Mutability

Intermediate Level: Hoisting & Shadowing
Hoisting:
/* var declarations are hoisted (moved to top of scope).
var is hoisted and initialized as undefined. */
/*let and const are hoisted but remain in the Temporal Dead Zone until initialized. 
 let and const are hoisted but not initialized (Temporal Dead Zone).*/
function test() {
  console.log(a); // undefined (hoisted)
  var a = 10;

  // console.log(b); // Error (TDZ)
  let b = 20;
}



Shadowing:
// Inner scope variable can override outer scope variable.
// example 1 of Shadowing 
let x = 10;
function test() {
  let x = 20; // Shadows outer x
  console.log(x); // 20
}
test();
console.log(x); // 10


Reassignment & Mutability:
const prevents reassignment but objects/arrays declared with const can still be mutated.


%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%


🔵 Expert Level: Closures & Lexical Scope

// Lexical Scope:
// Functions can access variables from their parent scope.

// Closures:
// Inner functions “remember” variables from outer functions even after execution.

//EXAMPLE OF CLOSURES//
function makeCounter() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}
const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2

🟣 Super-Expert Level: Execution Context & Memory

// Execution Context:
// Each function call creates a new execution context with its own scope chain.
// Scope Chain:
// JavaScript resolves variables by looking outward through nested scopes until it finds a match.
  
// Best Practices:
// Minimize global variables.
// Use closures for encapsulation.
// Understand how garbage collection frees unused variables.

👉 Example (Module Pattern with Scope Isolation):
const BankAccount = (function() {
  let balance = 0; // private variable

  function deposit(amount) {
    balance += amount;
  }

  function withdraw(amount) {
    if (amount <= balance) balance -= amount;
  }

  function getBalance() {
    return balance;
  }

  return { deposit, withdraw, getBalance };
})();

BankAccount.deposit(100);
console.log(BankAccount.getBalance()); // 100


%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
                    🛠️ Projects
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

      **********  1. Simple Project (Beginner)  ************

Scope Demonstrator
Create a script that declares variables in global, function, and block scope.
Print them to show which are accessible and which throw errors.

//...Code....//
let globalVar = "Global";

function showScope() {
  var functionVar = "Function";
  if (true) {
    let blockVar = "Block";
    console.log(globalVar);   // Accessible
    console.log(functionVar); // Accessible
    console.log(blockVar);    // Accessible
  }
  // console.log(blockVar); // Error
}
showScope();



 **********  2. Complex Project (Intermediate → Super-Expert)  ************
                   ******  Quiz App with Scope Control*****


Use global scope for app configuration.
Use function scope for quiz logic.
Use block scope for temporary variables inside loops.
Demonstrate closures for tracking score privately.

//...JS..Code....//
const QuizApp = (function() {
  let score = 0; // private variable

  const questions = [
    { q: "What is 2+2?", a: 4 },
    { q: "Capital of France?", a: "Paris" }
  ];

  function askQuestion(index) {
    let userAnswer = prompt(questions[index].q);
    if (userAnswer == questions[index].a) {
      score++;
    }
  }

  function startQuiz() {
    for (let i = 0; i < questions.length; i++) {
      askQuestion(i);
    }
    alert(`Your score is ${score}/${questions.length}`);
  }

  return { startQuiz };
})();

QuizApp.startQuiz


 **********2. Complex Project (Intermediate → Super‑Expert)  ************
             *********3. Todo List Manager*********


Use variables and arrays to store tasks.

Allow adding, removing, and marking tasks complete.

Demonstrate closures for private state.

javascript
const TodoApp = (function() {
  let todos = [];

  function addTask(task) {
    todos.push({ task, completed: false });
  }

  function completeTask(index) {
    if (todos[index]) todos[index].completed = true;
  }

  function removeTask(index) {
    todos.splice(index, 1);
  }

  function listTasks() {
    return todos.map((t, i) => `${i+1}. ${t.task} - ${t.completed ? "Done" : "Pending"}`);
  }

  return { addTask, completeTask, removeTask, listTasks };
})();

TodoApp.addTask("Learn JavaScript Variables");
TodoApp.addTask("Build Todo App");
TodoApp.completeTask(0);
console.log(TodoApp.listTasks());














