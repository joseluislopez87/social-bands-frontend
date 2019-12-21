import {
  formatDistanceToNow,
  differenceInDays,
  format,
  parseISO
} from 'date-fns';

// Return the date distance until a certain point in the past
// return a formatted date otherwise.
const timeFormat = (timestamp, distanceLimit = 7) => {
  const time = parseISO(timestamp);

  if(differenceInDays(Date.now(), time) > distanceLimit) {
    return format(time, 'd MMM yyy');
  }
  return formatDistanceToNow(time, { addSuffix: true }).replace('about', '');
}

export default timeFormat;