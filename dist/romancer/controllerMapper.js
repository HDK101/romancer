"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.controller = void 0;
const path_1 = __importDefault(require("path"));
const promises_1 = require("fs/promises");
const controllers = {};
function mapControllers() {
    return __awaiter(this, void 0, void 0, function* () {
        const controllersFolder = path_1.default.resolve(__dirname, '../app/controllers');
        const data = yield (0, promises_1.readdir)(controllersFolder);
        yield Promise.all(data.map((filename) => __awaiter(this, void 0, void 0, function* () {
            const controller = yield Promise.resolve().then(() => __importStar(require(`${controllersFolder}/${filename}`)));
            const nameWithoutExtension = filename === null || filename === void 0 ? void 0 : filename.split('.')[0];
            controllers[nameWithoutExtension] = new controller.default();
        })));
    });
}
exports.default = mapControllers;
function controller(name) {
    const [controller, method] = name.split('.');
    const controllerInstance = controllers[controller];
    console.log(controllerInstance);
    console.log(method);
    console.log(controllerInstance[method]);
    return controllerInstance[method];
}
exports.controller = controller;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbGxlck1hcHBlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb21hbmNlci9jb250cm9sbGVyTWFwcGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0RBQXdCO0FBQ3hCLDBDQUFzQztBQU10QyxNQUFNLFdBQVcsR0FBZ0IsRUFBRSxDQUFDO0FBRXBDLFNBQThCLGNBQWM7O1FBQzFDLE1BQU0saUJBQWlCLEdBQUcsY0FBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztRQUN4RSxNQUFNLElBQUksR0FBRyxNQUFNLElBQUEsa0JBQU8sRUFBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBRTlDLE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQU0sUUFBUSxFQUFFLEVBQUU7WUFDM0MsTUFBTSxVQUFVLEdBQUcsd0RBQWEsR0FBRyxpQkFBaUIsSUFBSSxRQUFRLEVBQUUsR0FBQyxDQUFDO1lBQ3BFLE1BQU0sb0JBQW9CLEdBQUcsUUFBUSxhQUFSLFFBQVEsdUJBQVIsUUFBUSxDQUFFLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDckQsV0FBVyxDQUFDLG9CQUFvQixDQUFDLEdBQUcsSUFBSSxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDL0QsQ0FBQyxDQUFBLENBQUMsQ0FBQyxDQUFDO0lBQ04sQ0FBQztDQUFBO0FBVEQsaUNBU0M7QUFFRCxTQUFnQixVQUFVLENBQUMsSUFBWTtJQUNyQyxNQUFNLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDN0MsTUFBTSxrQkFBa0IsR0FBRyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUM7SUFFbkQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBRWhDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7SUFFcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBRXhDLE9BQU8sa0JBQWtCLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDcEMsQ0FBQztBQVhELGdDQVdDIn0=