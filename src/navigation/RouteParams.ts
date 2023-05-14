import { type NavigatorScreenParams, type ParamListBase } from '@react-navigation/native'
export interface AuthStackParamList extends ParamListBase {
  Home: undefined
  Login: { id?: number } | undefined
}

export interface RootStackParamList extends ParamListBase {
  HomeStack: NavigatorScreenParams<AuthStackParamList>
}
export type AllScreenParamList = RootStackParamList & AuthStackParamList

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AllScreenParamList {}
  }
}
