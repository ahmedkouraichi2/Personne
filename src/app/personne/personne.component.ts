import { PersonneService } from './../services/personne.service';
import { Component, OnInit } from '@angular/core';
import { Personne } from '../personne';

@Component({
  selector: 'app-personne',
  templateUrl: './personne.component.html',
  styleUrls: ['./personne.component.css']
})
export class PersonneComponent implements OnInit {
 personne:Personne={}
  personnes:any;
  constructor(private personneService: PersonneService) { }

  ngOnInit(): void {
    this.personneService.getAll().subscribe((result)=>{
      this.personnes=result;

    });

  }
  ajouterPersonne() {
    this.personneService.addPerson(this.personne).subscribe(res => {
    this.personneService.getAll().subscribe(result => {
    this.personnes = result;
    });
    });

}
}
