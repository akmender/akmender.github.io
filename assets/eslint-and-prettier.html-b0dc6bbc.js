import{_ as a,o as e,c as t,f as p,e as s,a as n}from"./app-faff4188.js";const i={},o=s(`<h2 id="_1-使用eslint-prettier对代码进行美化" tabindex="-1"><a class="header-anchor" href="#_1-使用eslint-prettier对代码进行美化" aria-hidden="true">#</a> 1. 使用Eslint+Prettier对代码进行美化</h2><h3 id="前置条件" tabindex="-1"><a class="header-anchor" href="#前置条件" aria-hidden="true">#</a> 前置条件</h3><ol><li><p>创建Vue3项目时，选择Eslint+Prettier配置</p></li><li><p>VSCode中安装Eslint插件</p></li><li><p>禁用或卸载Prettier插件</p></li></ol><h3 id="规则配置" tabindex="-1"><a class="header-anchor" href="#规则配置" aria-hidden="true">#</a> 规则配置</h3><p>在.eslintrc.cjs文件的rules中进行如下配置：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 1.禁用格式化插件prettier</span>
    <span class="token comment">// 2.安装eslint插件</span>
    <span class="token string-property property">&#39;prettier/prettier&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&#39;warn&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">singleQuote</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//单引号</span>
        <span class="token literal-property property">semi</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">//不使用分号</span>
        <span class="token literal-property property">bracketSpacing</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//空格</span>
        <span class="token literal-property property">trailingComma</span><span class="token operator">:</span> <span class="token string">&#39;none&#39;</span><span class="token punctuation">,</span> <span class="token comment">//末尾逗号</span>
        <span class="token literal-property property">printWidth</span><span class="token operator">:</span> <span class="token number">80</span><span class="token punctuation">,</span> <span class="token comment">//最大宽度</span>
        <span class="token literal-property property">endOfLine</span><span class="token operator">:</span> <span class="token string">&#39;auto&#39;</span> <span class="token comment">//换行</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;vue/multi-word-component-names&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&#39;warn&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">ignores</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;index&#39;</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;vue/no-setup-props-destructure&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;off&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 关闭props解构的校验</span>
    <span class="token comment">// 添加未定义变量错误提示</span>
    <span class="token string-property property">&#39;no-undef&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="在vscode的setting-json中进行配置" tabindex="-1"><a class="header-anchor" href="#在vscode的setting-json中进行配置" aria-hidden="true">#</a> 在VSCode的setting.json中进行配置</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token comment">// Eslint插件+Vscode配置，实现自动格式化修复</span>
 <span class="token property">&quot;editor.codeActionsOnSave&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;source.fixAll&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token comment">// 关闭保存自动格式化</span>
  <span class="token property">&quot;editor.formatOnSave&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-配置stylelint" tabindex="-1"><a class="header-anchor" href="#_2-配置stylelint" aria-hidden="true">#</a> 2. 配置stylelint</h2><h3 id="安装stylelint依赖" tabindex="-1"><a class="header-anchor" href="#安装stylelint依赖" aria-hidden="true">#</a> 安装stylelint依赖</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">pnpm</span> <span class="token function">add</span> sass sass-loader stylelint postcss postcss-scss postcss-html stylelint-config-prettier stylelint-config-recess-order stylelint-config-recommended-scss stylelint-config-standard stylelint-config-standard-vue stylelint-scss stylelint-order stylelint-config-standard-scss <span class="token parameter variable">-D</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="新建-stylelint-配置文件" tabindex="-1"><a class="header-anchor" href="#新建-stylelint-配置文件" aria-hidden="true">#</a> 新建 stylelint 配置文件</h3><p>在项目根目录下新建 <code>.stylelintrc.cjs</code>，并填入如下代码：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;stylelint-config-standard&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 配置stylelint拓展插件</span>
    <span class="token string">&#39;stylelint-config-html/vue&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 配置 vue 中 template 样式格式化</span>
    <span class="token string">&#39;stylelint-config-standard-scss&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 配置stylelint scss插件</span>
    <span class="token string">&#39;stylelint-config-recommended-vue/scss&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 配置 vue 中 scss 样式格式化</span>
    <span class="token string">&#39;stylelint-config-recess-order&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 配置stylelint css属性书写顺序插件,</span>
    <span class="token string">&#39;stylelint-config-prettier&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 配置stylelint和prettier兼容</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">overrides</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">files</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;**/*.(scss|css|vue|html)&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">customSyntax</span><span class="token operator">:</span> <span class="token string">&#39;postcss-scss&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">files</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;**/*.(html|vue)&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">customSyntax</span><span class="token operator">:</span> <span class="token string">&#39;postcss-html&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">ignoreFiles</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;**/*.js&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;**/*.jsx&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;**/*.tsx&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;**/*.ts&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;**/*.json&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;**/*.md&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;**/*.yaml&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token doc-comment comment">/**
   * null  =&gt; 关闭该规则
   * always =&gt; 必须
   */</span>
  <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&#39;value-keyword-case&#39;</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token comment">// 在 css 中使用 v-bind，不报错</span>
    <span class="token string-property property">&#39;no-descending-specificity&#39;</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token comment">// 禁止在具有较高优先级的选择器后出现被其覆盖的较低优先级的选择器</span>
    <span class="token string-property property">&#39;function-url-quotes&#39;</span><span class="token operator">:</span> <span class="token string">&#39;always&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 要求或禁止 URL 的引号 &quot;always(必须加上引号)&quot;|&quot;never(没有引号)&quot;</span>
    <span class="token string-property property">&#39;no-empty-source&#39;</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token comment">// 关闭禁止空源码</span>
    <span class="token string-property property">&#39;selector-class-pattern&#39;</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token comment">// 关闭强制选择器类名的格式</span>
    <span class="token string-property property">&#39;property-no-unknown&#39;</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token comment">// 禁止未知的属性(true 为不允许)</span>
    <span class="token string-property property">&#39;block-opening-brace-space-before&#39;</span><span class="token operator">:</span> <span class="token string">&#39;always&#39;</span><span class="token punctuation">,</span> <span class="token comment">//大括号之前必须有一个空格或不能有空白符</span>
    <span class="token string-property property">&#39;value-no-vendor-prefix&#39;</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token comment">// 关闭 属性值前缀 --webkit-box</span>
    <span class="token string-property property">&#39;property-no-vendor-prefix&#39;</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token comment">// 关闭 属性前缀 -webkit-mask</span>
    <span class="token string-property property">&#39;selector-pseudo-class-no-unknown&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token comment">// 不允许未知的选择器</span>
      <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">ignorePseudoClasses</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;global&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;v-deep&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;deep&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 忽略属性，修改element默认样式的时候能使用到</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="新建-stylelint-忽略文件" tabindex="-1"><a class="header-anchor" href="#新建-stylelint-忽略文件" aria-hidden="true">#</a> 新建 stylelint 忽略文件</h3><p>在项目根目录下新建 <code>.stylelintignore</code>，并填入如下代码：</p><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>/node_modules/*
/dist/*
/html/*
/public/*

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="添加脚本" tabindex="-1"><a class="header-anchor" href="#添加脚本" aria-hidden="true">#</a> 添加脚本</h3><p>在<code>package.json</code>的<code>script</code>中添加如下脚本：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;lint:style&quot;</span><span class="token operator">:</span> <span class="token string">&quot;stylelint src/**/*.{css,scss,vue} --cache --fix&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_3-配置husky" tabindex="-1"><a class="header-anchor" href="#_3-配置husky" aria-hidden="true">#</a> 3. 配置husky</h2><h3 id="初始化git仓库" tabindex="-1"><a class="header-anchor" href="#初始化git仓库" aria-hidden="true">#</a> 初始化git仓库</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="安装husky" tabindex="-1"><a class="header-anchor" href="#安装husky" aria-hidden="true">#</a> 安装husky</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">pnpm</span> dlx husky-init <span class="token operator">&amp;&amp;</span> <span class="token function">pnpm</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="修改-husky目录下的pre-commit文件" tabindex="-1"><a class="header-anchor" href="#修改-husky目录下的pre-commit文件" aria-hidden="true">#</a> 修改.husky目录下的pre-commit文件</h3>`,26),l=s(`<h4 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">pnpm</span> i lint-staged <span class="token parameter variable">-D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="配置package-json" tabindex="-1"><a class="header-anchor" href="#配置package-json" aria-hidden="true">#</a> 配置package.json</h4><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;lint-staged&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;*.{js,jsx,ts,tsx}&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eslint --fix&quot;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token comment">// ...省略...</span>
    <span class="token property">&quot;lint-staged&quot;</span><span class="token operator">:</span> <span class="token string">&quot;lint-staged&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="修改-husky-pre-commit文件" tabindex="-1"><a class="header-anchor" href="#修改-husky-pre-commit文件" aria-hidden="true">#</a> 修改.husky/pre-commit文件</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">pnpm</span> lint-staged
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_4-配置commitlint" tabindex="-1"><a class="header-anchor" href="#_4-配置commitlint" aria-hidden="true">#</a> 4. 配置commitlint</h2><h3 id="安装commitlint" tabindex="-1"><a class="header-anchor" href="#安装commitlint" aria-hidden="true">#</a> 安装commitlint</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">pnpm</span> <span class="token function">add</span> @commitlint/config-conventional @commitlint/cli <span class="token parameter variable">-D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="新建commitlint配置文件" tabindex="-1"><a class="header-anchor" href="#新建commitlint配置文件" aria-hidden="true">#</a> 新建commitlint配置文件</h3><p>在项目根目录下新建<code>commitlint.config.cjs</code>文件，并填入如下代码：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;@commitlint/config-conventional&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// 校验规则</span>
  <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&#39;type-enum&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token number">2</span><span class="token punctuation">,</span>
      <span class="token string">&#39;always&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">[</span>
        <span class="token string">&#39;feat&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;fix&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;docs&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;style&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;refactor&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;perf&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;test&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;chore&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;revert&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;build&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;type-case&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;type-empty&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;scope-empty&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;scope-case&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;subject-full-stop&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">&#39;never&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;subject-case&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">&#39;never&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;header-max-length&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">&#39;always&#39;</span><span class="token punctuation">,</span> <span class="token number">72</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置说明如下：</p>`,14),c=n("div",{class:"custom-container tip"},[n("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[n("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[n("circle",{cx:"12",cy:"12",r:"9"}),n("path",{d:"M12 8h.01"}),n("path",{d:"M11 12h1v4h1"})])]),n("p",{class:"custom-container-title"},"配置说明"),n("ol",null,[n("li",null,"'feat', //新特性、新功能"),n("li",null,"'fix', //修改bug"),n("li",null,"'docs', //文档修改"),n("li",null,"'style', //代码格式修改, 注意不是 css 修改"),n("li",null,"'refactor', //代码重构"),n("li",null,"'perf', //优化相关，比如提升性能、体验"),n("li",null,"'test', //测试用例修改"),n("li",null,"'chore', //其他修改, 比如改变构建流程、或者增加依赖库、工具等"),n("li",null,"'revert', //回滚到上一个版本"),n("li",null,"'build', //编译相关的修改，例如发布版本、对项目构建或者依赖的改动")])],-1),r=s(`<h3 id="添加脚本-1" tabindex="-1"><a class="header-anchor" href="#添加脚本-1" aria-hidden="true">#</a> 添加脚本</h3><p>在<code>package.json</code>的<code>script</code>中添加如下脚本：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code> <span class="token property">&quot;commitlint&quot;</span><span class="token operator">:</span> <span class="token string">&quot;commitlint --config commitlint.config.cjs -e -V&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="搭配husky使用" tabindex="-1"><a class="header-anchor" href="#搭配husky使用" aria-hidden="true">#</a> 搭配husky使用</h3><ol><li>生成<code>commit-msg</code>文件</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>npx husky <span class="token function">add</span> .husky/commit-msg 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>在根目录下 husky文件夹中的 commit-msg中添加如下命令</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/usr/bin/env sh</span>
<span class="token builtin class-name">.</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">dirname</span> -- <span class="token string">&quot;<span class="token variable">$0</span>&quot;</span><span class="token variable">)</span></span>/_/husky.sh&quot;</span>
<span class="token function">pnpm</span> commitlint
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>提交示例如下：</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> commit <span class="token parameter variable">-m</span> &#39;feat: 新增商品页查询功能’
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_5-统一包管理工具" tabindex="-1"><a class="header-anchor" href="#_5-统一包管理工具" aria-hidden="true">#</a> 5. 统一包管理工具</h2><ol><li>在项目根目录下新建scripts文件夹，并新建<code>preinstall.js</code>文件</li><li>填入如下代码：</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">pnpm</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span>npm_execpath <span class="token operator">||</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span>
    <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">\\u001b[33mThis repository must using pnpm as the package manager </span><span class="token template-punctuation string">\`</span></span> <span class="token operator">+</span>
      <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string"> for scripts to work properly.\\u001b[39m\\n</span><span class="token template-punctuation string">\`</span></span>
  <span class="token punctuation">)</span>
  process<span class="token punctuation">.</span><span class="token function">exit</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>在使用非<code>pnpm</code>作为包管理工具时，会报错提示</li></ol>`,14);function u(d,k){return e(),t("div",null,[o,p(` #### 配置暂存区Eslint

原因：在实际使用中，可能存在别人写的代码存在错误，而使用lint是全量校验，会对自己的开发造成影响。所以需配置只校验自己编写的代码 `),l,c,r])}const m=a(i,[["render",u],["__file","eslint-and-prettier.html.vue"]]);export{m as default};