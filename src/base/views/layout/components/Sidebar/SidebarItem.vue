<template>
    <div class="menu-wrapper">
        <template v-for="route in routes">
            <template v-if="route.items">
                <el-submenu :index="route.code||route.path" :key="route.code">
                    <template slot="title">
                        <i v-if="route.icon" :class="route.icon"></i>
<!--                        <svg-icon v-if="route.icon" :icon-class="route.icon"></svg-icon>-->
                        <span v-if="route.label" slot="title">{{route.label}}</span>
                    </template>
                    <template v-for="child in route.items">
                        <sidebar-item :is-nest="true" class="nest-menu" v-if="child.items&&child.items.length>0"
                                      :routes="[child]" :key="child.code"></sidebar-item>

                        <router-link v-else :to="child.url" :key="child.code">
                            <el-menu-item :index="child.code">
                                <i v-if="child.icon" :class="child.icon"></i>
<!--                                <svg-icon v-if="child.icon" :icon-class="child.icon"></svg-icon>-->
                                <span v-if="child.label" slot="title">{{child.label}}</span>
                            </el-menu-item>
                        </router-link>
                    </template>
                </el-submenu>
            </template>
        </template>
    </div>
</template>

<script>
export default {
  name: 'SidebarItem',
  props: {
    routes: {
      type: Array
    },
    isNest: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    hasOneShowingChildren (children) {
      const showingChildren = children.filter(item => {
        return !item.hidden
      })
      if (showingChildren.length === 1) {
        return true
      }
      return false
    }
  }
}
</script>
