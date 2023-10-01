const url = new URL(window.location.href);

if (url.hostname === 'localhost') {
  // url.port = '7070';
}

// add server on render

const root = url;
root.pathname = '';

const links = {
  root: root.origin,
  messages: new URL('messages', url.href).href,
};

export default links;
