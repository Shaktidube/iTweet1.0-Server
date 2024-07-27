"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaClient = void 0;
const client_1 = require("@prisma/client");
exports.PrismaClient = new exports.PrismaClient({ log: ["query"] });
