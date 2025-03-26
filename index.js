// Importing database functions. DO NOT MODIFY THIS LINE.
import { central, db1, db2, db3, vault } from "./databases.js";


async function getUserData(id) {

    try { // Starting a try catch block to handle errors more cleanly

        const dbs = { // dbs helps you look up a function by name
            db1: db1,
            db2: db2,
            db3: db3
        };
        const dbName = await central(id); // calling central database with the user id 
        // central(id) tells me which data base the user is in for ex : await central(3) is going to return db1

        // const [personalInfo, basicInfo] = await Promise.all([vault(id), dbs[dbName](id)]);
        const [personalInfo, basicInfo] = await Promise.all([ //promise all awaits for both, they both run at the same time.
            //personalInfo contains the results from the vault and basicInfo holds the result from db1, db2 or db3

            vault(id), // gives us name, email, address and phone

            dbs[dbName](id) // gives us the username, website and company 
        ]);

        return {
            id, // returning the id number of the user
            ...personalInfo, // spreading all the personal info data
            ...basicInfo // spreading all the basic info data
        };
    } catch (error) {
        throw new Error(`Something Isn't Right: ${error.message}`)
    }

}

getUserData(3).then((user) => console.log(user)) // calling the getUserData function returning a promise since its a async function
// .then() waits for the promise returned by getUserData()

//Hey getUserData(3), go do your thing...
//When you're done and have the user data, give it to me here ➝ (user) => console.log(user)




// What is a Promise?

//A Promise is like a placeholder for a value that you’ll get later.

// It represents something that:

// hasn’t happened yet

// will either succeed (resolve)

// or fail (reject)


//Real-Life Analogy

// Imagine ordering food delivery:

// You place an order → that’s the Promise

// While it’s cooking and being delivered → the Promise is pending

// If it shows up → it resolves

// If the delivery fails → it rejects


//What is Promise.all()?

// Promise.all() is a built-in JavaScript method that lets you run 
// multiple promises at the same time and wait until all of them finish.

//Real-Life Analogy

// You're making:

// Rice 🍚 (takes 10 minutes)

// Chicken 🍗 (takes 20 minutes)

// You start both at the same time — and wait until both are done to eat.

// This is Promise.all.




// // Testing stuff out 
// JavaScript only allows you to use await inside an async function. Otherwise, you'll get a syntax error.
// async function testCentral() {
//     const result = await central(5); // central(3) returns a Promise (because it's async and includes a setTimeout inside to simulate delay).
//     console.log(result);
// }

// testCentral();

// async function testVault() { // async allows you to use await!

//     // why use try and catch? If something goes wrong in the try part 
//     // (like the vault rejects or throws an error), it will immediately jump to the catch part 
//     // without crashing the whole program
//     try {

//         const result = await vault(10); // vault(5) is an async function (it returns a Promise).
//         //await tells JavaScript: “Pause here. Wait for this Promise to finish. 
//         // Then store the result in the result variable.”

//         console.log(result);

//     } catch (error) { // If anything inside the try block goes wrong, this code runs.



//         console.error("Vault failed:", error.message);

//     }
// }
// testVault();

// const returnedValue = await vault(2);

// console.log(returnedValue)

// const returnedValue2 = await db1(1);

// console.log(returnedValue2)

// const returnedValue3 = await vault(8);

// console.log(returnedValue3)
