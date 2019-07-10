<template>
    <div class="gc-wrapper">
        <div class="gc-header">
            <div class="setting-right">
                <svg class="setting-icon" aria-hidden="true">
                    <use xlink:href="#icon-clock"></use>
                </svg>
            </div>
            <h3 class="nav-title">今日</h3>
        </div>
        <div class="gc-container">
            <div class="task-progress">

            </div>
        </div>
        <div class="gc-footer">
            <nav>
                <ul>
                    <li>
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-clock"></use>
                        </svg>
                        <span>今日</span>
                    </li>
                    <li>
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-icon-test"></use>
                        </svg>
                        <span>项目</span>
                    </li>
                    <li>
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-chart"></use>
                        </svg>
                        <span>统计</span>
                    </li>
                    <li>
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-more"></use>
                        </svg>
                        <span>更多</span>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
   return {

   }
  },
  mounted () {
      console.log(`这是组件首页`)
  }
}
</script>

<style scoped lang="scss">
@import '../css/layout.scss';
.icon {
    width: 2rem;
    height: 2rem;
    vertical-align: .65rem;
    fill: currentColor;
    overflow: hidden;
}
.setting-icon {
    width: 2rem;
    height: 2rem;
    position: absolute;
    left: 3vh;
    top: 3vh;
    margin-left: -1rem;
    margin-top: -1rem;
    fill: currentColor;
    overflow: hidden;
}
.task-progress {
    height: 9vh;
    width: 100%;
    background-color: rgba(59, 105, 204, 0.452);
}
</style>
