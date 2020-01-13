import * as fromAuth from './auth.reducer';

describe('Auth Selectors', () => {
  it('should select auth states', () => {
    const state: fromAuth.AuthState = {
      pending: true,
      token: '123'
    };
    expect(fromAuth.selectLoggedIn.projector(state)).toBe(true);
    expect(fromAuth.selectPending.projector(state)).toBe(true);
    expect(fromAuth.selectToken.projector(state)).toBe('123');
  });
});
