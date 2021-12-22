import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { HtmlContentComponent } from './components/html-content/html-content.component';
import { ExpeditionPreviewComponent } from './components/expedition-preview/expedition-preview.component';
import { BlogComponent } from './pages/blog/blog.component';
import { AboutComponent } from './pages/about/about.component';
import { SafeHtmlPipe } from './shared/pipes/safe-html.pipe';
import { ExpeditionComponent } from './pages/expedition/expedition.component';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';

/* Material Design */ 
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

/* Bootstrap */ 

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ExpeditionPreviewComponent,
    HtmlContentComponent,
    HomeComponent,
    BlogComponent,
    AboutComponent,
    SafeHtmlPipe,
    ExpeditionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
