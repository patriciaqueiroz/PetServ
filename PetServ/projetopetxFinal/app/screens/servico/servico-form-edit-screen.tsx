import React, { useState, useEffect } from "react"
import { TextStyle, View, ViewStyle, Alert } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { observer } from "mobx-react-lite"
import { Button, Header, Screen, TextField, Wallpaper } from "../../components"
import { color, spacing } from "../../theme"
import { useStores } from "../../models"


const FULL: ViewStyle = {
  flex: 1,
}
const CONTAINER: ViewStyle = {
  backgroundColor: color.transparent,
}
const HEADER: TextStyle = {
  paddingBottom: spacing[5] - 1,
  paddingHorizontal: spacing[4],
  paddingTop: spacing[3],
}
const HEADER_TITLE: TextStyle = {
  fontSize: 12,
  fontWeight: "bold",
  letterSpacing: 1.5,
  lineHeight: 15,
  textAlign: "center",
}
const LIST_CONTAINER: ViewStyle = {
  alignItems: "center",
  flexDirection: "row",
  padding: 10,
}
const CONTAINER_ADD: ViewStyle = {
  ...LIST_CONTAINER,
  alignItems: "center",
  flexDirection: "column",
  padding: 10,
  alignSelf: "center",
  alignContent: "center",
}
const BUTTON_ADD: ViewStyle = {
  backgroundColor: "green",
  alignSelf: "center",
  width: 110,
  marginTop: 20
}
const TEXT_FIELD: ViewStyle = {
  width: 300,
}
const TEXT_FIELD_CONTENT: TextStyle = {
  fontSize: 16,
  fontWeight: "bold",
  color: "#5D2555",
  padding: 8,
}

export const ServicoFormEditScreen = observer(function ServicoFormEditScreen() {
  const navigation = useNavigation()
  const goBack = () => navigation.goBack()

  const { servicoStore } = useStores()

  

  const [servicoId, setSelecionarServicoId] = useState(0);
  const [nomeSelecionado, setSelecionarNome] = useState("");
    
  let servico = null

    useEffect (() =>{
        servico=servicoStore.getServicoPorId(servicoStore.servico)
        setSelecionarServicoId(servicoStore.servico)
        setSelecionarNome(servico.nome)
    }, [])

  function adicionarNovoServico() {
    
      servicoStore.saveServico({
        id: servicoId,
        nome: nomeSelecionado,
      })
      navigation.navigate("home")
    navigation.navigate("servicoList")
      }
 
    

  return (
    <View testID="ServicoListScreen" style={FULL}>
      <Wallpaper />
      <Screen style={CONTAINER} preset="fixed" backgroundColor={color.transparent}>
        <Header
          headerText="Adicionar Servico"
          leftIcon="back"
          onLeftPress={goBack}
          style={HEADER}
          titleStyle={HEADER_TITLE}
        />
        <View style={CONTAINER_ADD}>
          <TextField
            value={nomeSelecionado}
            onChangeText={setSelecionarNome}
            inputStyle={TEXT_FIELD_CONTENT}
            style={TEXT_FIELD}
            placeholder="Nome"/>
         
          
          <Button
            style={BUTTON_ADD}
            text="Salvar Alterações"
            onPress={() => { adicionarNovoServico() }}></Button>
        </View>
      </Screen>
    </View>
  )
})
