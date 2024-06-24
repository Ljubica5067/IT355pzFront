import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RecenzijeService } from 'src/app/services/recenzije/recenzije.service';

@Component({
  selector: 'app-admin-recenzije',
  templateUrl: './admin-recenzije.component.html',
  styleUrls: ['./admin-recenzije.component.css']
})
export class AdminRecenzijeComponent {
  productDetail:any = null;
  constructor(private recenzijaService: RecenzijeService, private http: HttpClient) {
    this.getRecenzijaDetail();
   }

   idRecenzija = ""
   textRecenzije: String = ""
   markRecenzije = ""

   API = "http://localhost:8080";

  register() {

    let bodyData = {
      "textRecenzije": this.textRecenzije,
      "markRecenzije": this.markRecenzije
    };

    this.http.post("http://localhost:8080/recenzije", bodyData, {
      responseType: 'text'}).subscribe((resulData) => {
        console.log('success')
        alert("Uspesno ste dodali recenziju!")
      this.idRecenzija = this.idRecenzija
      this.textRecenzije = '';
      this.markRecenzije = '';
      this.getRecenzijaDetail();

      }, (err) => {
        console.log(err);
        alert("Nesto je poslo po zlu! Pokusajte opet!")
      })
    }

  getRecenzijaDetail() {
    this.recenzijaService.getRecenzije().subscribe(
    (resp) => {
      console.log(resp);
      this.productDetail = resp;
    },
    (err)=> {
    console.log(err);

  }
  );
}
setDelete(data: any) {
  this.http.delete(this.API + "/deleteRecenziju" + "/" + data.idRecenzija, { 
    responseType: 'text' }).subscribe((resultData) => {
    console.log(resultData);
    alert("Uspesno ste izbrisali recenziju!")
    this.getRecenzijaDetail()
  
  });
}

setUpdate(data: any) {
  this.textRecenzije = data.textRecenzije;
  this.markRecenzije = data.markRecenzije;
  this.idRecenzija = data.idRecenzija;
  console.log(data)
}

UpdateRecords(){
  let bodyData = {
    "idRecenzija": this.idRecenzija,
    "textRecenzije": this.textRecenzije,
    "markRecenzije": this.markRecenzije,
  };

  this.http.put("http://localhost:8080/updateRecenzija" , bodyData, { 
    responseType: 'text' }).subscribe((resultData: any) => {
    console.log(resultData);
    alert("Uspesno ste promenili recenziju!")
    this.getRecenzijaDetail();
    this.idRecenzija = '';
    this.textRecenzije = '';
    this.markRecenzije = '';
  });
}
save() {
  if (this.idRecenzija == '') {
    this.register();
  }
  else {
    this.UpdateRecords();
  }
}

}