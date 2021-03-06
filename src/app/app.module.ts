import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { A11yModule } from '@angular/cdk/a11y';

import { AppComponent } from './app.component';
import { RootComponent } from './components/root/root.component';
import { CommonModule } from '@angular/common';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { NativeBtnComponent } from './components/buttons/components/native-btn/native-btn.component';
import {
  MatButtonModule,
  MatIconModule,
  MatSelectModule,
  MatInputModule,
} from '@angular/material';
import { CustomBtnNonComponent } from './components/buttons/components/custom-btn-non/custom-btn-non.component';
import { CustomBtnComponent } from './components/buttons/components/custom-btn/custom-btn.component';
import { ListboxesComponent } from './components/listboxes/listboxes.component';
import { NativeSelectComponent } from './components/listboxes/native-select/native-select.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogsComponent } from './components/dialogs/dialogs.component';
import { CheckboxesComponent } from './components/checkboxes/checkboxes.component';
import { NativeCheckComponent } from './components/checkboxes/components/native-check/native-check.component';
import { CustomCheckComponent } from './components/checkboxes/components/custom-check/custom-check.component';
import { CheckboxComponent } from './components/checkboxes/components/custom-check/checkbox/checkbox.component';

const routes = [
  {
    path: '',
    component: RootComponent,
    children: [
      { path: 'buttons', component: ButtonsComponent },
      { path: 'listboxes', component: ListboxesComponent },
      { path: 'checkboxes', component: CheckboxesComponent },
    ]
  },
];

@NgModule({
  declarations: [
    AppComponent,
    RootComponent,
    ButtonsComponent,
    NativeBtnComponent,
    CustomBtnNonComponent,
    CustomBtnComponent,
    ListboxesComponent,
    NativeSelectComponent,
    DialogsComponent,
    CheckboxesComponent,
    NativeCheckComponent,
    CustomCheckComponent,
    CheckboxComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    A11yModule,
    MatIconModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
