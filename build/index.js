"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const server = (0, fastify_1.default)();
server.get('/', async (request, reply) => {
    return 'Hello there! 👋';
});
server.listen({
    port: 8080,
    listenTextResolver: (address) => { return 'Prometheus metrics server is listening at ${address}'; }
});
