/**
 * Generates posts for the post element
 * @param {posts} postsArray 
 */
const generatePosts = (postsArray) => {
    postsArray.forEach(post => {
        $('#posts').append(generatePost(post.data));
    });
    handlePostEventListener();
}

/**
 * Generates a post element
 * @param post 
 */
const generatePost = (post) => {
    if (post.thumbnail === "self") return "";
    const postElement = `
    <div class="col-6 col-md-4 col-lg-3 col-xl-2 pb-2 pt-4 card-wrapper">
        <a href="https://reddit.com${post.permalink}" target="_blank">
            <div class="card">
                <img class="card-img-top" src="${post.thumbnail}" alt="">
                <div class="card-body">
                    <h5 class="card-title">${post.title}</h5>
                </div>
            </div>
        </a>
    </div>`;
    return postElement;
}

/**
 * Unregisters and registers a new event listener for card-wrapper
 */
const handlePostEventListener = () => {
    $(".card-wrapper").off()
    $(".card-wrapper").on('mouseenter mouseleave', function(e) {
        if (e.type === 'mouseenter') {
          $(this).animate({
            opacity: 0.25,
            padding: "+=10"
          }, 100)
        } else {
            $(this).animate({
                opacity: 1,
                padding: "-=10"
            }, 100)
        }
    });
};