import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { SubscriptionLike } from 'rxjs';
import { eslectorsahawases } from './notreduxs/aha/erducers';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'backend';
  wases: SubscriptionLike;
  constructor(private otsre: Store, private notrouters: Router) {
    this.wases = this.otsre.select(eslectorsahawases).subscribe(req => {
      if (!req) this.notrouters.navigate(['/aha'])
    })
  }
}
