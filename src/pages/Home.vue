<template>
    <div class="gc-wrapper">
      <keep-alive max="2">
        <!-- <component
        :is="currentTemp"
        :visible.sync="visible"
        :title="dialogKey"
        :key="dialogKey"> -->
        <component
        :is="currentTemp"
        :visible.sync="visible"
        :title="dialogKey">
        <!-- @update:closeDialog="visible = $event" -->
        </component>
      </keep-alive>
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
                <button @click="toggleTemp">切换模板</button>
            </div>
        </div>
        <div class="gc-footer">
            <nav>
                <ul>
                    <li @click="openDialog('1')">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-clock"></use>
                        </svg>
                        <span>今日</span>
                    </li>
                    <li @click="openDialog('2')">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-icon-test"></use>
                        </svg>
                        <span>项目</span>
                    </li>
                    <li @click="openDialog('3')">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-chart"></use>
                        </svg>
                        <span>统计</span>
                    </li>
                    <li @click="openDialog('4')">
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
import DialogInput from '../components/DialogInput'
import Plan from '../pages/todayPlan/Plan'

export default {
  name: 'Home',
  components: {
    // Plan: () => import('../pages/todayPlan/Plan'),
    Plan: Plan,
    // DialogInput: () => import('../components/DialogInput')
    DialogInput: DialogInput

  },
  data () {
    return {
      visible: false,
      dialogKey: '1'
    }
  },
  computed: {
    currentTemp () {
      return !this.visible ? 'Plan' : 'DialogInput'
    }
  },
  methods: {
    openDialog (dialogKey) {
      this.visible = true
      this.dialogKey = dialogKey
    },
    toggleTemp () {
      this.visible = !this.visible
    }
  },
  mounted () {
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
    background-color: #fff;
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
