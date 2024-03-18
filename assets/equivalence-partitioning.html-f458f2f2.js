import{_ as t,o as e,c as l,f as d,e as n}from"./app-faff4188.js";const a={},i=n('<h2 id="等价划分" tabindex="-1"><a class="header-anchor" href="#等价划分" aria-hidden="true">#</a> 等价划分</h2><blockquote><p>解决穷举场景</p></blockquote><h3 id="说明" tabindex="-1"><a class="header-anchor" href="#说明" aria-hidden="true">#</a> 说明</h3><p>在所有测试数据中，具有某种共同特征的数据集合进行划分。 如：以性别进行划分</p><h3 id="分类" tabindex="-1"><a class="header-anchor" href="#分类" aria-hidden="true">#</a> 分类</h3><ul><li>有效等价类：满足需求的数据集合（符合需求范围之内）</li><li>无效等价类：不满足需求的数据集合（符合需求范围之外）</li></ul><h3 id="步骤" tabindex="-1"><a class="header-anchor" href="#步骤" aria-hidden="true">#</a> 步骤</h3><ol><li>明确需求</li><li>确定有效和无效等价类</li><li>提取数据编写测试用例</li></ol><h3 id="用法" tabindex="-1"><a class="header-anchor" href="#用法" aria-hidden="true">#</a> 用法</h3><ul><li>有效等价取一个值</li><li>每个无效集合取一个</li></ul><h3 id="重点" tabindex="-1"><a class="header-anchor" href="#重点" aria-hidden="true">#</a> 重点</h3><ol><li>正向用例：一条尽可能覆盖多条</li><li>逆向用例：每一条数据，都是一条单独用例</li></ol><h3 id="案例1" tabindex="-1"><a class="header-anchor" href="#案例1" aria-hidden="true">#</a> 案例1</h3><p>2-1 需求：验证QQ账号的合法性 要求：6-10位自然数</p><p>编写用例如下：</p><table><thead><tr><th>用例编号</th><th style="text-align:center;">用例标题</th><th style="text-align:center;">项目/模块</th><th style="text-align:center;">优先级</th><th style="text-align:center;">前置条件</th><th style="text-align:center;">测试步骤</th><th style="text-align:center;">测试数据</th><th style="text-align:right;">预期结果</th></tr></thead><tbody><tr><td>QQ_001</td><td style="text-align:center;">QQ合法（8位自然数）</td><td style="text-align:center;">QQ帐号</td><td style="text-align:center;">p0</td><td style="text-align:center;">打开验证QQ程序</td><td style="text-align:center;">1.输入QQ号2.点击验证</td><td style="text-align:center;">账号：12345678</td><td style="text-align:right;">QQ合法</td></tr><tr><td>QQ_002</td><td style="text-align:center;">QQ不合法（3位自然数）</td><td style="text-align:center;">QQ帐号</td><td style="text-align:center;">p1</td><td style="text-align:center;">打开验证QQ程序</td><td style="text-align:center;">1.输入QQ号2.点击验证</td><td style="text-align:center;">账号：123</td><td style="text-align:right;">QQ不合法</td></tr><tr><td>QQ_003</td><td style="text-align:center;">QQ不合法（12位自然数）</td><td style="text-align:center;">QQ帐号</td><td style="text-align:center;">p1</td><td style="text-align:center;">打开验证QQ程序</td><td style="text-align:center;">1.输入QQ号2.点击验证</td><td style="text-align:center;">账号：123456789012</td><td style="text-align:right;">QQ不合法</td></tr><tr><td>QQ_004</td><td style="text-align:center;">QQ不合法（8位非自然数）</td><td style="text-align:center;">QQ帐号</td><td style="text-align:center;">p1</td><td style="text-align:center;">打开验证QQ程序</td><td style="text-align:center;">1.输入QQ号2.点击验证</td><td style="text-align:center;">账号：1234567A</td><td style="text-align:right;">QQ不合法</td></tr><tr><td>QQ_005</td><td style="text-align:center;">QQ不合法（为空）</td><td style="text-align:center;">QQ帐号</td><td style="text-align:center;">p1</td><td style="text-align:center;">打开验证QQ程序</td><td style="text-align:center;">1.输入QQ号2.点击验证</td><td style="text-align:center;">账号：为空</td><td style="text-align:right;">QQ不合法</td></tr></tbody></table><h3 id="案例2" tabindex="-1"><a class="header-anchor" href="#案例2" aria-hidden="true">#</a> 案例2</h3><p>2-2 需求：验证某城市电话号码正确性 需求： 1.区号：空或者是三位数字 2.前缀码：非“0”且非“1”开头的三位数字 3.后缀码：四位数字</p><p>编写用例如下:</p><table><thead><tr><th>用例编号</th><th style="text-align:center;">用例标题</th><th style="text-align:center;">项目/模块</th><th style="text-align:center;">优先级</th><th style="text-align:center;">前置条件</th><th style="text-align:center;">测试步骤</th><th style="text-align:center;">测试数据</th><th style="text-align:right;">预期结果</th></tr></thead><tbody><tr><td>TEL_001</td><td style="text-align:center;">合法（区号为空+其他正确）</td><td style="text-align:center;">电话</td><td style="text-align:center;">p0</td><td style="text-align:center;">打开验证电话程序</td><td style="text-align:center;">1.输入区号 2.输入前缀 3.输入后缀 4.点击验证</td><td style="text-align:center;">1.区号：空 2.前缀：234 3.后缀：1234</td><td style="text-align:right;">合法</td></tr><tr><td>TEL_002</td><td style="text-align:center;">合法（区号为3位数字+其他正确）</td><td style="text-align:center;">电话</td><td style="text-align:center;">p0</td><td style="text-align:center;">打开验证电话程序</td><td style="text-align:center;">1.输入区号 2.输入前缀 3.输入后缀 5.点击验证</td><td style="text-align:center;">1.区号：123 2.前缀：234 3.后缀：1234</td><td style="text-align:right;">合法</td></tr><tr><td>TEL_003</td><td style="text-align:center;">不合法（区号为2位数字+其他正确）</td><td style="text-align:center;">电话</td><td style="text-align:center;">p1</td><td style="text-align:center;">打开验证电话程序</td><td style="text-align:center;">1.输入区号 2.输入前缀 3.输入后缀 6.点击验证</td><td style="text-align:center;">1.区号：12 2.前缀：234 3.后缀：1234</td><td style="text-align:right;">不合法</td></tr><tr><td>TEL_004</td><td style="text-align:center;">不合法（前缀为非0且非1开头的两位数字+其他正确）</td><td style="text-align:center;">电话</td><td style="text-align:center;">p1</td><td style="text-align:center;">打开验证电话程序</td><td style="text-align:center;">1.输入区号 2.输入前缀 3.输入后缀 7.点击验证</td><td style="text-align:center;">1.区号：空 2.前缀：23 3.后缀：1234</td><td style="text-align:right;">不合法</td></tr><tr><td>TEL_005</td><td style="text-align:center;">不合法（后缀为3位数字+其他正确）</td><td style="text-align:center;">电话</td><td style="text-align:center;">p1</td><td style="text-align:center;">打开验证电话程序</td><td style="text-align:center;">1.输入区号 2.输入前缀 3.输入后缀 8.点击验证</td><td style="text-align:center;">1.区号：空 2.前缀：234 3.后缀：123</td><td style="text-align:right;">不合法</td></tr><tr><td>TEL_006</td><td style="text-align:center;">不合法（区号为非3位数字+其他正确）</td><td style="text-align:center;">电话</td><td style="text-align:center;">p1</td><td style="text-align:center;">打开验证电话程序</td><td style="text-align:center;">1.输入区号 2.输入前缀 3.输入后缀 9.点击验证</td><td style="text-align:center;">1.区号：12A 2.前缀：234 3.后缀：1234</td><td style="text-align:right;">不合法</td></tr><tr><td>TEL_007</td><td style="text-align:center;">不合法（前缀为非0且非1开头的非3位数字+其他正确）</td><td style="text-align:center;">电话</td><td style="text-align:center;">p1</td><td style="text-align:center;">打开验证电话程序</td><td style="text-align:center;">1.输入区号 2.输入前缀 3.输入后缀 10.点击验证</td><td style="text-align:center;">1.区号：空 2.前缀：234 3.后缀：1234</td><td style="text-align:right;">不合法</td></tr><tr><td>TEL_008</td><td style="text-align:center;">不合法（后缀为非4位数字+其他正确）</td><td style="text-align:center;">电话</td><td style="text-align:center;">p1</td><td style="text-align:center;">打开验证电话程序</td><td style="text-align:center;">1.输入区号 2.输入前缀 3.输入后缀 11.点击验证</td><td style="text-align:center;">1.区号：空 2.前缀：234 3.后缀：123A</td><td style="text-align:right;">不合法</td></tr><tr><td>TEL_009</td><td style="text-align:center;">不合法（前缀为0开头的3位数字+其他正确）</td><td style="text-align:center;">电话</td><td style="text-align:center;">p1</td><td style="text-align:center;">打开验证电话程序</td><td style="text-align:center;">1.输入区号 2.输入前缀 3.输入后缀 12.点击验证</td><td style="text-align:center;">1.区号：空 2.前缀：034 3.后缀：1242</td><td style="text-align:right;">不合法</td></tr><tr><td>TEL_010</td><td style="text-align:center;">不合法（前缀为1开头的3位数字+其他正确）</td><td style="text-align:center;">电话</td><td style="text-align:center;">p1</td><td style="text-align:center;">打开验证电话程序</td><td style="text-align:center;">1.输入区号 2.输入前缀 3.输入后缀 13.点击验证</td><td style="text-align:center;">1.区号：空 2.前缀：134 3.后缀：1243</td><td style="text-align:right;">不合法</td></tr></tbody></table><h3 id="适用场景" tabindex="-1"><a class="header-anchor" href="#适用场景" aria-hidden="true">#</a> 适用场景</h3><ul><li>针对：需要有大量数据测试输入，但是没法穷举测试的地方。 <ul><li>输入框</li><li>下拉列表</li><li>单选复选框</li></ul></li><li>典型代表：页面的输入框类测试</li></ul>',22);function r(s,c){return e(),l("div",null,[d(` # 等价类划分
> 解决穷举场景
--- `),i])}const x=t(a,[["render",r],["__file","equivalence-partitioning.html.vue"]]);export{x as default};
