import moment from 'moment';
import 'moment/locale/ru';
import React from 'react';
import { getCurrency } from '@/shared/api/currency';
import { CurrencyCodeFrom, CurrencyCodeTo } from '@/shared/api/currency';
import { ChipCard } from './chip-card';
import styles from './styles.module.scss';

export const DateAndCurrencyInfo = async () => {
  const currentDate = moment().locale('ru').format('dd, D.MM.YYYY').toUpperCase();
  const currencies = await getCurrency({
    currencyFrom: ['USD', 'EUR', 'BTC'],
    currencyTo: ['RUB', 'USD'],
  });

  const renderChipCard = (currencyFrom: CurrencyCodeFrom, currencyTo: CurrencyCodeTo) => {
    if (currencies && currencies[currencyFrom]) {
      return <ChipCard icon={currencyFrom}>{currencies[currencyFrom][currencyTo]}</ChipCard>;
    }
    return null;
  };

  return (
    <div className={styles.container}>
      <ChipCard icon={'date'}>{currentDate}</ChipCard>
      {renderChipCard('USD', 'RUB')}
      {renderChipCard('EUR', 'RUB')}
      {renderChipCard('BTC', 'USD')}
    </div>
  );
};
