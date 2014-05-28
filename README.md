# Requirejs

TODO: make this actually work. Currently its broken.

Notice how the relative imports in foo/bar are resolved, but the library 
module ('obscure') doesn't get resolved because it has a 'path' value
in app.js.

## Quickstart

    npm install
    node server.js
    open http://localhost:3005/index.html

### Errors

    "NetworkError: 404 Not Found - http://localhost:3005/js/bar2/a.js" a.js
    "NetworkError: 404 Not Found - http://localhost:3005/js/bar2/b.js" b.js
    Error: Script error for: bar2/a http://requirejs.org/docs/errors.html#scripterror
    Error: Script error for: bar2/b http://requirejs.org/docs/errors.html#scripterror
