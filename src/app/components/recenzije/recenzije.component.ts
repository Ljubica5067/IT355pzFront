import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RecenzijeService } from 'src/app/services/recenzije/recenzije.service';

@Component({
  selector: 'app-recenzije',
  templateUrl: './recenzije.component.html',
  styleUrls: ['./recenzije.component.css']
})
export class RecenzijeComponent {
  productDetail:any = null;
  constructor(private recenzijaService: RecenzijeService, private http: HttpClient) {

   }

   API = "http://localhost:8080";

   register(registerForm:NgForm) {
     this.recenzijaService.registerRecenzija(registerForm.value).subscribe(
       (resp) => {
         console.log(resp);
         registerForm.reset();
         console.log(registerForm.value);
         alert("Uspesno ste ostavili recenziju!")
       },
       (err) => {
         console.log(err);
         alert("Nesto je poslo po zlu! Pokusajte opet!")
       }
     );
   }

}
