import{_ as n,o as s,c as a,e}from"./app-faff4188.js";const t={},p=e(`<h2 id="初始化项目" tabindex="-1"><a class="header-anchor" href="#初始化项目" aria-hidden="true">#</a> 初始化项目</h2><ol><li>新建文件夹</li><li>在命令行界面输入<strong>npm init</strong>，一路回车，即可看到目录中生成 packge.json 文件</li><li>在packge.json中进行配置</li></ol><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code> <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
   <span class="token comment">// ......省略</span>
    <span class="token property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;webpack&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;webpack-dev-server&quot;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安装依赖包" tabindex="-1"><a class="header-anchor" href="#安装依赖包" aria-hidden="true">#</a> 安装依赖包</h2><p>在命令行输入以下命令，即可下载依赖包</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm i -D webpack webpack-cli typescript ts-loader
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="设置-tsconfig-json-配置文件" tabindex="-1"><a class="header-anchor" href="#设置-tsconfig-json-配置文件" aria-hidden="true">#</a> 设置 tsconfig.json 配置文件</h2><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token comment">// ts配置文件</span>
  <span class="token comment">/* 
    路径:** 表示任意目录
         * 表示任意文件
    */</span>
  <span class="token comment">// &quot;include&quot;: [</span>
  <span class="token comment">//     &quot;./src/*&quot;</span>
  <span class="token comment">// ], // 指定哪些ts文件需要编译</span>
  <span class="token comment">// &quot;exclude&quot;: [</span>
  <span class="token comment">//   &quot;./src/hello/**/*&quot;</span>
  <span class="token comment">// ],// 表示不需要编译的目录，默认值有node_modules</span>
  <span class="token comment">// &quot;extends&quot;:[], // 继承</span>
  <span class="token comment">// &quot;files&quot;: [], // 指定被编译的文件</span>
  <span class="token comment">// 编译器选项</span>
  <span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// target:用来指定ts编译的js版本</span>
    <span class="token property">&quot;target&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ES6&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// module：指定要使用的模块化的规范</span>
    <span class="token property">&quot;module&quot;</span><span class="token operator">:</span> <span class="token string">&quot;System&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// lib：用来指定项目中使用的库</span>
    <span class="token comment">// 一般情况下不用设置，如果是node项目，可以进行设置。</span>
    <span class="token comment">// &quot;lib&quot;: [],</span>
    <span class="token comment">// 指定一个目录来存放编译后的文件</span>
    <span class="token property">&quot;outDir&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./dist&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 将编译后的文件合为一个文件</span>
    <span class="token comment">// 设置outFile后，所有的全局作用域中的代码会合并到一个文件</span>
    <span class="token property">&quot;outFile&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./dist/first.js&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 是否对js进行编译</span>
    <span class="token property">&quot;allowJs&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token comment">// 是否对js语法进行检查(使js语法按照ts的语法要求)</span>
    <span class="token property">&quot;checkJs&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token comment">// 是否移除注释</span>
    <span class="token property">&quot;removeComments&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token comment">// 不生成编译后的文件</span>
    <span class="token property">&quot;noEmit&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token comment">// 当有错误时，不生成编译后的文件</span>
    <span class="token property">&quot;noEmitOnError&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token comment">// 所有严格模式的总开关</span>
    <span class="token property">&quot;strict&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token comment">// 用来设置编译后的文件是否设置严格模式</span>
    <span class="token property">&quot;alwaysStrict&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// 是否不允许出现隐式any</span>
    <span class="token property">&quot;noImplicitAny&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// 不允许不明确类型的this</span>
    <span class="token property">&quot;noImplicitThis&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// 严格的检查控制</span>
    <span class="token property">&quot;strictNullChecks&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="webpack-配置" tabindex="-1"><a class="header-anchor" href="#webpack-配置" aria-hidden="true">#</a> webpack 配置</h2><h3 id="安装依赖" tabindex="-1"><a class="header-anchor" href="#安装依赖" aria-hidden="true">#</a> 安装依赖</h3><ol><li>自动构建 HTML 网页</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm i -D html-webpack-plugin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>webpack 开发服务器</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm i -D webpack-dev-server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>自动清除 dist 目录</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm i -D clean-webpack-plugin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="4"><li>加载器</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm i -D @babel/core @babel/preset-env babel-loader core-js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h3><ol><li>新建 webpack.config.js 文件</li><li>在文件中配置内容</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;path&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 引入HTML插件</span>
<span class="token keyword">const</span> HTMLWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;html-webpack-plugin&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 引入clean插件</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> CleanWebpackPlugin <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;clean-webpack-plugin&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// webpack中所有的配置信息</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 指定入口文件</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&quot;./src/index.ts&quot;</span><span class="token punctuation">,</span>

  <span class="token comment">// 指定打包文件所在的目录</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 指定打包文件的目录</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;dist&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">// 打包后文件的文件</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&quot;bundle.js&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">environment</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">arrowFunction</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 关闭webpack的箭头函数，可选</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 指定webpack打包后要使用的模块</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 指定要加载的规则</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token comment">// 指定的是规则生效的文件</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.ts$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token comment">// 配置babel</span>
          <span class="token punctuation">{</span>
            <span class="token comment">//    指定加载器</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;babel-loader&quot;</span><span class="token punctuation">,</span>
            <span class="token comment">// 设置babel</span>
            <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token comment">// 设置预定义的环境（即浏览器）</span>
              <span class="token literal-property property">presets</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">[</span>
                  <span class="token comment">// 指定环境插件</span>
                  <span class="token string">&quot;@babel/preset-env&quot;</span><span class="token punctuation">,</span>
                  <span class="token comment">// 配置信息</span>
                  <span class="token punctuation">{</span>
                    <span class="token comment">// 要兼容的目标浏览器</span>
                    <span class="token literal-property property">targets</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                      <span class="token literal-property property">chrome</span><span class="token operator">:</span> <span class="token string">&quot;88&quot;</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token comment">// 指定corejs的版本</span>
                    <span class="token literal-property property">corejs</span><span class="token operator">:</span> <span class="token string">&quot;3&quot;</span><span class="token punctuation">,</span>
                    <span class="token comment">// 使用corejs的方法</span>
                    <span class="token literal-property property">useBuiltIns</span><span class="token operator">:</span> <span class="token string">&quot;usage&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 按需加载</span>
                  <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">]</span><span class="token punctuation">,</span>
              <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token string">&quot;ts-loader&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 加载器写在后面的先执行</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token comment">// 要排除的文件</span>
        <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node-modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 配置插件</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">CleanWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token keyword">new</span> <span class="token class-name">HTMLWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">// title: &#39;这是一个自定义的title&#39;</span>
      <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&quot;./src/index.html&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 指定一个页面作为模板</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>

  <span class="token comment">// 用来设置引用模块</span>
  <span class="token literal-property property">resolve</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 以这两个结尾的文件，都可以作为引用模块来使用</span>
    <span class="token literal-property property">extensions</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;.ts&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;.js&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><ol><li>在目录中新建 index.html 文件用来做入口文件</li></ol>`,23),o=[p];function l(i,c){return s(),a("div",null,o)}const u=n(t,[["render",l],["__file","use-webpack-to-build-typescript-project.html.vue"]]);export{u as default};
