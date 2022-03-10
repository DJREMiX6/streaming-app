"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Movie = exports.MovieSchema = void 0;
const mongoose_1 = require("mongoose");
const genre_model_1 = require("./genre.model");
const vip_model_1 = require("./vip.model");
exports.MovieSchema = new mongoose_1.Schema({
    id: { type: mongoose_1.Schema.Types.ObjectId, required: true },
    title: { type: mongoose_1.Schema.Types.String, required: true },
    description: { type: mongoose_1.Schema.Types.String, required: true },
    genres: { type: [genre_model_1.GenreSchema], required: true },
    releaseDate: { type: mongoose_1.Schema.Types.Date, required: true },
    duration: { type: mongoose_1.Schema.Types.Number, required: true },
    directors: { type: [vip_model_1.VipSchema], required: true },
    actors: { type: [vip_model_1.VipSchema], required: true }
}, {
    autoIndex: true
});
exports.Movie = (0, mongoose_1.model)('Movie', exports.MovieSchema);
//# sourceMappingURL=movie.model.js.map