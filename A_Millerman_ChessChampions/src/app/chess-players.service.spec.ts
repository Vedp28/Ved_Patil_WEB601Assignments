import { TestBed } from '@angular/core/testing';

import { ChessPlayersService } from './chess-players.service';

describe('ChessPlayersService', () => {
  let service: ChessPlayersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChessPlayersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
