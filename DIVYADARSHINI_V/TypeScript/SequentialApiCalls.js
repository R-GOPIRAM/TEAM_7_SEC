"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function makeApiCall(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
    }
    return await response.json();
}
async function executeApiCalls() {
    try {
        console.log("Starting API call 1...");
        const result1 = await makeApiCall("https://jsonplaceholder.typicode.com/posts/1");
        console.log("API call 1 completed.");
        console.log("Starting API call 2...");
        const result2 = await makeApiCall("https://jsonplaceholder.typicode.com/posts/2");
        console.log("API call 2 completed.");
        console.log("Starting API call 3...");
        const result3 = await makeApiCall("https://jsonplaceholder.typicode.com/posts/3");
        console.log("API call 3 completed.");
        console.log("\nResults:");
        console.log("Result 1:", result1);
        console.log("Result 2:", result2);
        console.log("Result 3:", result3);
    }
    catch (error) {
        console.log("An error occurred:", error);
    }
}
executeApiCalls();
//# sourceMappingURL=SequentialApiCalls.js.map