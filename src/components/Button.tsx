import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../theme/appTheme';

interface Props {
   label: string;
   color: "gris" | "naranja" | "grisOscuro";
   fullWidth?: boolean;
   action: (action: string) =>  void;
}

const colors = {
   gris: "#9B9B9B",
   grisOscuro: "#2D2D2D",
   naranja: "#FF9427"
}

export default function Button({label, color, fullWidth = false, action}: Props) {
   return (
      <TouchableOpacity
         onPress={() => action(label)}
         activeOpacity={0.6}
      >
         <View 
            style={{
               ...styles.button,
               backgroundColor:  colors[color],
               width: fullWidth ? 180 : 80
            }}
         >
               <Text 
                  style={{
                     ...styles.buttonText,
                     color: color === "gris" ? "black" : "white"
                  }}
               >{label}</Text>
         </View>
      </TouchableOpacity>
   )
}
