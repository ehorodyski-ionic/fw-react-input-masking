import React, { useCallback, useRef, useState } from 'react';
import { IonInput } from '@ionic/react';
import IMask from 'imask';

interface CurrencyInputProps {
  value: any;
  onChange: (val: any) => any;
}

const CurrencyInput: React.FC<CurrencyInputProps> = ({ value, onChange }) => {
  const maskRef = useRef<IMask.InputMask<any> | null>(null);

  const inputCallback = useCallback(
    async (input: HTMLIonInputElement) => {
      if (!input) return;
      const nativeInput = await input.getInputElement();

      const mask = IMask(nativeInput, {
        mask: Number,
        thousandsSeparator: ',',
      }).on('accept', (e: any) => {
        mask.updateValue();
        onChange(mask.value);
        console.log('accept', mask.value);
        mask.updateValue();
      });

      maskRef.current = mask;
    },
    [onChange],
  );

  return <IonInput value={value} ref={inputCallback} />;
};
export default CurrencyInput;
