import { babel } from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import image from '@rollup/plugin-image';
import terser from '@rollup/plugin-terser';
import json from '@rollup/plugin-json';
import eslint from '@rollup/plugin-eslint';
import postcss from 'rollup-plugin-postcss';


const extensions = ['.js','.jsx', '.ts','.tsx'];

export default {
  input: "./src/index.tsx",
  output: [
    {
      file: './lib/bundle.cjs.js',
      format: 'cjs',
    },
    {
      file: './lib/bundle.es.js',
      format: 'es',
    }
  ],
  external: [],
  plugins: [
    resolve({
      extensions
    }),
    commonjs(),
    babel({
      extensions,
      presets: [
        '@babel/preset-env',
        '@babel/preset-typescript',
        '@babel/preset-react'
      ],
      plugins: [
        '@babel/transform-runtime',
      ],
      babelHelpers: 'runtime', // 当工程作为程序应用时推荐使用 bundled（默认值），当构建库时推荐使用 runtime。
    }),
    postcss(),
    terser(),
    image(),
    json(),
    eslint(), 
  ],
}