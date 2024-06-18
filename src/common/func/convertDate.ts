import moment from 'moment';
export function convertUtcToUtc7(
  utcDateString: string,
  format = 'YYYY-MM-DD HH:mm:ss'
) {
  return moment(utcDateString).add(7, 'hours').format(format);
}
