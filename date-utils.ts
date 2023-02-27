const US_LOCALE = 'us-EN';

const getNameOfCurrentDay = () =>
  new Intl.DateTimeFormat(US_LOCALE, {
    weekday: 'long',
  }).format(new Date());

export { getNameOfCurrentDay };
