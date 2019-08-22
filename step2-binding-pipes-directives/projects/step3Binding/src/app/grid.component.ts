import { Component, Input } from '@angular/core';

@Component({
  selector : 'app-grid',
  template : `
  <table class="table table-striped table-hover">
  <thead class="thead-dark">
          <tr>
              <th>Sl #</th>
              <th>Title</th>
              <th>Full Name</th>
              <th>Poster</th>
              <th>City</th>
              <th>Ticket Price</th>
              <th>Release Date</th>
              <th>Number of Movies</th>
          </tr>
      </thead>
      <tbody>
          <tr [class.orangebox]="od" *ngFor="let hero of herolist; index as idx; first as fst; last as lst; odd as od; even as ev">
              <td>{{ idx+1 }}</td>
              <td>
              <span *ngIf="fst">First Hero</span>
              <span *ngIf="lst">Last Hero</span>
              <span *ngIf="!lst && !fst">In Between</span>
              <span *ngIf="od">Odd</span>
              <span *ngIf="ev">Even</span>
              {{ hero.title | uppercase }}
              </td>
              <td>{{ hero.firstname+' '+hero.lastname }}</td>
              <td>
              <img width="50" src="{{ hero.poster }}" alt="{{ hero.title }}">
              </td>
              <td>{{ hero.city }}</td>
              <td>{{ hero.ticketprice | currency : 'INR' : 'symbol' : '3.3-4' }}</td>
              <td>{{ hero.releasedate | date : 'dd - MMMM - yyyy'}}</td>
              <td>
                  <button>{{ hero.movieslist.length }}</button>
              </td>
          </tr>
      </tbody>
  </table>
  `,
  styles:[`
  .orangebox{
      background-color : orange
  }
  `]
})
export class GridComponent{
    @Input('data') 
    herolist = [];

}