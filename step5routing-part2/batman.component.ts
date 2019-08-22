import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    template : `
    <h1>Batman Component</h1>
    <h2>Quantity in stock is : {{ stockQuantity || '0' }}</h2>
    `
})
export class BatmanComponent{
    stockQuantity
    constructor(private ar:ActivatedRoute){}
    ngOnInit(){
        this.stockQuantity = this.ar.snapshot.params['stock']
    }
}