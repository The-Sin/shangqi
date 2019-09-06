import { Routes } from '@angular/router';

import { Dashboard1Component } from './dashboard1/dashboard1.component';
import { Dashboard2Component } from './dashboard2/dashboard2.component';
import { Dashboard3Component } from './dashboard3/dashboard3.component';

import { VehicleTracksComponent } from './vehicle-tracks/vehicle-tracks.component';
import { VehicleEditComponent } from './vehicle-edit/vehicle-edit.component';
import { BaiduMapComponent } from './baidu-map/baidu-map.component';
import { VehicleTrackEditComponent } from './vehicle-track-edit/vehicle-track-edit.component';

export const DashboardRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'dashboard1',
        component: Dashboard1Component,
        data: {
          title: 'Dashboard 1',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Dashboard 1' }
          ]
        }
      },
      { path: 'vehicle-edit/:id', component: VehicleEditComponent },
  
      {
        path: 'dashboard2',
        component: Dashboard2Component,
        data: {
          title: 'Dashboard 2',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Dashboard 2' }
          ]
        }
      },
      {
        path: 'dashboard3',
        component: Dashboard3Component,
        data: {
          title: 'Dashboard 3',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Dashboard 3' }
          ]
        }
      },
      { path: 'baidu-map', component: BaiduMapComponent ,
        data: {
          title: 'baidu-map',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'baidu-map' }
          ]
        }
     },
     { path: 'vehicle-tracks/:carId', component: VehicleTracksComponent},
  
      { 
        path: 'vehicle-tracks-edit/:carId',
        component: VehicleTrackEditComponent
    },
  
      
    ]
  }
];
