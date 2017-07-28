import { Component } from "@angular/core";
import { RouterExtensions } from 'nativescript-angular';

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html"
})
export class AppComponent {
  constructor(private router: RouterExtensions) {
    router.navigateByUrl('first-page');
  }
}
