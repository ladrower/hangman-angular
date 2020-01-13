import * as fromDoc from './doc.reducer';
import { makeEndpoint } from './doc.reducer';

describe('Doc Selectors', () => {
  it('should select endpoint states by keys', () => {
    const state: fromDoc.DocState = {
      checkin: makeEndpoint(true),
      createGame: makeEndpoint(false),
      getGame: makeEndpoint(false, 'success'),
      guessLetter: makeEndpoint(false, null, 'error'),
    };
    expect(fromDoc.selectCheckinState.projector(state, {key: 'pending'})).toBe(true);
    expect(fromDoc.selectCreateGameState.projector(state, {key: 'pending'})).toBe(false);
    expect(fromDoc.selectGetGameState.projector(state, {key: 'pending'})).toBe(false);
    expect(fromDoc.selectGetGameState.projector(state, {key: 'response'})).toBe('success');
    expect(fromDoc.selectGetGameState.projector(state, {key: 'errorResponse'})).toBe(null);
    expect(fromDoc.selectGuessLetterState.projector(state, {key: 'response'})).toBe(null);
    expect(fromDoc.selectGuessLetterState.projector(state, {key: 'errorResponse'})).toBe('error');
  });
});
