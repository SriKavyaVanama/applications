import { Component } from '@angular/core';
import { MagazineService } from '../services/magazine.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { MagazineDetails, MagazineInfo } from '../models/magazine-request';


@Component({
  selector: 'app-magazine',
  templateUrl: './magazine.component.html',
  styleUrls: ['./magazine.component.scss'],

})
export class MagazineComponent {
  myForm!: FormGroup;
  magazineResponse: MagazineDetails = {} as MagazineDetails;
  constructor(
    private magazineService: MagazineService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      job: ['', [Validators.required]],
    });
  }
  onSubmit() {
    this.magazineService
      .postMagazineInfo$(this.myForm.value as MagazineInfo)
      .subscribe((data: MagazineDetails) => {
        this.magazineResponse = data;
        console.log(data);
      });
  }

  
}
