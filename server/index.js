const initExpress = require('./config/express');

const app = initExpress();

const PORT = process.env.PORT || 5000;

/* eslint-disable */
app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});
/* eslint-enable */
