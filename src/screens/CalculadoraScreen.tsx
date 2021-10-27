import React from 'react'
import { Text, View } from 'react-native'
import Button from '../components/Button';
import useCalculadora from '../hooks/useCalculadora';
import { styles } from '../theme/appTheme';

export default function CalculadoraScreen() {
   const { 
      numeroAnterior, 
      numero, 
      clear, 
      positiveNegative, 
      deleteLastNumber, 
      dividir, 
      buildNumber, 
      multiplicar, 
      restar,
      sumar,
      calcular
   } = useCalculadora();

   return (
      <View style={styles.calculadoraContainer}>
         {
            (numeroAnterior !== '0') && ( <Text style={styles.smallResult}>{numeroAnterior}</Text> )
         }
         <Text style={styles.bigResult} numberOfLines={1} adjustsFontSizeToFit>{numero}</Text>

         <View style={styles.fila}>
            <Button label="C"   color="gris"    action={clear} />
            <Button label="+/-" color="gris"    action={positiveNegative}/>
            <Button label="del" color="gris"    action={deleteLastNumber}/>
            <Button label="/"   color="naranja" action={dividir}/>
         </View>
         <View style={styles.fila}>
            <Button label="7" color="grisOscuro"   action={buildNumber}/>
            <Button label="8" color="grisOscuro"   action={buildNumber}/>
            <Button label="9" color="grisOscuro"   action={buildNumber}/>
            <Button label="x" color="naranja"      action={multiplicar}/>
         </View>
         <View style={styles.fila}>
            <Button label="4" color="grisOscuro"   action={buildNumber}/>
            <Button label="5" color="grisOscuro"   action={buildNumber}/>
            <Button label="6" color="grisOscuro"   action={buildNumber}/>
            <Button label="-" color="naranja"      action={restar}/>
         </View>
         <View style={styles.fila}>
            <Button label="1" color="grisOscuro"   action={buildNumber}/>
            <Button label="2" color="grisOscuro"   action={buildNumber}/>
            <Button label="3" color="grisOscuro"   action={buildNumber}/>
            <Button label="+" color="naranja"      action={sumar}/>
         </View>
         <View style={styles.fila}>
            <Button label="0" color="grisOscuro"   action={buildNumber} fullWidth/>
            <Button label="." color="grisOscuro"   action={buildNumber}/>
            <Button label="=" color="naranja"      action={calcular}/>
         </View>
      </View>
   )
}
