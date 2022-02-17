import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {ActivatedRoute} from '@angular/router';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
userId :any="";
user :User = new User();


  constructor(private route:ActivatedRoute, private firestore : AngularFirestore) { }

  ngOnInit(): void {
    this.route
    .paramMap
    .subscribe( paramMap => {
      this.userId = paramMap.get('id');
      console.log("GOT USER ID",this.userId);
      this.getUser();
  })
  }

  getUser(){
    this.firestore
    .collection('users')
    .doc(this.userId)
    .valueChanges()
    .subscribe((user : any)=>{
      this.user= new User(user);
    })
  }

  openAddressDialog(){
    
  }

}
