/**
 * @param { Object } o
 * @returns { boolean } o is an empty object
 */
export const isEmptyObject = (o) =>
  typeof o !== 'object' || Object.keys(o).length === 0
// loose equal v === null && v === undefined
export const isVoid = (v) => v == null || v === ''
export const isUnDef = (v) => v == null
export const isDef = (v) => v != null
