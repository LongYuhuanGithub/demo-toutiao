<template>
  <div class="home-container">
    <van-nav-bar title="黑马头条" fixed />

    <!-- 下拉刷新 -->
    <van-pull-refresh v-model="isLoading" :disabled="finished" @refresh="onRefresh">
      <!-- 滑倒最低部会触发 load 事件 -->
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <ArticleItem
          v-for="item in articleList"
          :key="item.art_id"
          :title="item.title"
          :autName="item.aut_name"
          :commCount="item.comm_count"
          :pubdate="item.pubdate"
          :cover="item.cover"
        />
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import { getArticleListAPI } from '@/api/articleAPI.js'
import ArticleItem from '@/components/article/ArticleItem.vue'

export default {
  created() {
    this.initArticleList()
  },
  data() {
    return {
      articleList: [],
      page: 1,
      limit: 10,
      // 是否正在加载下一页，如果 loading 为 true 则不会反复触发 load 事件
      loading: true,
      // 所有数据是否加载完毕，如果没有更多数据，一定要把 finished 改为 true
      finished: false,
      // 是否正在下拉刷新
      isLoading: false
    }
  },
  methods: {
    async initArticleList(isRefresh) {
      const { data } = await getArticleListAPI(this.page, this.limit)
      if (isRefresh) {
        // 下拉属性，把新数据拼在旧数据前面
        this.articleList = [...data, ...this.articleList]
        // 将 isLoading 改成 false 表示加载完毕
        this.isLoading = false
      } else {
        // 上拉加载更多，把新数据拼在旧数据后面
        this.articleList = [...this.articleList, ...data]
        // 将 loading 改成 false 表示加载完毕
        this.loading = false
      }

      // 如果没有更多数据了，把 finished 改成 true
      if (data.length === 0) this.finished = true
    },
    // 调用此方法 loading 会变成 true
    onLoad() {
      this.page++
      this.initArticleList()
    },
    onRefresh() {
      this.page++
      this.initArticleList(true)
    }
  },
  components: {
    ArticleItem
  }
}
</script>

<style lang="less" scoped>
.home-container {
  padding: 46px 0 50px 0;
  // 使用定制主题，不用自己加样式
  // .van-nav-bar {
  //   background-color: #007bff;
  //   /deep/ .van-nav-bar__title {
  //     color: #fff;
  //   }
  // }
}
</style>
