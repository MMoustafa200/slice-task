"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const utils_1 = require("../src/common/utils");
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield utils_1.prismaClient.quote.createMany({
            data: [
                {
                    id: 1,
                    author_id: 1,
                    quote: 'The more you like yourself, the less you are like anyone else, which makes you unique.',
                },
                {
                    id: 2,
                    author_id: 1,
                    quote: "Disneyland is a work of love. We didn't go into Disneyland just with the idea of making money.",
                },
                {
                    id: 3,
                    author_id: 1,
                    quote: 'I always like to look on the optimistic side of life, but I am realistic enough to know that life is a complex matter.',
                },
                {
                    id: 4,
                    author_id: 2,
                    quote: 'The secret of getting ahead is getting started.',
                },
                {
                    id: 5,
                    author_id: 2,
                    quote: 'Part of the secret of a success in life is to eat what you like and let the food fight it out inside.',
                },
                {
                    id: 6,
                    author_id: 2,
                    quote: "You can't depend on your eyes when your imagination is out of focus.",
                },
                {
                    id: 7,
                    author_id: 3,
                    quote: 'Look deep into nature, and then you will understand everything better.',
                },
                {
                    id: 8,
                    author_id: 3,
                    quote: 'Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning.',
                },
                {
                    id: 9,
                    author_id: 3,
                    quote: 'The only source of knowledge is experience.',
                },
            ],
        });
        console.log('seed quotes data done successfully');
    }
    catch (err) {
        console.error(err);
    }
}))();
