## ReduxStoreProvider

[![npm](https://img.shields.io/npm/v/@sanonz/vue-paginator.svg)](https://www.npmjs.com/package/@sanonz/vue-paginator) ![Github file size](https://img.shields.io/github/size/sanonz/vue-paginator/dist/paginator.umd.min.js.svg) ![npm](https://img.shields.io/npm/dw/@sanonz/vue-paginator.svg)

Vue 简约分页插件，整个组件代码只有 100 多行，非常精简，此组建的诞生是有洁癖症患者的福音。

* [安装](#安装)
* [手册](#手册)
* [例子](#例子)


## 安装
```shell
npm install @sanonz/vue-paginator --save
```

## 手册
```vue
<style>
.paginator-wrap{display:inline-block;margin-top:100px;}
.paginator-wrap a{cursor:pointer;color:#2cd6ff;user-select:none}
.paginator{list-style-type:none;padding:0;color:#333;line-height:100%;overflow:hidden;border:1px solid #e2e2e2;border-radius:4px;}
.paginator-item{float:left;border-right:1px solid #e2e2e2;}
.paginator-item:last-child{border-right:none;}
.paginator-active{background-color:#f3f3f3;}
.paginator-row{display:block;padding:6px 12px;}
</style>

<template>
  <div class="paginator-wrap">
    <paginator
      :range="2"
      :page="page"
      :size="20"
      :total="2000"
      prevText="Prev"
      nextText="Next"
      @change="onPageChange"
    />
  </div>
</template>

<script>
  import Paginator from '@sanonz/vue-paginator';


  export default {
    components: {
      Paginator,
    },
    data: function() {
      return {
        isMounted: false,
      };
    },
    mounted: function() {
      this.isMounted = true;
    },
    beforeDestroy: function() {
      this.isMounted = false;
    },
    methods: {
      onPageChange(page) {
        this.page = page;
      },
    },
  };
</script>
```

### 参数

| Name | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| page | `Number` | `null` | `true` | 当前页码，在路由中可以使用 `this.$route.query.page` 获取 |
| size | `Number` | `20` | `false` | 每页展示条数 |
| total | `Number` | `null` | `true` | 总条数 |
| range | `Number` | `2` | `false` | 当前页码左右两侧的页面展示个数 |
| prevText | `String` | `上一页` | `false` | 上一页显示文本 |
| nextText | `String` | `下一页` | `false` | 下一页显示文本 |

## 例子

[https://sanonz.github.io/vue-paginator/examples/](https://sanonz.github.io/vue-paginator/examples/)
