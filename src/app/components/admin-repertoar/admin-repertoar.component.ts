import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RepertoarService } from 'src/app/services/repertoar/repertoar.service';

@Component({
  selector: 'app-admin-repertoar',
  templateUrl: './admin-repertoar.component.html',
  styleUrls: ['./admin-repertoar.component.css']
})
export class AdminRepertoarComponent {

  productDetail:any = null;
  constructor(private repertoarService: RepertoarService, private http: HttpClient) {
    this.getRepertoarDetail();
  }

  idRepertoar = "";
  imgRepertoar = "";
  film: String = "";
  reziser: String = "";
  zanr: String = "";
  trajanje = "";
  ocena = "";
  projekcija: String = "";
  cenaKarte = "";

  API = "http://localhost:8080";

  register() {

    let bodyData = {
      "film": this.film,
      "reziser": this.reziser,
      "zanr": this.zanr,
      "trajanje": this.trajanje,
      "ocena": this.ocena,
      "projekcija": this.projekcija,
      "cenaKarte": this.cenaKarte,
      "imgRepertoar": this.imgRepertoar
    };

    this.http.post("http://localhost:8080/repertoari", bodyData, {
      responseType: 'text'}).subscribe((resulData) => {
        console.log('success');
        alert("Uspesno ste dodali film na repertoar!");
        this.resetFields();
        this.getRepertoarDetail()
      }, (err) => {
        console.log(err);
        alert("Nesto je poslo po zlu! Pokusajte opet!");
      })
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

  setDelete(data: any) {
    this.http.delete(this.API + "/deleteRepertoar" + "/" + data.idRepertoar, { responseType: 'text' }).subscribe((resultData: any) => {
      console.log(resultData);
      alert("Uspesno ste izbrisali repertoar!");
      this.getRepertoarDetail();
    });
  }

  setUpdate(data: any) {
    this.idRepertoar = data.idRepertoar;
    this.film = data.film;
    this.reziser = data.reziser;
    this.zanr = data.zanr;
    this.trajanje = data.trajanje;
    this.ocena = data.ocena;
    this.projekcija = data.projekcija;
    this.cenaKarte = data.cenaKarte;
    this.imgRepertoar = data.imgRepertoar;
  }

  UpdateRecords() {
    let bodyData = {
      "idRepertoar": this.idRepertoar,
      "film": this.film,
      "reziser": this.reziser,
      "zanr": this.zanr,
      "trajanje": this.trajanje,
      "ocena": this.ocena,
      "projekcija": this.projekcija,
      "cenaKarte": this.cenaKarte,
      "imgRepertoar": this.imgRepertoar
    };

    this.http.put("http://localhost:8080/updateRepertoar", bodyData, { 
      responseType: 'text' }).subscribe((resultData: any) => {
      console.log(resultData);
      alert("Uspesno ste promenili repertoar!");
      this.getRepertoarDetail();
      this.resetFields();
      this.getRepertoarDetail()
    });
  }

  save() {
    if (this.idRepertoar == '') {
      this.register();
    }
    else {
      this.UpdateRecords();
    }
  }

  resetFields() {
    this.idRepertoar = '';
    this.film = '';
    this.reziser = '';
    this.zanr = '';
    this.trajanje = '';
    this.ocena = '';
    this.projekcija = '';
    this.cenaKarte = '';
    this.imgRepertoar = '';
  }
}
