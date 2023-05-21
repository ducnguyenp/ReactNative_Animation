import { type NavigatorScreenParams, type ParamListBase } from '@react-navigation/native'
export interface AnimatedStack extends ParamListBase {
  AnimatedScreen: undefined
  HeaderMomo: undefined
  DraggableBottomSheet: undefined
  ModalAnimation: undefined
  PhoneColorPicker: undefined
  AnimatedExample: undefined
}

export interface RootStackParamList extends ParamListBase {
  AnimatedStack: NavigatorScreenParams<AnimatedStack>
  HomeScreen: undefined
}
export type AllScreenParamList = RootStackParamList & AnimatedStack

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AllScreenParamList {}
  }
}
