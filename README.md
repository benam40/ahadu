# Ahadu App

A simple Node.js Express app for deployment on cPanel.

## Local Development

```bash
npm install
npm start
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

## Deploying to cPanel

1. **Upload** all files (including `node_modules` or run `npm install` on cPanel if supported) to your cPanel Node.js app directory.
2. In cPanel, use the Node.js selector to set the app root to this folder.
3. Set the startup file to `app.js`.
4. Use the command `npm start` or `node app.js` to run the app.
5. Make sure the port is set by cPanel (often via an environment variable like `PORT`).

If you have any issues or need to use a process manager like Passenger, refer to your hosting provider's Node.js documentation.
