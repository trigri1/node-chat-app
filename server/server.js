const path = require('path');
const Express = require('express');

const port = process.env.PORT || 3000
var app = new Express();

const publicPath = path.join(__dirname, '../public');
app.use(Express.static(publicPath))



if (!module.parent) {
    app.listen(port, () => {
        console.log(`listening at port ${port}`);
    });
};