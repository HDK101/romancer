var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
class RESTController {
}
function mapping(value) {
    return function (controller) {
        controller.mapping = value;
    };
}
function get(value) {
    return function (method) {
        method.asd = value;
    };
}
let UsersController = class UsersController extends RESTController {
    index() {
        console.log('Hello world');
    }
};
__decorate([
    get('walter')
], UsersController.prototype, "index", null);
UsersController = __decorate([
    mapping('red')
], UsersController);
let PencilsController = class PencilsController extends RESTController {
};
PencilsController = __decorate([
    mapping('blue')
], PencilsController);
const usersControllerInstance = new UsersController();
const func = Object.getOwnPropertyNames(UsersController.prototype)[1];
const contr = usersControllerInstance;
console.log(usersControllerInstance.index);
export {};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy90ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQU9BLE1BQU0sY0FBYztDQUduQjtBQUVELFNBQVMsT0FBTyxDQUFDLEtBQWE7SUFDNUIsT0FBTyxVQUFTLFVBQWlDO1FBQy9DLFVBQVUsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQzdCLENBQUMsQ0FBQTtBQUNILENBQUM7QUFFRCxTQUFTLEdBQUcsQ0FBQyxLQUFhO0lBQ3hCLE9BQU8sVUFBUyxNQUFXO1FBQ3pCLE1BQU0sQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDO0lBQ3JCLENBQUMsQ0FBQTtBQUNILENBQUM7QUFHRCxJQUFNLGVBQWUsR0FBckIsTUFBTSxlQUFnQixTQUFRLGNBQWM7SUFFMUMsS0FBSztRQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDN0IsQ0FBQztDQUNGLENBQUE7QUFIQztJQURDLEdBQUcsQ0FBQyxRQUFRLENBQUM7NENBR2I7QUFKRyxlQUFlO0lBRHBCLE9BQU8sQ0FBQyxLQUFLLENBQUM7R0FDVCxlQUFlLENBS3BCO0FBR0QsSUFBTSxpQkFBaUIsR0FBdkIsTUFBTSxpQkFBa0IsU0FBUSxjQUFjO0NBQzdDLENBQUE7QUFESyxpQkFBaUI7SUFEdEIsT0FBTyxDQUFDLE1BQU0sQ0FBQztHQUNWLGlCQUFpQixDQUN0QjtBQUVELE1BQU0sdUJBQXVCLEdBQUcsSUFBSSxlQUFlLEVBQUUsQ0FBQztBQUN0RCxNQUFNLElBQUksR0FBRyxNQUFNLENBQUMsbUJBQW1CLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBRXRFLE1BQU0sS0FBSyxHQUFHLHVCQUE4QixDQUFDO0FBQzdDLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsS0FBWSxDQUFDLENBQUMifQ==