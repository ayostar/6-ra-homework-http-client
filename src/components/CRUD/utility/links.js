const url = new URL(window.location.href);

if (url.hostname === 'localhost') {
  url.port = '7070';
}

if (url.hostname === 'ayostar.github.io') {
  url.hostname = 'six-ra-homework-http-crud-server.onrender.com';
  url.protocol = 'https';
}

const root = url;
root.pathname = '';

const links = {
  root: root.origin,
  notes: new URL('notes', url.href).href,
};

export default links;
