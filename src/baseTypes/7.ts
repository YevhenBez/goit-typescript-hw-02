/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum DayOfWeek {
  monday = "workday",
  tuesday = "workday",
  wednesday = "workday",
  thursday = "workday",
  friday = "workday",
  saturday = "day off",
  sunday = "day off",
}

function isWeekend(day: DayOfWeek): boolean {
  if (day === "workday") {
    return true;
  }

  return false;
}

const day = isWeekend(DayOfWeek.thursday);