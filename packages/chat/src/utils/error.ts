/**
 * Stringify an Error instance
 * @param  err - The error to stringify
 * @return {string}
 */
function stringifyErrorValue(err: Error): string {
  return `${err.name.toUpperCase()}: ${err.message}
  ${err.stack || '(no stack trace information)'}`
}

/**
 * Stringify a thrown value
 *
 * @param {any} errorDescription
 * @param {any} err
 * @return {string}
 */
export function stringifyError(
  errorDescription: any,
  err: any,
): string {
  return `${errorDescription}\n${
    err instanceof Error
      ? stringifyErrorValue(err)
      : err
      ? '' + err
      : '(missing error information)'
  }`
}
