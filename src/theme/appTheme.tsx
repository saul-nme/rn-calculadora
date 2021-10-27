import { StyleSheet } from 'react-native'


export const styles = StyleSheet.create({
   fondo: {
      flex: 1,
      backgroundColor: "black",
   },
   calculadoraContainer: {
      paddingHorizontal: 20,
      flex: 1,
      justifyContent: "flex-end",
   },
   bigResult: {
      color: "white",
      fontSize: 60,
      textAlign: "right",
      marginBottom: 10,
   },
   smallResult: {
      color: "rgba(255,255,255,0.5)",
      fontSize: 30,
      textAlign: "right",
   },
   fila: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginBottom: 18,
      paddingHorizontal: 10,
   },
   button: {
      height: 80,
      width: 80,
      backgroundColor: "#9B9B9B",
      borderRadius: 100,
      justifyContent: 'center',
      marginHorizontal: 10,
   },
   buttonText: {
      textAlign: 'center',
      padding: 10,
      fontSize: 30,
      color: 'black',
      fontWeight: '300'
   },
});
