async function getPosts() {
    const endpoint = 'https://blog-fe-batch5.neuversity.id/blog-fe-batch5/wp-json/wp/v2/posts';
    const res = await fetch(endpoint);
    const data = await res.json();
    return data;
}

export { getPosts } 