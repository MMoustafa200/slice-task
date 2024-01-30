"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.quoteRouter = void 0;
const express_1 = require("express");
const tsyringe_1 = require("tsyringe");
const quote_controller_1 = require("../controllers/quote.controller");
const quoteController = tsyringe_1.container.resolve(quote_controller_1.QuoteController);
const router = (0, express_1.Router)();
router.get('/quote', quoteController.getRandomQuote.bind(quoteController));
exports.quoteRouter = router;
