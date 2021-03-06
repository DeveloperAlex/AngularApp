import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
// import * as firebase from 'firebase';
// import firestore from 'firebase/firestore';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  env = environment;
  // ref = firebase.firestore().collection('test-collection-01');

  // constructor() { 
  //   // firebase.initializeApp(this.env.firebaseConfig);
  //   // firebase.firestore().settings({timestampsInSnapshots: true});
  // }

  constructor(private db: AngularFirestore) {}

  public getTestCollection(): Observable<any> {
    return this.db.collection('test-collection-01').valueChanges();
  }


/*
  private getBoards(): Observable<any> {
    return new Observable((observer) => {
      this.ref.onSnapshot((querySnapshot) => {
        let boards = [];
        querySnapshot.forEach((doc) => {
          let data = doc.data();
          boards.push({
            key: doc.id,
            title: data.title,
            description: data.description,
            author: data.author
          });
        });
        observer.next(boards);
      });
    });
  }

  private getBoard(id: string): Observable<any> {
    return new Observable((observer) => {
      this.ref.doc(id).get().then((doc) => {
        let data = doc.data();
        observer.next({
          key: doc.id,
          title: data.title,
          description: data.description,
          author: data.author
        });
      });
    });
  }
  
  private postBoards(data): Observable<any> {
    return new Observable((observer) => {
      this.ref.add(data).then((doc) => {
        observer.next({
          key: doc.id,
        });
      });
    });
  }
  
  private updateBoards(id: string, data): Observable<any> {
    return new Observable((observer) => {
      this.ref.doc(id).set(data).then(() => {
        observer.next();
      });
    });
  }
  
  private deleteBoards(id: string): Observable<{}> {
    return new Observable((observer) => {
      this.ref.doc(id).delete().then(() => {
        observer.next();
      });
    });
  }
*/

}
