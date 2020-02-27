import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
gstnum: any;
gstinfo: any=[];
companyname: string='';
address: any;
  constructor(private http: HttpClient, private ngxService: NgxUiLoaderService) { }

  ngOnInit() {
    this.ngxService.start();
    setTimeout(() => {
      this.ngxService.stop(); 
    }, 2000);
  }
  verify(){
    console.log(this.gstnum)
    this.http.get(`https://appyflow.in/api/verifyGST?gstNo=${this.gstnum}&key_secret=k6CTFDUn7JfWUPvERK1APrFtz213`).subscribe(
      resp=>{
        console.log(resp);
        this.gstinfo= resp['taxpayerInfo'];

      },
      error=>{
        console.log(error);
      }
    )
  }
}
