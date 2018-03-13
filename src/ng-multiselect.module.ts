import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import 'rxjs/add/operator/debounceTime';

import { NgMultiselectComponent } from './ng-multiselect.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    exports: [
        NgMultiselectComponent
    ],
    declarations: [
        NgMultiselectComponent
    ]
})
export class NgMultiselectModule { }