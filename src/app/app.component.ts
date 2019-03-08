import { Component, OnInit } from '@angular/core';
import { LocationService } from './_service/location.service';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'cayuse-web-app';
  locationForm: FormGroup;
  message:string;
  error:boolean;

  constructor(
    private locationService: LocationService,
    private fb: FormBuilder
    ) { 
      this.error=false;
    }

  getDetailsByZipCode():void{
  this.locationService.getDetailsByZipCode(this.locationForm.value.zipCode)
  .subscribe(locationDetails => {
    debugger;
  this.message=locationDetails
  this.error=false;
  }, err => {
    debugger;
    this.error=true;
    this.message=err.error;
  }
  );
}


  ngOnInit() {
  this.locationForm = this.fb.group({
    zipCode: ['', Validators.required]
  });
}

get zipCodeValue() { return this.locationForm.get('zipCode'); }

}
