// class User {
//     constructor(name) {
//         this.fullName = name;
//     }
//     getName() {
//         console.log(this.fullName);
//     }
// }
// class Profile extends User {
//     constructor(fullName) {
//         super(fullName);
//     }
// }

// try {
//     prompt(1);
// } catch (error) {
//     console.log(error);
// }


// const hello = () => {
//     console.log("Hello World");
// }

// setTimeout(hello, 10000)


// const asycFunction = () => {
//     return new Promise((res, rej,) => {
//         setTimeout(() => {
//             res("Success")
//         }, 3000);
//     });
// }

// const promise = asycFunction();

// promise.then((res) => {
//     console.log("then", res);
// })
// promise.catch((err) => {
//     console.log("error", err);
// })

// async function hello() {
//     console.log("Hello World");
// }

// hello().then((res) => {
//     console.log(res);
// })

// (function () {
//     console.log("Hello World ");
// })();

// let button = document.querySelector("button")
// button.addEventListener("click", () => {
//     const data = {
//         name: "NO Doe",
//         email: "johndoe@example.com"
//     };
//     fetch("https://caeb55bbec163e56f629.free.beeceptor.com/api/users/7bfe5b01649bb1a80f45", {
//         method: 'DELETE',
//         headers: {
//             "Content-Type": "application/json",
//         },
//         // body: JSON.stringify(data),
//     })
//         .then((response) => {
//             if (!response.ok) {
//                 throw new Error(`HTTP error! Status: ${response.status}`);
//             }
//             return response.json();
//         })
//         .then((data) => {
//             console.log("Success=============>", data);
//         })
//     // .catch((err) => {
//     //     console.log("Failure=============>", err);
//     // })
// });
import { countryList } from "./codes.js";

let fromInput = document.getElementById("from-input");
let toInput = document.getElementById("to-input");

const selectField = document.querySelectorAll("select");

const convertButton = document.querySelector("button");

const image = document.querySelectorAll("img");

let getSelectecValueFrom = "";
let getSelectecValueTo = "";

Object.entries(countryList).forEach(([code, name]) => {
    const option = document.createElement("option");
    option.value = name;
    option.textContent = code;
    selectField[0].appendChild(option);
});

selectField[0].addEventListener("change", () => {
    getSelectecValueFrom = selectField[0].options[selectField[0].selectedIndex].textContent;
    const getSelectecValue = selectField[0].value;
    console.log(getSelectecValue);
    image[0].setAttribute("src", `https://flagsapi.com/${getSelectecValue}/shiny/32.png`)
});
Object.entries(countryList).forEach(([code, name]) => {
    const option = document.createElement("option");
    option.value = name;
    option.textContent = code;
    selectField[1].appendChild(option);
});

selectField[1].addEventListener("change", () => {
    getSelectecValueTo = selectField[1].options[selectField[1].selectedIndex].textContent;
    const getSelectecValue = selectField[1].value;
    console.log(getSelectecValue);
    image[1].setAttribute("src", `https://flagsapi.com/${getSelectecValue}/shiny/32.png`)
});

convertButton.addEventListener("click", async (event) => {
    event.preventDefault();
    if (!getSelectecValueFrom || !getSelectecValueTo) {
        console.error("Please select both currencies.");
        return;
    }
    console.log("==================>", getSelectecValueFrom);
    console.log("==================>", getSelectecValueTo);
    const converterURL = `https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_H6GUNTBxq9F8l371DOSAKIgazhqeIzlM7TjYndvT&currencies=${getSelectecValueTo}&base_currency=${getSelectecValueFrom}`
    await fetch(converterURL)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Error status:${response.status}`)
            }
            return response.json()
        })
        .then((data) => {
            toInput.value = (fromInput.value * data.data[dataKey[0]]).toFixed(2);
        })
        .catch((error) => {
            console.log(error);
        })
})
