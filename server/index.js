const initExpress = require('./config/express');

const server = initExpress();

const PORT = process.env.PORT || 5000;

/* eslint-disable */
server.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});
/* eslint-enable */
