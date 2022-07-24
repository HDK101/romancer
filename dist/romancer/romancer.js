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
exports.Romancer = exports.load = void 0;
const app_js_1 = __importDefault(require("./app.js"));
const controllerMapper_js_1 = __importDefault(require("./controllerMapper.js"));
function mapAll() {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, controllerMapper_js_1.default)();
    });
}
function load() {
    return __awaiter(this, void 0, void 0, function* () {
        yield mapAll();
    });
}
exports.load = load;
class Romancer {
    static create() {
        return __awaiter(this, void 0, void 0, function* () {
            yield load();
            return new Romancer();
        });
    }
    start({ router }) {
        this.app = new app_js_1.default({ router });
        this.app.boot(3000);
    }
}
exports.Romancer = Romancer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9tYW5jZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcm9tYW5jZXIvcm9tYW5jZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0RBQTJCO0FBRTNCLGdGQUFtRDtBQUVuRCxTQUFlLE1BQU07O1FBQ25CLE1BQU0sSUFBQSw2QkFBYyxHQUFFLENBQUM7SUFDekIsQ0FBQztDQUFBO0FBRUQsU0FBc0IsSUFBSTs7UUFDeEIsTUFBTSxNQUFNLEVBQUUsQ0FBQztJQUNqQixDQUFDO0NBQUE7QUFGRCxvQkFFQztBQUVELE1BQWEsUUFBUTtJQUduQixNQUFNLENBQU8sTUFBTTs7WUFDakIsTUFBTSxJQUFJLEVBQUUsQ0FBQztZQUNiLE9BQU8sSUFBSSxRQUFRLEVBQUUsQ0FBQztRQUN4QixDQUFDO0tBQUE7SUFFRCxLQUFLLENBQUMsRUFBRSxNQUFNLEVBQXNCO1FBQ2xDLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxnQkFBRyxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0QixDQUFDO0NBQ0Y7QUFaRCw0QkFZQyJ9