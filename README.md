# ALAB 308A.3.1 - Promises and async/await

This project demonstrates the use of **JavaScript Promises** and **async/await** to handle asynchronous operations such as fetching user data from multiple simulated databases.

## 🧠 Objective

Build a function called `getUserData(id)` that:
- Uses `async/await` to fetch data from multiple fake databases.
- Returns a single object that combines a user's personal and basic information.
- Handles errors for invalid input.
- Runs database requests in parallel using `Promise.all()` to improve performance.

## 🗃️ Data Sources

The following async functions are imported from `databases.js`:

- `central(id)` → Returns the name of the database where user data is stored (`db1`, `db2`, or `db3`).
- `db1(id)`, `db2(id)`, `db3(id)` → Return basic user info: `username`, `website`, and `company`.
- `vault(id)` → Returns personal user info: `name`, `email`, `address`, and `phone`.

## ✅ Example Output

```js
{
  id: 3,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: { ... },
  phone: "1-770-736-8031",
  website: "hildegard.org",
  company: { ... }
}
