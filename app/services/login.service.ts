import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private afs: AngularFirestore) { }

  salvar(login: Login){
    return this.afs.collection('login').add({ ...login });
  }
}
