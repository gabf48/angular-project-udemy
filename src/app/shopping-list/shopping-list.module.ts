import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ShoppingListComponent } from './shopping-list.component';
import { NgModule } from "@angular/core";
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [ShoppingListComponent, ShoppingEditComponent],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            { path: 'shopping-list', component: ShoppingListComponent },
        ])
    ]
})
export class ShoppingListModule{

}