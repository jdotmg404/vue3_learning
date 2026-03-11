// 替代 mockjs 的随机数生成函数

/**
 * 生成指定范围内的随机整数
 */
export const randomInteger = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

/**
 * 生成指定长度的随机中文字符串
 */
export const randomCWord = (min: number, max: number): string => {
  const length = randomInteger(min, max)
  let result = ''
  for (let i = 0; i < length; i++) {
    // 常用汉字范围：\u4e00-\u9fa5
    result += String.fromCharCode(randomInteger(0x4e00, 0x9fa5))
  }
  return result
}

/**
 * 生成 GUID
 */
export const randomGuid = (): string => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0
    const v = c === 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}
