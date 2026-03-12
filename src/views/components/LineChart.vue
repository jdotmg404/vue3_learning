<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'
import * as echarts from 'echarts'

interface LineChartProps {
  // X轴数据（文本数组）
  xAxisData: string[]
  // Y轴数据（数量数组）
  yAxisData: number[]
  // 图表标题
  title?: string
  // X轴名称
  xAxisName?: string
  // Y轴名称
  yAxisName?: string
  // 线条颜色
  lineColor?: string
  // 区域填充颜色
  areaColor?: string
  // 图表高度
  height?: string | number
  // 是否显示区域填充
  showArea?: boolean
  // 是否显示数据点
  showPoints?: boolean
  // 是否平滑曲线
  smooth?: boolean
}

const props = withDefaults(defineProps<LineChartProps>(), {
  title: '',
  xAxisName: '',
  yAxisName: '',
  lineColor: '#409EFF',
  areaColor: 'rgba(64, 158, 255, 0.2)',
  height: '300px',
  showArea: false,
  showPoints: true,
  smooth: false,
})

const chartRef = ref<HTMLDivElement>()
let chartInstance: echarts.ECharts | null = null

// 初始化图表
const initChart = () => {
  if (!chartRef.value) return

  chartInstance = echarts.init(chartRef.value)
  updateChart()
}

// 更新图表配置
const updateChart = () => {
  if (!chartInstance) return

  const option: echarts.EChartsOption = {
    title: props.title
      ? {
          text: props.title,
          left: 'center',
          textStyle: {
            fontSize: 16,
            fontWeight: 'normal',
          },
        }
      : undefined,
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'line',
      },
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      name: props.xAxisName,
      data: props.xAxisData,
      axisLine: {
        lineStyle: {
          color: '#909399',
        },
      },
      axisLabel: {
        color: '#606266',
      },
    },
    yAxis: {
      type: 'value',
      name: props.yAxisName,
      axisLine: {
        lineStyle: {
          color: '#909399',
        },
      },
      axisLabel: {
        color: '#606266',
      },
      splitLine: {
        lineStyle: {
          color: '#E4E7ED',
        },
      },
    },
    series: [
      {
        name: props.yAxisName || '数值',
        type: 'line',
        data: props.yAxisData,
        smooth: props.smooth,
        symbol: props.showPoints ? 'circle' : 'none',
        symbolSize: 8,
        lineStyle: {
          color: props.lineColor,
          width: 2,
        },
        itemStyle: {
          color: props.lineColor,
        },
        areaStyle: props.showArea
          ? {
              color: props.areaColor,
            }
          : undefined,
      },
    ],
  }

  chartInstance.setOption(option)
}

// 监听数据变化
watch(
  () => [props.xAxisData, props.yAxisData],
  () => {
    updateChart()
  },
  { deep: true },
)

// 监听其他属性变化
watch(
  () => [props.title, props.lineColor, props.areaColor, props.showArea, props.smooth],
  () => {
    updateChart()
  },
)

// 处理窗口大小变化
const handleResize = () => {
  chartInstance?.resize()
}

onMounted(() => {
  initChart()
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
  chartInstance?.dispose()
  chartInstance = null
})
</script>

<template>
  <div
    ref="chartRef"
    :style="{ height: typeof height === 'number' ? `${height}px` : height }"
    class="line-chart"
  ></div>
</template>

<style scoped>
.line-chart {
  width: 100%;
}
</style>
