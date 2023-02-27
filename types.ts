// Locale 'us-EN'
type Day =
  | 'Sunday'
  | 'Monday'
  | 'Tuesday'
  | 'Wednesday'
  | 'Thursday'
  | 'Friday'
  | 'Saturday';

type OpeningHours = {
  closed: boolean;
  closesAt: string;
  day: Day;
  opensAt: string;
};

type StoreDataResult = {
  id: string;
  name: string;
  openingHours: OpeningHours[];
};

type StoreData = {
  result: StoreDataResult[];
};

export { Day, OpeningHours, StoreData };
