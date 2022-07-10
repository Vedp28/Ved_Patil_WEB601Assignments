import { Pipe, PipeTransform } from '@angular/core';
import { Content } from './models/content';

@Pipe({
  name: 'filterCricketPlayerType'
})
export class FilterCricketPlayerTypePipe implements PipeTransform {

  transform(listOfCricketPlayers: Content[], typeToFilterBy?: string): Content[] {
    return listOfCricketPlayers.filter(filterCricketPlayerType => {
 
        return !filterCricketPlayerType.type?.length 
         || filterCricketPlayerType.type == "All-Rounder" || filterCricketPlayerType.type =="Batsman" ;

        });
      }

}