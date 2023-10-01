const url = new URL(window.location.href);

if (url.hostname === 'localhost') {
  url.port = '7777';
}

if (url.hostname === 'ayostar.github.io') {
  url.hostname = 'six-ra-homework-http-server-chat-star.onrender.com';
  url.protocol = 'https';
}

const root = url;
root.pathname = '';

const links = {
  root: root.origin,
  messages: new URL('messages', url.href).href,
};

export default links;
