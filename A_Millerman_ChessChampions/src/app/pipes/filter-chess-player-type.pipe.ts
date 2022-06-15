import { Pipe, PipeTransform } from '@angular/core';
import { Content } from '../models/content';

@Pipe({
  name: 'filterChessPlayerType'
})
export class FilterChessPlayerTypePipe implements PipeTransform {

  transform(listOfChessPlayers: Content[], typeToFilterBy?: string): Content[] {
    return listOfChessPlayers.filter(chessPlayer => {
      // Write the code that decides if we keep the chess player or not
      if (typeToFilterBy) {
        // only keep chess players that have their type set to be the same value as typeToFilterBy

        // Can do the long way with an if statement
        // if (typeToFilterBy === chessPlayer.type) {
        //   return true;
        // }
        // else {
        //   return false;
        // }

        // can return just the comparison directly
        return typeToFilterBy === chessPlayer.type;
      }
      return !chessPlayer.type;
    });
  }

}
