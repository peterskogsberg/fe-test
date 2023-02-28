import * as React from 'react';
import { getNameOfCurrentDay } from './date-utils';
import { StoreOpenIndicator } from './StoreOpenIndicator';

import './style.css';

const STORE_ID: number | null = 513;

export default function App() {
  const day = getNameOfCurrentDay();
  const greetingMessage = `Hello fellow frontender! Today is ${day}`;

  return (
    <div>
      <h1>XXL - store indicator</h1>
      {greetingMessage}
      <br />
      {STORE_ID !== null && <StoreOpenIndicator storeId={STORE_ID} />}
    </div>
  );
}
