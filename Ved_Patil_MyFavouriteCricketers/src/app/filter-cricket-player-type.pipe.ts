import { Pipe, PipeTransform } from '@angular/core';
import { Content } from './models/content';

@Pipe({
  name: 'filterCricketPlayerType'
})
export class FilterCricketPlayerTypePipe implements PipeTransform {

  transform(listOfCricketPlayers: Content[], typeToFilterBy?: string): Content[] {
    return listOfCricketPlayers.filter(cricketPlayer => {
      if (typeToFilterBy) {
        return typeToFilterBy === cricketPlayer.type;
      }
      return !cricketPlayer.type;
    });
  }

}