export type CurrencyCodeFrom = 'USD' | 'EUR' | 'BTC';
export type CurrencyCodeTo = 'USD' | 'RUB';

export type CurrencyDto = {
  [currency in CurrencyCodeFrom]: {
    [targetCurrency in CurrencyCodeTo]: number;
  };
};
