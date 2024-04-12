import { Routes } from '@angular/router';
import {VideosComponent} from './videos/videos.component';
import { ImagesComponent } from './images/images.component';

export const routes: Routes = [
    { path: 'videos', component: VideosComponent },
    { path: 'images', component: ImagesComponent },
    { path: '', component: ImagesComponent },
];
