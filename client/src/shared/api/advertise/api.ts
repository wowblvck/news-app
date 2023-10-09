import { BASE_URL } from './config';
import { AdvertiseDto } from './types';

const ADVERTISE_URL = '/advertise';

export const getAdvertise = async () => {
  const res = await fetch(`${BASE_URL}${ADVERTISE_URL}?advertise`);
  if (!res.ok) {
    throw new Error('Произошла ошибка');
  }
  const adv: AdvertiseDto[] = await res.json();
  return adv[Math.floor(Math.random() * adv.length)];
};
