import moment from 'moment';

export const diffDates = (date) => {
  const now = moment(new Date()); // 2021-03-12T22:18:37.672Z
  const date2 = moment(date);
  const duration = moment.duration(now.diff(date2));
  const days = `há ${Math.ceil(duration.asDays()) - 1} dias`;
  const hours = `há ${Math.ceil(duration.asHours()) - 1} horas`;

  if (duration.asHours() < 24) {
    return hours;
  }
  return days;
};
