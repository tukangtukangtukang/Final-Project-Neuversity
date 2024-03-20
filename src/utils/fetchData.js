async function getPosts() {
    // Mengambil data dari endpoint
    const endpoint = 'https://blog-fe-batch5.neuversity.id/blog-fe-batch5/wp-json/wp/v2/posts?author=11';
    // Mengambil data dari endpoint
    const res = await fetch(endpoint);
    // Mengambil data dari respons
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
    // get token from local storage
    const token = localStorage.getItem('token');
    
    // if token is not found, return false
    if (!token) {
        return false;
    }

    // validate token
    const endpoint = 'https://blog-fe-batch5.neuversity.id/blog-fe-batch5/wp-json/jwt-auth/v1/token/validate';
    // minta token ke server
    const res = await fetch(endpoint, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    // jika token tidak valid, return false
    if (!res.ok) {
        return false;
    }
    return true;
}

export { getPosts, getPost, checkAuth } 