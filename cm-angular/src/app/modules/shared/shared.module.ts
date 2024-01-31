import {NgModule} from "@angular/core";
import {ScrollableBlockComponent} from "./components/scrollable-block.component";

const components = [
  ScrollableBlockComponent
]

@NgModule({
  declarations: [...components],
  exports: [...components]
})
export class SharedModule {

}
