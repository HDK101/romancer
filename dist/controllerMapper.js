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
Object.defineProperty(exports, "__esModule", { value: true });
exports.controller = void 0;
const promises_1 = require("fs/promises");
const controllers = {};
function mapControllers() {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield (0, promises_1.readdir)('./app/controllers');
        yield Promise.all(data.map((filename) => __awaiter(this, void 0, void 0, function* () {
            const controller = yield Promise.resolve().then(() => __importStar(require(`./app/controllers/${filename}`)));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbGxlck1hcHBlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9jb250cm9sbGVyTWFwcGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsMENBQXNDO0FBTXRDLE1BQU0sV0FBVyxHQUFnQixFQUFFLENBQUM7QUFFcEMsU0FBOEIsY0FBYzs7UUFDMUMsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFBLGtCQUFPLEVBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUNoRCxNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFNLFFBQVEsRUFBRSxFQUFFO1lBQzNDLE1BQU0sVUFBVSxHQUFHLHdEQUFhLHFCQUFxQixRQUFRLEVBQUUsR0FBQyxDQUFDO1lBQ2pFLE1BQU0sb0JBQW9CLEdBQUcsUUFBUSxhQUFSLFFBQVEsdUJBQVIsUUFBUSxDQUFFLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDckQsV0FBVyxDQUFDLG9CQUFvQixDQUFDLEdBQUcsSUFBSSxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDL0QsQ0FBQyxDQUFBLENBQUMsQ0FBQyxDQUFDO0lBQ04sQ0FBQztDQUFBO0FBUEQsaUNBT0M7QUFFRCxTQUFnQixVQUFVLENBQUMsSUFBWTtJQUNyQyxNQUFNLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDN0MsTUFBTSxrQkFBa0IsR0FBRyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUM7SUFFbkQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBRWhDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7SUFFcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBRXhDLE9BQU8sa0JBQWtCLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDcEMsQ0FBQztBQVhELGdDQVdDIn0=