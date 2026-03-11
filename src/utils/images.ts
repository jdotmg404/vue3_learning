// 自动导入所有图片资源
// 使用 Vite 的 import.meta.glob 特性

const imageModules = import.meta.glob('@/assets/images/*', {
  eager: true,
  import: 'default',
})

/**
 * 获取图片路径
 * @param filename 图片文件名（如 'slots.png'）
 * @returns 图片的完整路径
 * @example
 * getImage('slots.png') // 返回 '/src/assets/images/slots.png' 的构建后路径
 */
export const getImage = (filename: string): string => {
  const path = `/src/assets/images/${filename}`
  const module = imageModules[path]

  if (!module) {
    console.warn(`[getImage] 图片未找到: ${filename}`)
    return ''
  }

  return module as string
}

/**
 * 图片路径快捷访问对象
 * 可以直接通过 images.xxx 访问常用图片
 * @example
 * images.slots // 返回 slots.png 的路径
 * images.directive // 返回 directive.png 的路径
 */
export const images: Record<string, string> = {
  // 自动生成的图片映射
}

// 动态生成图片映射
Object.keys(imageModules).forEach((path) => {
  const filename = path.split('/').pop()?.replace(/\.(png|jpg|jpeg|svg|gif|webp)$/i, '') || ''
  if (filename) {
    images[filename] = imageModules[path] as string
  }
})

export default images
