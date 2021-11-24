/**
 * @param { Object } o
 * @returns { boolean } o is an empty object
 */
export const isEmptyObject = (o) =>
  typeof o !== 'object' || Object.keys(o).length === 0
export const isVoid = (v) => v === null || v === undefined || v === ''
export const isUnDef = (v) => v === null || v === undefined
export const isDef = (v) => v !== null && v !== undefined
export const navigateToOrigin = () =>
  (window.location.href = window.location.origin)

const emailRE =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
export const isEmail = (val) => emailRE.test(val)

export const formatMessage = (message = '') => {
  if (!message) return message
  return `${message[0].toUpperCase()}${message.substring(1)}`
}

/**
 * Pick value by keys.
 * @param { {[key in string]: any } } obj
 * @param { string[] } keys
 * @returns { {[key in string]: any} }
 * @example pick({a: 'a', b: 'b'}, ['a']) = {a: 'a'}
 */
export const pick = (obj, keys) => {
  return keys.reduce((prev, key) => {
    prev[key] = obj[key]
    return prev
  }, {})
}
