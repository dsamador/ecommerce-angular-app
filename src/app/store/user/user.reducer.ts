import { User } from './user.models';
import * as fromActions from './user.actions';

export interface UserState {
  entity: User | null;
  uid: string | null;
  loading: boolean | null;
  error: string | null;
}

/* Estado inicial */
const initialState: UserState = {
  entity: null,
  uid: null,
  loading: null,
  error: null
}

/* Funcion reducer que atualiza la data
del store */
export function reducer(state = initialState, action: fromActions.All | any): UserState{
  switch(action.type){
    //Sign In o Login
    case fromActions.Types.SIGN_IN_EMAIL: {
      return {...state, loading: true}
    }
    case fromActions.Types.SIGN_IN_EMAIL_SUCCESS: {
      return {...state, entity: action.user, uid: action.uid, loading: false, error: null}
    }
    case fromActions.Types.SIGN_IN_EMAIL_ERROR: {
      return {...state, loading: false, error: action.error}
    }

    //Sign Up o Registro de usuario
    case fromActions.Types.SIGN_UP_EMAIL: {
      return {...state, loading: true}
    }
    case fromActions.Types.SIGN_UP_EMAIL_SUCCESS: {
      return {...state, uid: action.uid, loading: false, error: null}
    }
    case fromActions.Types.SIGN_UP_EMAIL_ERROR: {
      return {...state, error: action.error, loading: false}
    }

    //Sign Out o salir de sesion de usuario
    case fromActions.Types.SIGN_OUT_EMAIL: {
      return {...state, loading: true}
    }
    case fromActions.Types.SIGN_OUT_EMAIL_SUCCESS: {
      return {...initialState}
    }
    case fromActions.Types.SIGN_OUT_EMAIL_ERROR: {
      return {...state, error: action.error, loading: false}
    }

    default: {
      return state;
    }
  }
}
