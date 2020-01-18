import * as fromPlay from './play.reducer';

describe('Play Selectors', () => {
  it('should select correctly', () => {
    const state: fromPlay.PlayState = {
      busy: false,
      error: 'unknown error',
      game: null
    };
    expect(fromPlay.selectBusy.projector(state)).toBe(false);
    expect(fromPlay.selectError.projector(state)).toBe('unknown error');
    expect(fromPlay.selectGame.projector(state)).toBe(null);
  });
});
