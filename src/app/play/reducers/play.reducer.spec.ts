import * as fromPlay from './play.reducer';

describe('Play Selectors', () => {
  it('should select correctly', () => {
    const state: fromPlay.PlayState = {
      busy: false,
      error: 'unknown error',
      game: {
        puzzle: ['a', null, 'c'],
        score: 100,
        charsUsed: 'xyz',
        attemptsLeft: 1
      }
    };
    expect(fromPlay.selectBusy.projector(state)).toBe(false);
    expect(fromPlay.selectError.projector(state)).toBe('unknown error');
    expect(fromPlay.selectGame.projector(state).score).toBe(100);
    expect(fromPlay.selectCharsUsed.projector(state).has('y')).toBe(true);
    expect(fromPlay.selectPuzzleString.projector(state, { unknown: '_', separator: ' ' })).toBe('a _ c');
  });
});
