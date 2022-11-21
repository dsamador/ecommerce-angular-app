import { Action } from '@ngrx/store';
import { User, EmailPasswordCredentials } from './user.models';

/* Tipos de eventos que puden ocurrir cuando: */
export enum Types {
  /* Me logueo */
  SIGN_IN_EMAIL = '[User] Login con email: Start',
  SIGN_IN_EMAIL_SUCCESS = '[User] Login con email: Success',
  SIGN_IN_EMAIL_ERROR = '[User] Login con email: Error',
  /* Inicio sesion */
  SIGN_UP_EMAIL = '[User] Sign up con email: Start',
  SIGN_UP_EMAIL_SUCCESS = '[User] Sign up con email: Success',
  SIGN_UP_EMAIL_ERROR = '[User] Sign up con email: Error',
  /* Salgo de sesion */
  SIGN_OUT_EMAIL = '[User] Sign out con email: Start',
  SIGN_OUT_EMAIL_SUCCESS = '[User] Sign out con email: Success',
  SIGN_OUT_EMAIL_ERROR = '[User] Sign out con email: Error',
}
/* luego de crear esto debemos hacer una clase por cada evento que
defina tanto sus parametros como el tipo */

//Sign in o login
export class SignInEmail implements Action {
  readonly type!: Types.SIGN_IN_EMAIL;
  constructor (public credentials: EmailPasswordCredentials){}
}
export class SignInEmailSuccess implements Action {
  readonly type!: Types.SIGN_IN_EMAIL_SUCCESS;
  constructor (public uid: string, public user: User){}
}
export class SignInEmailError implements Action {
  readonly type!: Types.SIGN_IN_EMAIL_ERROR;
  constructor (public error: string){}
}

//Sign up o registro de usuario
export class SignUpEmail implements Action {
  readonly type!: Types.SIGN_UP_EMAIL;
  constructor (public credentials: EmailPasswordCredentials){}
}
export class SignUpEmailSuccess implements Action {
  readonly type!: Types.SIGN_UP_EMAIL_SUCCESS;
  constructor (public uid: string){}
}
export class SignUpEmailError implements Action {
  readonly type!: Types.SIGN_UP_EMAIL_ERROR;
  constructor (public error: string){}
}

//Sign out o salir de sesion de usuario
export class SignOut implements Action {
  readonly type!: Types.SIGN_OUT_EMAIL;
  constructor (){}
}
export class SignOutSuccess implements Action {
  readonly type!: Types.SIGN_OUT_EMAIL_SUCCESS;
  constructor (){}
}
export class SignOutError implements Action {
  readonly type!: Types.SIGN_OUT_EMAIL_ERROR;
  constructor (public error: string){}
}

export type All =
    SignInEmail
  | SignInEmailSuccess
  | SignInEmailError

  | SignUpEmail
  | SignUpEmailSuccess
  | SignUpEmailError

  | SignOut
  | SignOutSuccess
  | SignOutError;
