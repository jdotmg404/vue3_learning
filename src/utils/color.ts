/**
 * 生成随机颜色相关工具函数
 */

/**
 * 生成随机十六进制颜色
 * @returns 十六进制颜色字符串，如 #FF5733
 */
export function randomHexColor(): string {
  return (
    '#' +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0')
      .toUpperCase()
  )
}

/**
 * 生成随机 RGB 颜色
 * @returns RGB 颜色对象 { r, g, b }
 */
export function randomRgbColor(): { r: number; g: number; b: number } {
  return {
    r: Math.floor(Math.random() * 256),
    g: Math.floor(Math.random() * 256),
    b: Math.floor(Math.random() * 256),
  }
}

/**
 * 生成随机 RGB 颜色字符串
 * @returns RGB 颜色字符串，如 rgb(255, 87, 51)
 */
export function randomRgbString(): string {
  const { r, g, b } = randomRgbColor()
  return `rgb(${r}, ${g}, ${b})`
}

/**
 * 生成随机 RGBA 颜色字符串
 * @param alpha 透明度，默认随机 0-1
 * @returns RGBA 颜色字符串，如 rgba(255, 87, 51, 0.5)
 */
export function randomRgbaString(alpha?: number): string {
  const { r, g, b } = randomRgbColor()
  const a = alpha !== undefined ? alpha : Math.random()
  return `rgba(${r}, ${g}, ${b}, ${a.toFixed(2)})`
}

/**
 * 生成随机 HSL 颜色
 * @returns HSL 颜色对象 { h, s, l }
 */
export function randomHslColor(): { h: number; s: number; l: number } {
  return {
    h: Math.floor(Math.random() * 360),
    s: Math.floor(Math.random() * 101),
    l: Math.floor(Math.random() * 101),
  }
}

/**
 * 生成随机 HSL 颜色字符串
 * @returns HSL 颜色字符串，如 hsl(120, 50%, 50%)
 */
export function randomHslString(): string {
  const { h, s, l } = randomHslColor()
  return `hsl(${h}, ${s}%, ${l}%)`
}

/**
 * 生成指定数量的随机颜色数组
 * @param count 颜色数量
 * @param format 颜色格式，默认 'hex'
 * @returns 颜色数组
 */
export function randomColorArray(
  count: number,
  format: 'hex' | 'rgb' | 'rgba' | 'hsl' = 'hex',
): string[] {
  const colors: string[] = []
  const generators: Record<string, () => string> = {
    hex: randomHexColor,
    rgb: randomRgbString,
    rgba: () => randomRgbaString(),
    hsl: randomHslString,
  }

  const generator = generators[format]
  for (let i = 0; i < count; i++) {
    colors.push(generator())
  }
  return colors
}

/**
 * 生成渐变色数组
 * @param count 颜色数量
 * @returns 十六进制颜色数组
 */
export function randomGradientColors(count: number): string[] {
  const baseHue = Math.floor(Math.random() * 360)
  const colors: string[] = []

  for (let i = 0; i < count; i++) {
    const hue = (baseHue + (i * 360) / count) % 360
    const saturation = 70 + Math.random() * 30
    const lightness = 40 + Math.random() * 20
    colors.push(hslToHex(hue, saturation, lightness))
  }

  return colors
}

/**
 * HSL 转十六进制
 * @param h 色相 0-360
 * @param s 饱和度 0-100
 * @param l 亮度 0-100
 * @returns 十六进制颜色
 */
function hslToHex(h: number, s: number, l: number): string {
  s /= 100
  l /= 100

  const c = (1 - Math.abs(2 * l - 1)) * s
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1))
  const m = l - c / 2

  let r = 0
  let g = 0
  let b = 0

  if (h >= 0 && h < 60) {
    r = c
    g = x
    b = 0
  } else if (h >= 60 && h < 120) {
    r = x
    g = c
    b = 0
  } else if (h >= 120 && h < 180) {
    r = 0
    g = c
    b = x
  } else if (h >= 180 && h < 240) {
    r = 0
    g = x
    b = c
  } else if (h >= 240 && h < 300) {
    r = x
    g = 0
    b = c
  } else if (h >= 300 && h < 360) {
    r = c
    g = 0
    b = x
  }

  const toHex = (n: number): string => {
    const hex = Math.round((n + m) * 255).toString(16)
    return hex.length === 1 ? '0' + hex : hex
  }

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase()
}

/**
 * 从预定义的颜色主题中随机选择
 * @returns 主题颜色对象
 */
export function randomThemeColor(): { primary: string; secondary: string; accent: string } {
  const themes = [
    { primary: '#409EFF', secondary: '#67C23A', accent: '#E6A23C' },
    { primary: '#FF6B6B', secondary: '#4ECDC4', accent: '#45B7D1' },
    { primary: '#96CEB4', secondary: '#FFEAA7', accent: '#DDA0DD' },
    { primary: '#F38181', secondary: '#AA96DA', accent: '#FCBAD3' },
    { primary: '#A8E6CF', secondary: '#DCEDC1', accent: '#FFD3B6' },
  ]

  return themes[Math.floor(Math.random() * themes.length)]
}
