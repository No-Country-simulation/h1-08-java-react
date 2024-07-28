import { format } from 'date-fns'
import { es, enUS } from "date-fns/locale";

export default function formatDate(date, locales) {
  const locale = locales === "es" ? es : enUS
  const strToday = locales == "es" ? "Hoy," : "Today,"
  return format(
    date,
    `'${strToday}' EEEE d 'de' MMMM yyyy`,
    { locale }
  )
}

export function getRandomDate(start, end) {
  const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  return date;
}