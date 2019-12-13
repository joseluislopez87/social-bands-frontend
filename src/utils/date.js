import {
  formatDistanceToNow,
  differenceInDays,
  format
} from 'date-fns';

// Return the date distance until a certain point in the past
// return a formatted date otherwise.
const timeFormat = (timestamp, distanceLimit = 7) => {
  if(differenceInDays(Date.now(), timestamp) > distanceLimit) {
    return format(timestamp, 'd MMM yyy');
  }
  return formatDistanceToNow(timestamp) + ' ago';
}

export default timeFormat;