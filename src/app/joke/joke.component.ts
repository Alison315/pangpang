import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse,HttpHeaders  } from'@angular/common/http';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {
  results:any;
  fontChange:any;
  constructor(private http: HttpClient) { }
  getJokes(){
    const req = this.http.get('https://icanhazdadjoke.com/',
                            
    {
    headers:new HttpHeaders()
     .set('Accept','application/json')
     }).subscribe(data=>{
      console.log(data);
      this.results = data;
      console.log(this.results.joke.length);
      if (this.results.joke.length>150){
        this.fontChange = 'small';
      }else if (this.results.joke.length>100){
        this.fontChange = 'medium';
      } else {
        this.fontChange = 'joketext';
      }
    });
}
  
  ngOnInit(): void {
 
  const req = this.http.get('https://icanhazdadjoke.com/',
                            {
                            headers:new HttpHeaders()
                             .set('Accept','application/json')
                             }).subscribe(data=>{
                              this.results = data;
                              console.log(this.results.joke.length);
                              if (this.results.joke.length>150){
                                this.fontChange = 'small';
                              }else if (this.results.joke.length>100){
                                this.fontChange = 'medium';
                              } else {
                                this.fontChange = 'joketext';
                              }
                            }
                              );
                             
}

}
