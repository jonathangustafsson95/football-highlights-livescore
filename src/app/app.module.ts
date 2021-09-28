import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LiveScoreComponent } from './components/live-score/live-score.component';
import { StandingsInfoComponent } from './components/standings-info/standings-info.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { PlInfoComponent } from './components/pl-info/pl-info.component';
import { SerieaInfoComponent } from './components/seriea-info/seriea-info.component';
import { LaligaInfoComponent } from './components/laliga-info/laliga-info.component';
import { ClInfoComponent } from './components/cl-info/cl-info.component';
import { ElInfoComponent } from './components/el-info/el-info.component';
import { BundesligaInfoComponent } from './components/bundesliga-info/bundesliga-info.component';
import { Ligue1InfoComponent } from './components/ligue1-info/ligue1-info.component';


@NgModule({
  declarations: [
    AppComponent,
    LiveScoreComponent,
    StandingsInfoComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PlInfoComponent,
    SerieaInfoComponent,
    LaligaInfoComponent,
    ClInfoComponent,
    ElInfoComponent,
    BundesligaInfoComponent,
    Ligue1InfoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
