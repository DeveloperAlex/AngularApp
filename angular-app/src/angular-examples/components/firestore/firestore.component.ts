import { FirestoreService } from './firestore.service';
// import { environment } from './../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
// import * as firebase from 'firebase';
// import firestore from 'firebase/firestore';

@Component({
  selector: 'app-firestore',
  templateUrl: './firestore.component.html',
  styleUrls: ['./firestore.component.scss']
})
export class FirestoreComponent implements OnInit {
  // env = environment;
  testCollection: Observable<any>;

  constructor(public firestoreSvc: FirestoreService) { }

  ngOnInit() {
    // firebase.initializeApp(this.env.firebaseConfig);
    // firebase.firestore().settings({timestampsInSnapshots: true});

    this.testCollection = this.firestoreSvc.getTestCollection();
    }

}
