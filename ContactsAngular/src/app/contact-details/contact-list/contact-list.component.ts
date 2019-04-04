import { Component, OnInit } from '@angular/core';
import { ContactDetailstService } from 'src/app/shared/contact-detailst.service';
import { ContactDetail } from 'src/app/shared/contact-detail.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styles: []
})
export class ContactListComponent implements OnInit {

  constructor(private service:ContactDetailstService,
    private toastr:ToastrService) { }

  ngOnInit() {
    this.service.refreshList();
  }
  populateForm(ct:ContactDetail){
    this.service.formData=Object.assign({},ct);
  }
  OnDeleteContactDetail(ContId){
    if(confirm("Are you want to delete this contact?")){
    this.service.deleteContactDetail(ContId)
    .subscribe(res=>{
this.service.refreshList();
this.toastr.warning("Deleted Successfully","Contact Management");
    },
    err=>{
console.log(err);
    });
  }
}

}
