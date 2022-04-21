import { Plugin } from 'vite';
import fs from 'fs-extra';
import { transform } from '@svgr/core';
import resolve from 'resolve';
interface SvgrOptions {
  // svg 资源模块默认导出，url 或者组件
  defaultExport: 'url' | 'component';
}

export default function svgr({
  defaultExport = 'component',
}: SvgrOptions): Plugin {
  console.log(defaultExport);
  return {
    name: 'vite-plugin-svgr',
    async transform(code, id) {
      if (!/.svg$/.test(id)) return;
      const content = await fs.readFile(id, 'utf-8');

      const esbuildPackagePath = resolve.sync('esbuild', {
        basedir: require.resolve('vite'),
      });

      const esbuild = require(esbuildPackagePath);

      const svgrResult = await transform(
        content,
        {},
        { componentName: 'ReactComponent' }
      );
      // 5. 利用 esbuild，将组件中的 jsx 代码转译为浏览器可运行的代码;
      const result = await esbuild.transform(svgrResult, {
        loader: 'jsx',
      });
      return {
        code: result.code,
      };
    },
  };
}
