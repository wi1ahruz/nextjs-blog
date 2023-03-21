import { format, parseISO } from 'date-fns';

interface DateString {
  dateString: string;
}

export default function Date({ dateString }: DateString) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, 'LLL d, yyyy')}</time>;
}
