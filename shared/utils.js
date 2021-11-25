/**
 * @param { Object } o
 * @returns { boolean } o is an empty object
 */
export const isEmptyObject = (o) =>
  typeof o !== 'object' || Object.keys(o).length === 0
export const isPlainObject = (o) =>
  Object.prototype.toString.call(o) === '[object Object]'
export const isVoid = (v) => v === null || v === undefined || v === ''
export const isUnDef = (v) => v === null || v === undefined
export const isDef = (v) => v !== null && v !== undefined
export const isNumber = (v) =>
  typeof v === 'number' || !Number.isNaN(parseInt(v))

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

/**
 * Freeze an object.
 * @param {*} obj
 * @returns Freezed object.
 */
export const freeze = (obj) => (Object.freeze ? Object.freeze(obj) : obj)

/**
 * @param {*} obj
 * @example clear({a: 'aaa', b: undefined, c: ''}) => {a: 'aaa'}
 * @returns {object}
 */
export const clear = (obj) => {
  if (!isPlainObject(obj)) {
    return {}
  }

  return Object.keys(obj).reduce((prev, key) => {
    if (!isVoid(obj[key])) {
      prev[key] = obj[key]
    }
    return prev
  }, {})
}
