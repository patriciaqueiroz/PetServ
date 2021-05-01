/**
 * This is the navigator you will modify to display the logged-in screens of your app.
 * You can use RootNavigator to also display an auth flow or other user flows.
 *
 * You'll likely spend most of your time in this file.
 */
import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import {
  HomeScreen,
  VeterinarioListScreen,
  VeterinarioFormCreateScreen,
  ClienteListScreen,
  ClienteFormCreateScreen,
  PetListScreen,
  PetFormCreateScreen,
  PetFormEditScreen,
  ClienteFormEditScreen,
  VeterinarioFormEditScreen,
  ServicoListScreen,
  ServicoFormCreateScreen,
  ServicoFormEditScreen,
  TosadorListScreen,
  TosadorFormCreateScreen,
  TosadorFormEditScreen,
  PasseadorListScreen,
  PasseadorFormCreateScreen,
  PasseadorFormEditScreen,
} from "../screens"

/**
 * This type allows TypeScript to know what routes are defined in this navigator
 * as well as what properties (if any) they might take when navigating to them.
 *
 * If no params are allowed, pass through `undefined`. Generally speaking, we
 * recommend using your MobX-State-Tree store(s) to keep application state
 * rather than passing state through navigation params.
 *
 * For more information, see this documentation:
 *   https://reactnavigation.org/docs/params/
 *   https://reactnavigation.org/docs/typescript#type-checking-the-navigator
 */
export type PrimaryParamList = {
  home: undefined
  veterinarioList: undefined
  veterinarioFormCreate: undefined
  clienteList: undefined,
  clienteFormCreate: undefined
  petList: undefined,
  petFormCreate: undefined,
  petFormEdit: undefined,
  clienteFormEdit: undefined,
  veterinarioFormEdit: undefined,
  servicoList: undefined,
  servicoFormCreate: undefined,
  servicoFormEdit: undefined,
  tosadorList: undefined,
  tosadorFormCreate: undefined,
  tosadorFormEdit: undefined,
  passeadorList: undefined,
  passeadorFormCreate: undefined,
  passeadorFormEdit: undefined,
}

// Documentation: https://reactnavigation.org/docs/stack-navigator/
const Stack = createStackNavigator<PrimaryParamList>()

export function MainNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="veterinarioList" component={VeterinarioListScreen} />
      <Stack.Screen name="veterinarioFormCreate" component={VeterinarioFormCreateScreen} />
      <Stack.Screen name="clienteList" component={ClienteListScreen} />
      <Stack.Screen name="clienteFormCreate" component={ClienteFormCreateScreen} />
      <Stack.Screen name="petList" component={PetListScreen} />
      <Stack.Screen name="petFormCreate" component={PetFormCreateScreen} />
      <Stack.Screen name="petFormEdit" component={PetFormEditScreen} />
      <Stack.Screen name="clienteFormEdit" component={ClienteFormEditScreen} />
      <Stack.Screen name="veterinarioFormEdit" component={VeterinarioFormEditScreen} />
      <Stack.Screen name="servicoList" component={ServicoListScreen} />
      <Stack.Screen name="servicoFormCreate" component={ServicoFormCreateScreen} />
      <Stack.Screen name="servicoFormEdit" component={ServicoFormEditScreen} />
      <Stack.Screen name="tosadorList" component={TosadorListScreen} />
      <Stack.Screen name="tosadorFormCreate" component={TosadorFormCreateScreen} />
      <Stack.Screen name="tosadorFormEdit" component={TosadorFormEditScreen} />
      <Stack.Screen name="passeadorList" component={PasseadorListScreen} />
      <Stack.Screen name="passeadorFormCreate" component={PasseadorFormCreateScreen} />
      <Stack.Screen name="passeadorFormEdit" component={PasseadorFormEditScreen} />

    </Stack.Navigator>
  )
}

/**
 * A list of routes from which we're allowed to leave the app when
 * the user presses the back button on Android.
 *
 * Anything not on this list will be a standard `back` action in
 * react-navigation.
 *
 * `canExit` is used in ./app/app.tsx in the `useBackButtonHandler` hook.
 */
const exitRoutes = ["home"]
export const canExit = (routeName: string) => exitRoutes.includes(routeName)
