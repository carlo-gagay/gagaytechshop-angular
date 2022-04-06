import { NgModule } from "@angular/core";

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';

import { CommonRoutingModule } from "./common-routing.module";

import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { SidenavComponent } from "./sidenav/sidenav.component";
import { TopnavComponent } from "./topnav/topnav.component";

@NgModule({
    declarations: [
        HeaderComponent,
        TopnavComponent,
        SidenavComponent,
        FooterComponent
    ],
    imports: [
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatCardModule,
        CommonRoutingModule
    ],
    exports: [
        TopnavComponent,
        SidenavComponent,
        HeaderComponent,
        FooterComponent
    ]
})

export class CommonModule {}