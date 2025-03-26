// Importing database functions. DO NOT MODIFY THIS LINE.
import { central, db1, db2, db3, vault } from "./databases.js";


function getUserData(id) {
    const dbs = {
        db1: db1,
        db2: db2,
        db3: db3
    };

}




// JavaScript only allows you to use await inside an async function. Otherwise, you'll get a syntax error.
async function testCentral() {
    const result = await central(5); // central(3) returns a Promise (because it's async and includes a setTimeout inside to simulate delay).
    console.log(result);
}

testCentral();

async function testVault() { // async allows you to use await!

    // why use try and catch? If something goes wrong in the try part 
    // (like the vault rejects or throws an error), it will immediately jump to the catch part 
    // without crashing the whole program
    try {

        const result = await vault(10); // vault(5) is an async function (it returns a Promise).
        //await tells JavaScript: “Pause here. Wait for this Promise to finish. 
        // Then store the result in the result variable.”

        console.log(result);

    } catch (error) { // If anything inside the try block goes wrong, this code runs.



        console.error("Vault failed:", error.message);

    }
}
testVault();

const returnedValue = await vault(2);

console.log(returnedValue)

const returnedValue2 = await db1(1);

console.log(returnedValue2)

const returnedValue3 = await vault(8);

console.log(returnedValue3)
