<script setup lang="ts">
import { ref, onMounted } from 'vue'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import 'katex/dist/katex.min.css'
import { VueMarkdown } from '@crazydos/vue-markdown'
import { createHighlighter, type Highlighter } from 'shiki'

// 定义 props，支持传入 markdown 字符串或已加载的 markdown 内容
defineProps<{
  markdown?: string
}>()

// 初始化语法高亮器
const highlighter = ref<Highlighter | null>(null)
const isHighlighterReady = ref(false)

// 异步初始化 highlighter
onMounted(async () => {
  try {
    highlighter.value = await createHighlighter({
      themes: ['github-dark'],
      langs: [
        'javascript',
        'typescript',
        'vue',
        'vue-html',
        'python',
        'java',
        'cpp',
        'csharp',
        'go',
        'rust',
        'sql',
        'html',
        'css',
        'scss',
        'json',
        'yaml',
        'shellscript',
        'bash',
        'xml',
      ],
    })
    isHighlighterReady.value = true
  } catch (error) {
    console.error('Failed to initialize Shiki:', error)
  }
})

// 转义 HTML 特殊字符
const escapeHtml = (text: string | undefined | null): string => {
  if (!text) return ''
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  }
  return text.replace(/[&<>"']/g, (m) => map[m]!)
}

// 自定义代码块渲染器
const codeBlockRenderer = (
  code: string | undefined | null,
  language: string | undefined | null,
): string => {
  const safeCode = code || ''
  const safeLang = language || 'text'

  if (!highlighter.value || !isHighlighterReady.value) {
    return `<pre><code class="language-${safeLang}">${escapeHtml(safeCode)}</code></pre>`
  }

  try {
    return highlighter.value.codeToHtml(safeCode, {
      lang: safeLang,
      theme: 'github-dark',
    })
  } catch (error) {
    console.error('Failed to highlight code:', error)
    return `<pre><code>${escapeHtml(safeCode)}</code></pre>`
  }
}
</script>

<template>
  <div class="markdown-container">
    <VueMarkdown
      :markdown="markdown || ''"
      :remark-plugins="[remarkGfm, remarkMath]"
      :rehype-plugins="[rehypeKatex]"
    >
      <template #code="{ content, language, inline }">
        <div
          v-if="!inline"
          class="code-block-wrapper"
          v-html="codeBlockRenderer(content, language)"
        />
        <code v-else class="inline-code">{{ content }}</code>
      </template>
    </VueMarkdown>
  </div>
</template>

<style>
.markdown-container {
  margin-top: 1rem;
}

/* 代码块容器 */
.markdown-container .code-block-wrapper {
  margin: 1rem 0;
}

.markdown-container .code-block-wrapper pre {
  background-color: #0d1117;
  padding: 1rem;
  border-radius: 6px;
  overflow-x: auto;
  font-size: 0.875rem;
  line-height: 1.6;
  margin: 0;
}

.markdown-container .code-block-wrapper code {
  font-family: 'Fira Code', 'Consolas', monospace;
  font-size: 0.875rem;
  line-height: 1.6;
}

/* 滚动条美化 */
.markdown-container .code-block-wrapper pre::-webkit-scrollbar {
  height: 8px;
}

.markdown-container .code-block-wrapper pre::-webkit-scrollbar-track {
  background: #161b22;
  border-radius: 4px;
}

.markdown-container .code-block-wrapper pre::-webkit-scrollbar-thumb {
  background: #30363d;
  border-radius: 4px;
}

.markdown-container .code-block-wrapper pre::-webkit-scrollbar-thumb:hover {
  background: #484f58;
}

/* 行内代码样式 */
.markdown-container .inline-code {
  background-color: #f0f0f0;
  padding: 0.2rem 0.4rem;
  border-radius: 3px;
  color: #e83e8c;
  font-family: 'Fira Code', 'Consolas', monospace;
  font-size: 0.875rem;
}
</style>
