import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HeroService{
   
    constructor(private http:HttpClient){}
    getHeroes(){
       
        return this.http.get("http://localhost:6050/data")
    }

}