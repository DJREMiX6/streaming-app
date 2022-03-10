"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vip = exports.VipSchema = void 0;
const mongoose_1 = require("mongoose");
exports.VipSchema = new mongoose_1.Schema({
    id: { type: mongoose_1.Schema.Types.ObjectId, required: true },
    firstName: { type: mongoose_1.Schema.Types.String, required: true },
    middleName: { type: mongoose_1.Schema.Types.String, required: false },
    lastName: { type: mongoose_1.Schema.Types.String, required: true },
    birthDate: { type: mongoose_1.Schema.Types.Date, required: true },
    birthPlace: { type: mongoose_1.Schema.Types.String, required: false },
    description: { type: mongoose_1.Schema.Types.String, required: true }
}, {
    autoIndex: true
});
exports.Vip = (0, mongoose_1.model)('Vip', exports.VipSchema);
//# sourceMappingURL=vip.model.js.map