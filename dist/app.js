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
const koa_1 = __importDefault(require("koa"));
class App {
    constructor({ router }) {
        this.koa = new koa_1.default();
        this.router = router;
        this.koa.use(router.routes()).use(router.allowedMethods());
    }
    boot(port, preBoot, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            preBoot();
            this.koa.listen(port || 3000, callback);
        });
    }
}
exports.default = App;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLDhDQUFzQjtBQUt0QixNQUFNLEdBQUc7SUFJUCxZQUFZLEVBQUUsTUFBTSxFQUFzQjtRQUN4QyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksYUFBRyxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFFckIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFSyxJQUFJLENBQUMsSUFBWSxFQUFFLE9BQW1CLEVBQUUsUUFBb0I7O1lBQ2hFLE9BQU8sRUFBRSxDQUFDO1lBQ1YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztRQUMxQyxDQUFDO0tBQUE7Q0FDRjtBQUVELGtCQUFlLEdBQUcsQ0FBQyJ9