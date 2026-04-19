export const RESUME_TIME_ZONE = "America/Sao_Paulo";

export const PERSONAL_INFO = {
  fullName: "Allan da Silva Pereira",
  shortName: "Allan",
  birthDate: {
    year: 2004,
    month: 1,
    day: 23,
  },
  birthDateLabel: "23/01/2004",
  location: "São José dos Pinhais - PR",
  phone: "41 98447-6869",
  email: "allansilvapereirae@gmail.com",
  github: "github.com/allan-xln",
  website: "lanfuture.dev",
  onlineResume: "meetallan.com",
} as const;

type DateParts = {
  year: number;
  month: number;
  day: number;
};

function getDatePartsInTimeZone(date: Date, timeZone: string): DateParts {
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone,
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });

  const parts = formatter.formatToParts(date);
  const values = Object.fromEntries(
    parts
      .filter((part) => part.type === "year" || part.type === "month" || part.type === "day")
      .map((part) => [part.type, Number(part.value)]),
  ) as Record<"year" | "month" | "day", number>;

  return {
    year: values.year,
    month: values.month,
    day: values.day,
  };
}

export function getCurrentDateParts(timeZone = RESUME_TIME_ZONE, now = new Date()): DateParts {
  return getDatePartsInTimeZone(now, timeZone);
}

export function getCurrentAge(timeZone = RESUME_TIME_ZONE, now = new Date()): number {
  const today = getCurrentDateParts(timeZone, now);
  const { year, month, day } = PERSONAL_INFO.birthDate;

  let age = today.year - year;
  const birthdayPassed =
    today.month > month || (today.month === month && today.day >= day);

  if (!birthdayPassed) {
    age -= 1;
  }

  return age;
}

export function getAgeLabel(lang: "pt" | "en", timeZone = RESUME_TIME_ZONE, now = new Date()) {
  const age = getCurrentAge(timeZone, now);
  return lang === "pt" ? `${age} anos` : `${age} years old`;
}
