import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name : 'citi'
})
export class GenPipe implements PipeTransform{
    transform(...vals){
        if(vals[1] === 'male'){
            return "Mr "+vals[0]
        }else {
            return "Miss "+vals[0]
        }
    }
}