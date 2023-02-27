import { Day, OpeningHours, StoreData } from './types';

const US_LOCALE = 'us-EN';

const getNameOfCurrentDay = () =>
  new Intl.DateTimeFormat(US_LOCALE, {
    weekday: 'long',
  }).format(new Date()) as Day;

const getOpeningHoursForCurrentDay = (
  day: Day,
  openingHours: OpeningHours[]
): OpeningHours => openingHours.find((oh) => oh.day === day);

const isStoreCurrentlyOpen = (openingHours: OpeningHours[]): boolean => {
  // Get today's opening and closing hours
  const today = getNameOfCurrentDay();
  const todaysOpeningHours = getOpeningHoursForCurrentDay(today, openingHours);
  const { opensAt, closesAt } = todaysOpeningHours;

  // Parse as numeric (assuming whole hours)
  const opensAtNumeric = parseInt(opensAt);
  const closesAtNumeric = parseInt(closesAt);
  const currentHour = new Date().getHours();

  // Verify whether current hour is within the opening interval
  console.log({ opensAtNumeric, closesAtNumeric, currentHour });
  return currentHour >= opensAtNumeric && currentHour < closesAtNumeric;
};

export { getNameOfCurrentDay, isStoreCurrentlyOpen };
