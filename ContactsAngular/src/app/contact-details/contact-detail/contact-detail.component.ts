import { Component, OnInit } from '@angular/core';
import { ContactDetailstService } from 'src/app/shared/contact-detailst.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styles: []
})
export class ContactDetailComponent implements OnInit {

  constructor(private service:ContactDetailstService,
    private toastr:ToastrService ) { }

  ngOnInit() {
    this.resetForm();
  }


resetForm(form?:NgForm){
  if(form!=null)
    form.resetForm();
  this.service.formData={
    ContactId:0,
    FirstName:'',
    LastName:''
          }
}
onSubmit(form:NgForm){  
  if(this.service.formData.ContactId==0)
    this.insertRecord(form);
  else
    this.updateRecord(form);
}
insertRecord(form:NgForm){
  this.service.postContactDetail().subscribe(
    res=>{
  this.resetForm(form);
  this.toastr.success("Contact Added Successfully","Contact Management");
  this.service.refreshList(); 
  },
    err=>{
      console.log(err);
    }
  )
}
updateRecord(form:NgForm){
  this.service.putContactDetail().subscribe(
    res=>{
  this.resetForm(form);
  this.toastr.success("Contact Details Updated Successfully","Contact Management");
  this.service.refreshList(); 
  },
    err=>{
      console.log(err);
    }
  )
}
}
