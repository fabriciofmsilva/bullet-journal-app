const routes = {
  '/': '<app-index></app-index>',
  '/daily-log': '<app-daily-log></app-daily-log>'
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

const router = () => {
  const content = null || document.getElementById('router-outlet');

  let request = parseRequestURL();

  let parsedURL = (request.resource ? '/' + request.resource : '/') + (request.id ? '/:id' : '') + (request.verb ? '/' + request.verb : '');
  
  let page = routes[parsedURL] ? routes[parsedURL] : 'Error404';
  content.innerHTML = page;
}

window.addEventListener('hashchange', router);
window.addEventListener('load', router);
