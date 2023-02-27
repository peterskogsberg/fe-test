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

type StoreData = {
  result: {
    id: string;
    name: string;
    openingHours: OpeningHours[];
  };
};

export { StoreData };
