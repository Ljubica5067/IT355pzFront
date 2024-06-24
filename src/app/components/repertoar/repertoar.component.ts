import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RepertoarService } from 'src/app/services/repertoar/repertoar.service';

@Component({
  selector: 'app-repertoar',
  templateUrl: './repertoar.component.html',
  styleUrls: ['./repertoar.component.css']
})
export class RepertoarComponent {

  productDetail:any = null;
  constructor(private repertoarService: RepertoarService, private http: HttpClient) {
    this.getRepertoarDetail();
  }

  
  getRepertoarDetail() {
    this.repertoarService.getRepertoare().subscribe(
    (resp) => {
      console.log(resp);
      this.productDetail = resp;
    },
    (err)=> {
      console.log(err);
    });
  }




}
