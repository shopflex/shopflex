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
