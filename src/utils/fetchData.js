async function getPosts() {
    const endpoint = 'https://blog-fe-batch5.neuversity.id/blog-fe-batch5/wp-json/wp/v2/posts?author=11';
    const res = await fetch(endpoint);
    const data = await res.json();
    return data;
}


async function getPost(id) {
    try {
        const endpoint = `https://blog-fe-batch5.neuversity.id/blog-fe-batch5/wp-json/wp/v2/posts/${id}`;
        const res = await fetch(endpoint);
        if (!res.ok) {
            throw new Error("Failed to fetch post");
        }
        const data = await res.json();
        return data;
    } catch (error) {
        console.error("Error fetching post:", error);
    }
}


async function checkAuth(){
    const token = localStorage.getItem('token');
    if (!token) {
        return false;
    }
    const endpoint = 'https://blog-fe-batch5.neuversity.id/blog-fe-batch5/wp-json/jwt-auth/v1/token/validate';
    const res = await fetch(endpoint, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    if (!res.ok) {
        return false;
    }
    return true;
}

export { getPosts, getPost, checkAuth } 