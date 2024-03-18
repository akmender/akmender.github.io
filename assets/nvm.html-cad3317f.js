import{_ as t,r as s,o as r,c as i,a as e,b as n,d,f as l,e as o}from"./app-faff4188.js";const u={},c=e("h2",{id:"介绍",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#介绍","aria-hidden":"true"},"#"),n(" 介绍")],-1),m=e("h2",{id:"安装",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#安装","aria-hidden":"true"},"#"),n(" 安装")],-1),h={href:"https://nvm.uihtm.com/",target:"_blank",rel:"noopener noreferrer"},p=e("h2",{id:"配置npm镜像",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#配置npm镜像","aria-hidden":"true"},"#"),n(" 配置npm镜像")],-1),v=o(`<p>nvm安装后，打开安装目录下的setting.txt文件，输入以下内容：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>node_mirror: https://npmmirror.com/mirrors/node/
npm_mirror: https://npmmirror.com/mirrors/npm/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置环境变量" tabindex="-1"><a class="header-anchor" href="#配置环境变量" aria-hidden="true">#</a> 配置环境变量</h2><p>安装nvm后会自动新增变量：NVM_HOME，NVM_SYMLINK</p><h2 id="更改node全局缓存位置" tabindex="-1"><a class="header-anchor" href="#更改node全局缓存位置" aria-hidden="true">#</a> 更改node全局缓存位置</h2>`,5),g=e("div",{class:"custom-container tip"},[e("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[e("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[e("circle",{cx:"12",cy:"12",r:"9"}),e("path",{d:"M12 8h.01"}),e("path",{d:"M11 12h1v4h1"})])]),e("p",{class:"custom-container-title"},"常用命令"),e("ol",null,[e("li",null,[e("p",null,"列出所有已安装的 node 版本：nvm ls")]),e("li",null,[e("p",null,"列出所有远程服务器的版本（官方node version list）： nvm ls-remote")]),e("li",null,[e("p",null,"列出所有已安装的 node 版本： nvm list")]),e("li",null,[e("p",null,"显示所有可下载的版本： nvm list available")]),e("li",null,[e("p",null,"安装最新版 node： nvm install stable")]),e("li",null,[e("p",null,"安装指定版本 node： nvm install [node版本号]")]),e("li",null,[e("p",null,"删除已安装的指定版本： nvm uninstall [node版本号]")]),e("li",null,[e("p",null,"切换到指定版本 node： nvm use [node版本号]")]),e("li",null,[e("p",null,"当前 node 版本： nvm current")]),e("li",null,[e("p",null,"给不同的版本号添加别名： nvm alias [别名] [node版本号]")]),e("li",null,[e("p",null,"删除已定义的别名： nvm unalias [别名]")]),e("li",null,[e("p",null,"设置默认版本： nvm alias default [node版本号] :::")]),e("li",null,[e("p",null,"首先下载node")]),e("li",null,[e("p",null,"设置全局安装路径，命令如下：")])]),e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`npm config set prefix "自定义路径，如：D:\\software\\environments\\nodejs\\node_global"
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])]),e("ol",{start:"3"},[e("li",null,"设置全局缓存路径，命令如下：")]),e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`npm config set cache "自定义路径，如：D:\\software\\environments\\nodejs\\node_cache"
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])]),e("ol",{start:"4"},[e("li",null,"在环境变量Path中添加yarn的路径，如：D:\\software\\environments\\nodejs\\node_global")]),e("h2",{id:"配置yarn",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#配置yarn","aria-hidden":"true"},"#"),n(" 配置yarn")]),e("ol",null,[e("li",null,"安装")]),e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`npm install --global yarn
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])]),e("ol",{start:"2"},[e("li",null,"修改yarn全局安装位置")]),e("ul",null,[e("li",null,"查看yarn全局安装位置")]),e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`yarn global dir
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])]),e("ul",null,[e("li",null,"设置全局路径")]),e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`yarn config set global-folder "自定义路径，如 D:\\yarn\\global"
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])]),e("ol",{start:"3"},[e("li",null,"修改yarn全局缓存位置")]),e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`yarn config set cache-folder "自定义路径，如 F:\\yarn\\cache"
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])]),e("h2",{id:"配置pnpm",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#配置pnpm","aria-hidden":"true"},"#"),n(" 配置pnpm")]),e("ol",null,[e("li",null,"安装")]),e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`npm install -g pnpm
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])]),e("ol",{start:"2"},[e("li",null,"设置全局缓存路径")]),e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`pnpm config set store-dir 存放目录
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])])],-1);function x(b,_){const a=s("ExternalLinkIcon");return r(),i("div",null,[c,m,e("p",null,[e("a",h,[n("https://nvm.uihtm.com/"),d(a)])]),p,l(" NVM安装后，打开settings.txt文件，在其中输入： "),l(" ```\nnode_mirror: https://npm.taobao.org/mirrors/node/\nnpm_mirror: https://npm.taobao.org/mirrors/npm/\n``` "),v,g])}const y=t(u,[["render",x],["__file","nvm.html.vue"]]);export{y as default};