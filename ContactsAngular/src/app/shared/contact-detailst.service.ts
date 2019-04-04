import { Injectable } from '@angular/core';
import { ContactDetail } from './contact-detail.model';
import {HttpClient} from "@angular/common/http"
@Injectable({
  providedIn: 'root'
})
export class ContactDetailstService {
formData:ContactDetail;
list:ContactDetail[];
readonly rootUrl="http://localhost:54880/api/";

  constructor(private http:HttpClient) { }

postContactDetail(){
return this.http.post(this.rootUrl+"ContactDetails",this.formData)
}
putContactDetail(){
return this.http.put(this.rootUrl+"ContactDetails/"+this.formData.ContactId,this.formData)
}
deleteContactDetail(id){
return this.http.delete(this.rootUrl+"ContactDetails/"+id)
}

refreshList(){
  this.http.get(this.rootUrl+"ContactDetails")
  .toPromise()
  .then(res=>this.list=res as ContactDetail[]);
}

}
