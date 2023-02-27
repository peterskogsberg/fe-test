import * as React from 'react';
import { getNameOfCurrentDay } from './date-utils';
import { StoreOpenIndicator } from './StoreOpenIndicator';
import './style.css';

const STORE_ID: number | null = 505;

export default function App() {
  const day = getNameOfCurrentDay();
  const todayMessage = `Hello fellow frontender! Today is ${day}`;
  return (
    <div>
      <h1>XXL - store indicator</h1>
      {todayMessage}
      {STORE_ID !== null && <StoreOpenIndicator storeId={STORE_ID} />}
      <p>Styling is not the most important :)</p>
    </div>
  );
}
