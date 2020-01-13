import { createAction, props } from '@ngrx/store';

export const checkin = createAction('[Auth] Checkin');
export const checkout = createAction('[Auth] Checkout');
export const checkinSuccess = createAction('[Auth] Checkin success', props<{ token: string }>());
export const checkinFailure = createAction('[Auth] Checkin failure');
