export function sortItemsByPriorityAndDate(a, b) {
  let calcPriority =
    (a.priority ? a.priority : 0) - (b.priority ? b.priority : 0);
  let calcDate = Date.parse(a.date) - Date.parse(b.date);
  if (calcPriority > 0) return -1;
  else if (calcPriority < 0) return 1;
  else {
    if (calcDate > 0) return -1;
    else return 1;
  }
}
