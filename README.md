# jQuery Reddit Task!

This solution is made by Sebastian Porling.

## Execution

You can view this project on [porling.me/jquery_reddit](http://porling.me/jquery_reddit/)

## Motivation and Explaination

I use **Material Bootstrap** for the styling. 

The **main.js** adds event listeners and fetches initial data for the page.
It also fetches new posts when we are close to the bottom of the page. This is done with an event listener and lodash for not generating so many requests!

The **posts.js** generates new reddit posts for the index page, it also regenerates the event listener for the posts.

The **fetch.js** handles the api requests for reddit.