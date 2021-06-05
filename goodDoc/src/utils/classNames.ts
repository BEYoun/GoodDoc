/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable @typescript-eslint/no-explicit-any */
export function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}
