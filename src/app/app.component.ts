import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pipe } from 'rxjs';
import { pluck } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data: any;

  constructor(private http: HttpClient){

  }

  ngOnInit() {
    this.getRandomAdvice();
  }


  getRandomAdvice(){
    return this.http.get('https://api.adviceslip.com/advice')
    .pipe(
      pluck('slip')
    )
    .subscribe((slip: any)=>{
      this.data = slip;
    });
  }
}
