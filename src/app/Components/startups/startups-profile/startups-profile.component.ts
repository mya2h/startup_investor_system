import { Component, OnInit } from '@angular/core';
import { startupprofile } from '../../../Model/startupprofile';
import { StartupProfileService } from '../../../Services/startup-profile.service'
import { FormGroup, FormControl, Validators } from '@angular/forms';
export interface Subject {
  name: string
}
@Component({
  selector: 'app-startups-profile',
  templateUrl: './startups-profile.component.html',
  styleUrls: ['./startups-profile.component.css']
})
export class StartupsProfileComponent implements OnInit {
  first_name: any;
  last_name: any;

  public ownerForm: FormGroup;
  constructor(private profile: StartupProfileService) { }

  ngOnInit() {
    this.ownerForm = new FormGroup({
      first_name: new FormControl('', [Validators.maxLength(20)]),
      last_name: new FormControl('', [Validators.maxLength(20)]),
      phone: new FormControl(''),
      dateOfBirth: new FormControl(new Date()),
      address: new FormControl('', [Validators.maxLength(20)]),
      education: new FormControl(''),
      workspace: new FormControl('', [Validators.maxLength(20)]),
      profile: new FormControl(''),
      email: new FormControl()

    });
    this.profile.getProfileInfo().subscribe(data => {
      this.ownerForm.patchValue({
        first_name: data.user.first_name
      });
      this.ownerForm.patchValue({
        last_name: data.user.last_name
      });
      this.ownerForm.patchValue({
        phone: data.user.phone_number
      });
      this.ownerForm.patchValue({
        email: data.user.email
      });
      if (data.profile !== null) {
        this.ownerForm.patchValue({
          education: data.profile.education_background
        });
        this.ownerForm.patchValue({
          address: data.profile.address
        });
        this.ownerForm.patchValue({
          dateOfBirth: data.profile.date_of_birth
        });
        this.ownerForm.patchValue({
          workspace: data.profile.work_experiance
        });
        this.ownerForm.patchValue({
          profile: data.profile.profile
        });

      } else {
        console.log("Less than");
      }


      console.log("my data", data);
      // this.ownerForm.setValue({
      // first_name: data.user['first_name']
      // })




    })
  }
  public createOwner = (ownerFormValue) => {

    const pro: startupprofile = {
      first_name: ownerFormValue.first_name,
      last_name: ownerFormValue.last_name,
      phone_number: ownerFormValue.phone,
      address: ownerFormValue.address,
      birth_date: ownerFormValue.dateOfBirth,
      work_experiance: ownerFormValue.workspace,
      education_background: ownerFormValue.education,
      profile: ownerFormValue.profile
    }
    this.profile.createProfile(pro).subscribe(data => {
      console.log(data);
    })
  }


}
