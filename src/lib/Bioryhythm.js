import dayjs from "dayjs";

export function Bioryhythm(birthDate, targetDate) {
  return {
    physical: calculateBiorhythm(birthDate, targetDate, 23),
    emotional: calculateBiorhythm(birthDate, targetDate, 28),
    intellectual: calculateBiorhythm(birthDate, targetDate, 33),
  };
}

export const calculateBiorhythmSeries = (birthDate, centralDate, range) => {
  const series = [];
  const centralDay = dayjs(centralDate);
  for (let diff = -range; diff <= range; diff++) {
    const targetDay = centralDay.add(diff, "day");
    const biorhythms = Bioryhythm(birthDate, targetDay);
    series.push({ date: targetDay.format("DD MM"), ...biorhythms });
  }
  return series;
};

function calculateBiorhythm(birthDate, targetDate, cycle) {
  const birthDay = dayjs(birthDate);
  const targetDay = dayjs(targetDate);
  const diff = targetDay.diff(birthDay, "day");
  return Math.sin((2 * Math.PI * diff) / cycle);
}
