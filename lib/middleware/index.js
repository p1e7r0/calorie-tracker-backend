"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Don't remove this comment. It's needed to format import lines nicely.
function default_1(app) {
    app.use('/version', (req, res) => {
        res.send('1.0.1');
    });
}
exports.default = default_1;
