<template>
    <el-menu class="navbar" mode="horizontal">
        <hamburger class="hamburger-container" :toggleClick="toggleSideBar" :isActive="sidebar.opened"></hamburger>
        <breadcrumb></breadcrumb>
        <div class="navbar-toolbar">
            <div class="welcome" v-if="userInfo">
                <span class="name">Hi, </span>
                <span class="name avatar-name">{{userInfo.name}}</span>
            </div>
            <el-dropdown class="system navbar-toolbar-item" trigger="click">
                <i class="el-icon-menu"></i>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item v-for="item in businessList" :key="item.code" @click.native="clickToPickBusiness(item.code)">
                    {{ item.name }}
                  </el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
            <el-dropdown class="avatar navbar-toolbar-item" trigger="click">
                <img class="avatar-icon" src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif">
                <el-dropdown-menu slot="dropdown">
                    <router-link class="inlineBlock" to="/">
                        <el-dropdown-item>
                            首页
                        </el-dropdown-item>
                    </router-link>
                    <el-dropdown-item divided>
                        <span @click="logout" style="display:block;">退出</span>
                    </el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </el-menu>
</template>

<script>
import { mapGetters } from 'vuex'
import Breadcrumb from '@base/components/Breadcrumb'
import Hamburger from '@base/components/Hamburger'
import { setBusinessKey } from '@base/utils/logicUtils'

export default {
  components: {
    Breadcrumb,
    Hamburger
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'userInfo',
      'businessList'
    ])
  },
  methods: {
    toggleSideBar () {
      this.$store.dispatch('ToggleSideBar')
    },
    logout () {
      this.$store.dispatch('LogOut').then(() => {
        // 为了重新实例化vue-router对象 避免bug
        location.reload()
      })
    },
    clickToPickBusiness (code) {
      setBusinessKey(code)
      location.reload()
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    @import './index';
</style>
