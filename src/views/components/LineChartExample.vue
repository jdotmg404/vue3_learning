<script setup lang="ts">
import { ref } from 'vue'
import LineChart from './LineChart.vue'

// 示例数据
const xAxisData = ref(['周一', '周二', '周三', '周四', '周五', '周六', '周日'])
const yAxisData = ref([120, 200, 150, 80, 70, 110, 130])

// 另一个示例数据
const monthData = ref(['1月', '2月', '3月', '4月', '5月', '6月'])
const salesData = ref([820, 932, 901, 934, 1290, 1330])

// 控制选项
const showArea = ref(false)
const smooth = ref(false)
</script>

<template>
  <div class="line-chart-example">
    <h2>折线图组件示例</h2>

    <!-- 控制选项 -->
    <div class="controls">
      <label>
        <input v-model="showArea" type="checkbox" />
        显示区域填充
      </label>
      <label>
        <input v-model="smooth" type="checkbox" />
        平滑曲线
      </label>
    </div>

    <!-- 基础示例 -->
    <div class="chart-section">
      <h3>基础折线图</h3>
      <LineChart
        :x-axis-data="xAxisData"
        :y-axis-data="yAxisData"
        title="周访问量统计"
        x-axis-name="星期"
        y-axis-name="访问量"
        :show-area="showArea"
        :smooth="smooth"
      />
    </div>

    <!-- 带区域填充的示例 -->
    <div class="chart-section">
      <h3>销售趋势图（带区域填充）</h3>
      <LineChart
        :x-axis-data="monthData"
        :y-axis-data="salesData"
        title="月度销售额"
        x-axis-name="月份"
        y-axis-name="销售额（万元）"
        line-color="#67C23A"
        area-color="rgba(103, 194, 58, 0.2)"
        :show-area="true"
        :smooth="true"
        height="350px"
      />
    </div>

    <!-- 自定义颜色示例 -->
    <div class="chart-section">
      <h3>自定义颜色</h3>
      <LineChart
        :x-axis-data="['产品A', '产品B', '产品C', '产品D', '产品E']"
        :y-axis-data="[320, 302, 301, 334, 390]"
        title="产品销量对比"
        line-color="#E6A23C"
        area-color="rgba(230, 162, 60, 0.2)"
        :show-area="showArea"
        :smooth="smooth"
      />
    </div>
  </div>
</template>

<style scoped>
.line-chart-example {
  padding: 20px;
}

.controls {
  margin-bottom: 20px;
  padding: 15px;
  background-color: #f5f7fa;
  border-radius: 8px;
}

.controls label {
  margin-right: 20px;
  cursor: pointer;
}

.chart-section {
  margin-bottom: 30px;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.chart-section h3 {
  margin-top: 0;
  margin-bottom: 15px;
  color: #303133;
  font-size: 16px;
}
</style>
