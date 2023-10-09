import { BASE_URL, API_KEY } from './config';
import type { CurrencyDto, CurrencyCodeFrom, CurrencyCodeTo } from './types';

const MULTI_CURRENCY_URL = '/pricemulti';

type GetCurrencyListProps = {
  currencyFrom: CurrencyCodeFrom[];
  currencyTo: CurrencyCodeTo[];
};

export const getCurrency = async ({ currencyFrom, currencyTo }: GetCurrencyListProps) => {
  const res = await fetch(
    `${BASE_URL}${MULTI_CURRENCY_URL}?fsyms=${currencyFrom.join(',')}&tsyms=${currencyTo.join(
      ','
    )}`,
    {
      headers: {
        Authorization: `Apikey ${API_KEY}`,
      },
    }
  );
  if (!res.ok) {
    throw new Error('Произошла ошибка');
  }
  const currencies: CurrencyDto = await res.json();
  return currencies;
};
