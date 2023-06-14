import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { aboutComponent } from './profile/about/about.component';
import { ContactComponent } from './profile/contact/contact.component';
import { EducationComponent } from './profile/education/education.component';
import { ExperienceComponent } from './profile/experience/experience.component';
import { ExtraCiricularComponent } from './profile/extra-ciricular/extra-ciricular.component';
import { FooterComponent } from './profile/footer/footer.component';
import { HeaderComponent } from './profile/header/header.component';
import { IntroComponent } from './profile/intro/intro.component';
import { PortfolioComponent } from './profile/portfolio/portfolio.component';
import { PojectsComponent } from './profile/pojects/pojects.component';
import { ScrollComponent } from './profile/scroll/scroll.component';
import { SkillsComponent } from './profile/skills/skills.component';
import { ProfileComponent } from './profile/profile.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { ReferenceComponent } from './profile/Reference/reference.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@NgModule({
  declarations: [
    AppComponent,
    aboutComponent,
    ContactComponent,
    EducationComponent,
    ExperienceComponent,
    ExtraCiricularComponent,
    FooterComponent,
    HeaderComponent,
    IntroComponent,
    PortfolioComponent,
    PojectsComponent,
    ReferenceComponent,
    // referenceComponent,
    ScrollComponent,
    SkillsComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxPaginationModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    ProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
