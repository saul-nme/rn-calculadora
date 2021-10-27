import { useRef, useState } from "react";

enum Operadores {
   sumar, restar, multiplicar, dividir
}

export default function useCalculadora() {
   const [numero, setNumero] = useState('0');
   const [numeroAnterior, setNumeroAnterior] = useState('0');

   const operacion = useRef<Operadores>();

   const clear = () => {
      setNumero('0');
      setNumeroAnterior('0');
   }

   const buildNumber = ( textNumber: string ) => {

      // No aceptar doble punto
      if(numero.includes('.') && textNumber === '.') return;

      if(numero.startsWith('0') || numero.startsWith('-0')) {

         // Punto decimal
         if(textNumber === '.') {
            setNumero(numero + textNumber);

            // Si es otro cero y hay un punto
         } else if(textNumber === '0' && numero.includes('.')) {
            setNumero(numero+textNumber);
            
            // Evaluar si es diferente de 0 y no tiene un punto
         } else if(textNumber !== '0' && !numero.includes('.')) {
            setNumero(textNumber);

            // Evitar 000.0
         } else if(textNumber === '0' && !numero.includes('.')) {
            setNumero(numero);
         } else {
            setNumero(numero + textNumber);
         }

      } else {
         setNumero( numero + textNumber );
      }

   }

   const positiveNegative = () => {
      if(numero.includes('-')) {
         setNumero(numero.replace('-',''));
      } else {
         setNumero('-' + numero);

      }
   }

   const deleteLastNumber = () => {
      if(numero.length === 1 || (numero.length === 2 && numero.includes('-')) || numero === "-0.") {
         clear();
      } else {
         setNumero(numero.slice(0,-1));
      }
   }


   const cambiarNumero = () => {
      if(numero.endsWith('.')){
         setNumeroAnterior(numero.slice(0,-1));
      } else {
         setNumeroAnterior(numero);
      }
      setNumero("0");
   }

   const sumar = () => {
      cambiarNumero();
      operacion.current =  Operadores.sumar;
   }

   const restar = () => {
      cambiarNumero();
      operacion.current =  Operadores.restar;
   }
   const multiplicar = () => {
      cambiarNumero();
      operacion.current =  Operadores.multiplicar;
   }
   const dividir = () => {
      cambiarNumero();
      operacion.current =  Operadores.dividir;
   }

   const calcular = () => {
      const num1 =  Number(numero)
      const num2 =  Number(numeroAnterior);

      if(num2 === 0) return;

      switch (operacion.current) {
         case Operadores.sumar:
            setNumero(`${num1 + num2}`);
            break;
         case Operadores.restar:
            setNumero(`${num2 - num1}`);
            break;
         case Operadores.multiplicar:
            setNumero(`${num1 * num2}`);
            break;
         case Operadores.dividir:
            setNumero(`${num2 / num1}`);
            break;
      
         default:
            break;
      }
      setNumeroAnterior('0');
   } 
   
   return { 
      numero, 
      numeroAnterior, 
      clear, 
      positiveNegative, 
      deleteLastNumber, 
      dividir,
      multiplicar,
      restar,
      sumar,
      buildNumber,
      calcular,
   }
}
