import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse,HttpHeaders  } from'@angular/common/http';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  results:any;
  fontChange:any;
  text:any;
  constructor(private http: HttpClient) { }
  getQuotes(){
    const req = this.http.get('https://type.fit/api/quotes',
                            
    {
    headers:new HttpHeaders()
     .set('Accept','application/json')
     }).subscribe(data=>{
      this.results = data;
      this.text = this.results[Math.floor(Math.random() * 100)].text
      if (this.text.length>150){
        this.fontChange = 'small';
      }else if (this.text.length>100){
        this.fontChange = 'medium';
      } else {
        this.fontChange = 'quotetext';
      }
    });
}
  
  ngOnInit(): void {
 
    const req = this.http.get('https://type.fit/api/quotes',
                            
    {
    headers:new HttpHeaders()
     .set('Accept','application/json')
     }).subscribe(data=>{
      this.results = data;
      this.text = this.results[Math.floor(Math.random() * 100)].text
      if (this.text.length>150){
        this.fontChange = 'small';
      }else if (this.text.length>100){
        this.fontChange = 'medium';
      } else {
        this.fontChange = 'quotetext';
      }
    });
  }

}
