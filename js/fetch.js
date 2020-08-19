/**
 * Fetches more posts after the given id
 * @param {*} id 
 */
const fetchMore = async (id) => {
    let res = await fetch(`https://www.reddit.com/r/watches/top.json?limit=40&after=${id}`, {
        method: 'GET'
    })
    let data = await res.json();
    return data;
}

/**
 * Fetches reddits posts from the watches subreddit
 */
const fetchReddit = async () => {
    let res = await fetch('https://www.reddit.com/r/watches/top.json?limit=30', {
        method: 'GET',
    });
    let data = await res.json();
    return data;
};