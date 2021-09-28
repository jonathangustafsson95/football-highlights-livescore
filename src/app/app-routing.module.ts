import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StandingsInfoComponent } from './components/standings-info/standings-info.component';
import { LiveScoreComponent } from './components/live-score/live-score.component';
import { HomeComponent } from './components/home/home.component';
import { PlInfoComponent } from './components/pl-info/pl-info.component';
import { ElInfoComponent } from './components/el-info/el-info.component';
import { ClInfoComponent } from './components/cl-info/cl-info.component';
import { Ligue1InfoComponent } from './components/ligue1-info/ligue1-info.component';
import { BundesligaInfoComponent } from './components/bundesliga-info/bundesliga-info.component';
import { SerieaInfoComponent } from './components/seriea-info/seriea-info.component';
import { LaligaInfoComponent } from './components/laliga-info/laliga-info.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'standings', component: StandingsInfoComponent },
  { path: 'livescore', component: LiveScoreComponent },
  { path: 'home', component: HomeComponent },
  { path: 'pl-info', component: PlInfoComponent },
  { path: 'el-info', component: ElInfoComponent },
  { path: 'cl-info', component: ClInfoComponent },
  { path: 'ligue1-info', component: Ligue1InfoComponent },
  { path: 'seriea-info', component: SerieaInfoComponent },
  { path: 'laliga-info', component: LaligaInfoComponent },
  { path: 'bundesliga-info', component: BundesligaInfoComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


