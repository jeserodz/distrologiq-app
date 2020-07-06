import {format, startOfDay, addSeconds} from 'date-fns';

export function displayDuration(duration: number | null | undefined) {
  if (!duration) return 'N/D';
  const date = addSeconds(startOfDay(0), duration);
  return format(date, 'H:mm:ss');
}

export function displayDistance(distance: number) {
  return `${(distance / 1000).toFixed(1)} KM`;
}

// export function getRoutePerformance();
