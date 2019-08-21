import {Person} from "./Person.js";

export class Hero extends Person{
    constructor(title, fname, lname, pow ){
        super(pow)
        this.title = title;
        this.firstname = fname;
        this.lastname = lname;
        this._secret = "top secret";
    }
    fullname(){
        return this.firstname+" "+this.lastname;
    }
    get secret(){
        return this._secret
    }
    set secret(newmission){
        this._secret = newmission;
    }
};