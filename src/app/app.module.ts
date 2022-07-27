import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '@shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from '@shared/service/auth.guard';
import { GalleryModalComponent } from './modal/gallery-modal/gallery-modal.component';



@NgModule({
  declarations: [
    AppComponent,
    GalleryModalComponent,    
    
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
