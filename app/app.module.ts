import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from 'nativescript-angular';

import { AppComponent } from "./app.component";
import { routes } from './routes';
import { FirstPageComponent } from './first-page/first-page.component';

@NgModule({
  declarations: [
      AppComponent,
      FirstPageComponent
  ],
  bootstrap: [AppComponent],
  imports: [
      NativeScriptRouterModule,
      NativeScriptRouterModule.forRoot(routes)
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
