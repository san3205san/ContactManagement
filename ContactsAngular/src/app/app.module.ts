import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { ContactDetailComponent } from './contact-details/contact-detail/contact-detail.component';
import { ContactListComponent } from './contact-details/contact-list/contact-list.component';
import { ContactDetailstService } from './shared/contact-detailst.service';
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import {NgxPaginationModule} from 'ngx-pagination';  
import { Ng2SearchPipeModule } from 'ng2-search-filter'; 

@NgModule({
  declarations: [
    AppComponent,
    ContactDetailsComponent,
    ContactDetailComponent,
    ContactListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    NgxPaginationModule,
    Ng2SearchPipeModule
  ],
  providers: [ContactDetailstService],
  bootstrap: [AppComponent]
})
export class AppModule { }
