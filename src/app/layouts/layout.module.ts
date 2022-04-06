
import { NgModule } from "@angular/core";
import { CommonModule } from "../common/common.module";

import { DefaultComponent } from "./default/default.component";

@NgModule({
    declarations: [
        DefaultComponent
    ],
    exports: [
        DefaultComponent
    ],
    imports: [
        CommonModule
    ]
})

export class LayoutModule {}