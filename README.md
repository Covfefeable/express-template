# express-server-template
a nodejs server template using express

## Usage
```bash
# if pnpm is not installed
npm i -g pnpm

# install dependencies
pnpm i

# launch the express server locally
pnpm dev

# send a request to know whether the server side is running
curl http://127.0.0.1:1337/api/alive
```

## Deployment
```bash
# if pm2 is not installed
npm i -g pm2

# build the production version
pnpm build

# launch the express server
pm2 start ./build/app.js
```
