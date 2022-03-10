"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Genre = exports.GenreSchema = void 0;
const mongoose_1 = require("mongoose");
exports.GenreSchema = new mongoose_1.Schema({
    id: { type: mongoose_1.Schema.Types.ObjectId, required: true },
    value: { type: mongoose_1.Schema.Types.String, required: true }
}, {
    autoIndex: true
});
exports.Genre = (0, mongoose_1.model)('Genre', exports.GenreSchema);
//# sourceMappingURL=genre.model.js.map