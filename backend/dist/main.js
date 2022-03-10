"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const mongoose_1 = require("mongoose");
require("dotenv/config");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    await mongoose_1.default.connect(process.env.DB_HOST);
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map