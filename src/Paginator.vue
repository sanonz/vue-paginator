<template>
  <ul
    v-if="total || count > 1"
    class="paginator"
  >
    <li class="paginator-item">
      <a
        v-if="page !== 1"
        class="paginator-row"
        @click="onChange(page - 1)"
      >{{prevText}}</a>
      <span
        v-else
        class="paginator-row"
      >{{prevText}}</span>
    </li>
    <template v-if="page > range + 1">
      <li class="paginator-item">
        <a
          class="paginator-row"
          @click="onChange(1)"
        >1</a>
      </li>
      <li class="paginator-item">
        <span class="paginator-row">...</span>
      </li>
    </template>
    <li
      v-for="v in loop"
      v-if="v + left - 1 > 0"
      :key="v"
      :class="{['paginator-item']: true, ['paginator-active']: v + left - 1 === page}"
    >
      <a
        class="paginator-row"
        @click="onChange(v + left - 1)"
      >{{v + left - 1}}</a>
    </li>
    <template v-if="right < count">
      <li class="paginator-item">
        <span class="paginator-row">...</span>
      </li>
      <li class="paginator-item">
        <a
          class="paginator-row"
          @click="onChange(count)"
        >{{count}}</a>
      </li>
    </template>
    <li class="paginator-item">
      <a
        v-if="page !== count"
        class="paginator-row"
        @click="onChange(page + 1)"
      >{{nextText}}</a>
      <span
        v-else
        class="paginator-row"
      >{{nextText}}</span>
    </li>
  </ul>
</template>

<script>
  export default {
    props: {
      page: {
        type: Number,
        required: true,
      },
      size: {
        type: Number,
        default: 20,
      },
      total: {
        type: Number,
        required: true,
      },
      range: {
        type: Number,
        default: 2,
      },
      prevText: {
        type: [String, Number],
        default: '上一页',
      },
      nextText: {
        type: [String, Number],
        default: '下一页',
      },
    },
    data: function() {
      return {};
    },
    computed: {
      count: function() {
        return Math.ceil(this.total / this.size);
      },
      left: function() {
        return this.page - this.range;
      },
      right: function() {
        return this.page + this.range;
      },
      loop: function() {
        const result = Math.min(this.right, this.count) - this.left + 1;

        return result < 0 ? 0 : result;
      },
    },
    methods: {
      onChange(page) {
        this.router(page);
        this.$emit('change', page);
      },
      router(page) {
        const path = [
          this.$route.path,
          this.paramsSerializer({...this.$route.query, page}),
        ];
        this.$router.replace(path.join('?'));
      },
      paramsSerializer(params) {
        const result = [];

        for(let key in params) {
          result.push(key + '=' + encodeURIComponent(params[key]));
        }

        return result.join('&');
      },
    },
  };
</script>
