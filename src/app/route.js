// List of supported routes. Any url other than these routes will throw a 404 error
const routes = {
  '/': '<app-index></app-index>'
  // '/'             : Home
  // , '/about'      : About
  // , '/p/:id'      : PostShow
  // , '/register'   : Register
};

const parseRequestURL = () => {
  let url = location.hash.slice(1).toLowerCase() || '/';;
  let r = url.split('/');
  let request = {
    resource : null,
    id : null,
    verb : null
  };
  request.resource = r[1];
  request.id = r[2];
  request.verb = r[3];

  return request;
}

// The router code. Takes a URL, checks against the list of supported routes and then renders the corresponding content page.
const router = async () => {

  // Lazy load view element:
  // const header = null || document.getElementById('header_container');
  const content = null || document.getElementById('router-outlet');
  // const footer = null || document.getElementById('footer_container');
  
  // Render the Header and footer of the page
  // header.innerHTML = await Navbar.render();
  // await Navbar.after_render();
  // footer.innerHTML = await Bottombar.render();
  // await Bottombar.after_render();


  // Get the parsed URl from the addressbar
  let request = parseRequestURL();

  // Parse the URL and if it has an id part, change it with the string ":id"
  let parsedURL = (request.resource ? '/' + request.resource : '/') + (request.id ? '/:id' : '') + (request.verb ? '/' + request.verb : '');
  
  // Get the page from our hash of supported routes.
  // If the parsed URL is not in our list of supported routes, select the 404 page instead
  let page = routes[parsedURL] ? routes[parsedURL] : 'Error404';
  content.innerHTML = page;
}

// Listen on hash change:
window.addEventListener('hashchange', router);

// Listen on page load:
window.addEventListener('load', router);
