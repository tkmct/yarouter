export const delay = (n: number) =>
  new Promise(resolve => {
    setTimeout(resolve, n)
  })

export function trimTrailingSlash(str: string): string {
  return str.replace(/\/+$/, '')
}
