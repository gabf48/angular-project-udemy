import { LoggingService } from './../logging.service';
import { SharedModule } from './../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ShoppingListComponent } from './shopping-list.component';
import { NgModule } from "@angular/core";
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';

@NgModule({
    declarations: [ShoppingListComponent, ShoppingEditComponent],
    imports: [
     
        FormsModule,
        RouterModule.forChild([
            { path: '', component: ShoppingListComponent },
        ]),
        SharedModule
    ],
   // providers: [LoggingService]
})
export class ShoppingListModule{

}