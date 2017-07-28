"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_angular_1 = require("nativescript-angular");
var app_component_1 = require("./app.component");
var routes_1 = require("./routes");
var first_page_component_1 = require("./first-page/first-page.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            first_page_component_1.FirstPageComponent
        ],
        bootstrap: [app_component_1.AppComponent],
        imports: [
            nativescript_angular_1.NativeScriptRouterModule,
            nativescript_angular_1.NativeScriptRouterModule.forRoot(routes_1.routes)
        ],
        schemas: [core_1.NO_ERRORS_SCHEMA],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsNkRBQWdFO0FBRWhFLGlEQUErQztBQUMvQyxtQ0FBa0M7QUFDbEMsMEVBQXVFO0FBY3ZFLElBQWEsU0FBUztJQUF0QjtJQUF3QixDQUFDO0lBQUQsZ0JBQUM7QUFBRCxDQUFDLEFBQXpCLElBQXlCO0FBQVosU0FBUztJQVpyQixlQUFRLENBQUM7UUFDUixZQUFZLEVBQUU7WUFDViw0QkFBWTtZQUNaLHlDQUFrQjtTQUNyQjtRQUNELFNBQVMsRUFBRSxDQUFDLDRCQUFZLENBQUM7UUFDekIsT0FBTyxFQUFFO1lBQ0wsK0NBQXdCO1lBQ3hCLCtDQUF3QixDQUFDLE9BQU8sQ0FBQyxlQUFNLENBQUM7U0FDM0M7UUFDRCxPQUFPLEVBQUUsQ0FBQyx1QkFBZ0IsQ0FBQztLQUM1QixDQUFDO0dBQ1csU0FBUyxDQUFHO0FBQVosOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhcic7XG5cbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcbmltcG9ydCB7IHJvdXRlcyB9IGZyb20gJy4vcm91dGVzJztcbmltcG9ydCB7IEZpcnN0UGFnZUNvbXBvbmVudCB9IGZyb20gJy4vZmlyc3QtcGFnZS9maXJzdC1wYWdlLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgICAgQXBwQ29tcG9uZW50LFxuICAgICAgRmlyc3RQYWdlQ29tcG9uZW50XG4gIF0sXG4gIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtcbiAgICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSxcbiAgICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcylcbiAgXSxcbiAgc2NoZW1hczogW05PX0VSUk9SU19TQ0hFTUFdLFxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge31cbiJdfQ==