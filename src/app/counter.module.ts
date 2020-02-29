import {NgModule} from "@angular/core";
import {CounterComponent} from "./counter.component";
import {HelloComponent} from './hello.component';

@NgModule({
    declarations: [
        CounterComponent, HelloComponent
    ],
    imports: [
      
    ],
    exports: [
        CounterComponent
    ]
})
export class CounterModule {
}