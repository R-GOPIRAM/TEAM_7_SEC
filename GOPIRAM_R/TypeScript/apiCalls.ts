async function fetchData() {
    const [users, posts, comments] = await Promise.all([
        fetch("https://jsonplaceholder.typicode.com/users"),
        fetch("https://jsonplaceholder.typicode.com/posts"),
        fetch("https://jsonplaceholder.typicode.com/comments")
    ]);

    const userData = await users.json();
    const postData = await posts.json();
    const commentData = await comments.json();

    console.log(userData);
    console.log(postData);
    console.log(commentData);
}

fetchData();