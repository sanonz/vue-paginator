import vue from 'rollup-plugin-vue';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';


const config = {
  input: 'src/Paginator.vue',
  output: [{
    file: 'dist/paginator.cjs.js',
    format: 'cjs',
  }, {
    file: 'dist/paginator.umd.js',
    format: 'umd',
    name: 'Paginator',
    globals: {},
  }, {
    file: 'dist/paginator.es.js',
    format: 'es',
  }],
  external: ['vue', 'vue-router'],
  plugins: [
    resolve(),
    vue({
      css: false,
      compileTemplate: true,
    }),
    babel({
      babelrc: false,
      exclude: 'node_modules/**', // only transpile our source code
      extensions: ['.js', '.vue'],
      presets: [
        ['@babel/env', { modules: false, loose: true }],
      ],
      plugins: [
        ['@babel/proposal-object-rest-spread', { 'useBuiltIns': true }],
      ],
    }),
    commonjs(),
  ],
};


export default config;
