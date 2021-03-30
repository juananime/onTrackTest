const getLocales = () => [
  { countryCode: 'GB', languageTag: 'en-GB', languageCode: 'en', isRTL: false },
];

const getNumberFormatSettings = () => ({
  decimalSeparator: '.',
  groupingSeparator: ',',
});

const getCalendar = () => 'gregorian';
const getCountry = () => 'GB';
const getCurrencies = () => ['EUR'];
const getTemperatureUnit = () => 'celsius';
const getTimeZone = () => 'Europe/London';
const uses24HourClock = () => true;
const usesMetricSystem = () => true;

const addEventListener = jest.fn();
const removeEventListener = jest.fn();

export {
  getLocales,
  getNumberFormatSettings,
  getCalendar,
  getCountry,
  getCurrencies,
  getTemperatureUnit,
  getTimeZone,
  uses24HourClock,
  usesMetricSystem,
  addEventListener,
  removeEventListener,
};
