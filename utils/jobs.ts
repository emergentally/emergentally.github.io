// Current job vacancy. To change the closing date, edit `closingDate`.
// After the closing date, the job page shows "Applications for this role
// have closed" and the home page banner and "We're hiring" section disappear.
// To close the role early, set `open` to false.
export const currentJob = {
  open: true,
  closingDate: '2026-11-08',
  path: '/who-we-are/jobs/data-platform-support-specialist/',
  applyUrl: 'https://forms.emergentally.com/r/aO9gzZ',
}

// Applications close at the end of the closing date (Nairobi time).
export function isJobOpen(now: Date = new Date()): boolean {
  const closesAt = new Date(`${currentJob.closingDate}T23:59:59+03:00`)
  return currentJob.open && now <= closesAt
}

// Evaluated at build time and again in the browser, so a statically generated
// page still updates after the closing date without a rebuild.
export function useJobOpen() {
  const open = ref(isJobOpen())
  onMounted(() => { open.value = isJobOpen() })
  return open
}
