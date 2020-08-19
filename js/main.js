let next;

/**
 * Generates posts when DOM is ready
 * And registers event listeners
 */
$(document).ready(() => {
    fetchReddit().then(handleFetch).catch(handleError);
    handlePostEventListener();
    check_if_needs_more_posts();
});

const handleFetch = (data) => {
    next = data.data.after;
    generatePosts(data.data.children);
};

/**
 * Logs error
 * @param {*} error 
 */
const handleError = (error) => {
    console.log(error);
};


/**
 * Checks if we are close to the bottom page
 * and fetches more posts if we are close to the bottom of the page
 */
const check_if_needs_more_posts = () => {
    $(document).on('scroll', _.throttle(() => {
        pixelsFromWindowBottomToBottom = 0 + $(document).height() - $(window).scrollTop() -$(window).height();
        if (pixelsFromWindowBottomToBottom < 400){
            fetchMore(next).then(handleFetch).catch(handleError);
        }
    }, 300));
}