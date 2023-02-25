const e=JSON.parse('{"key":"v-29b28a1a","path":"/nio/rumen.html","title":"Java NIO 快速入门(buffer缓冲区、Channel管道、Selector选择器)","lang":"zh-CN","frontmatter":{"title":"Java NIO 快速入门(buffer缓冲区、Channel管道、Selector选择器)","shortTitle":"Java NIO快速入门","category":["Java核心"],"tag":["Java NIO"],"description":"Java程序员进阶之路，小白的零基础Java教程，Java NIO 快速入门(buffer缓冲区、Channel管道、Selector选择器)","head":[["meta",{"name":"keywords","content":"Java,Java SE,Java基础,Java教程,Java程序员进阶之路,Java入门,教程,nio,buffer,channel,selector"}],["meta",{"property":"og:url","content":"https://tobebetterjavaer.com/nio/rumen.html"}],["meta",{"property":"og:site_name","content":"Java程序员进阶之路"}],["meta",{"property":"og:title","content":"Java NIO 快速入门(buffer缓冲区、Channel管道、Selector选择器)"}],["meta",{"property":"og:description","content":"Java程序员进阶之路，小白的零基础Java教程，Java NIO 快速入门(buffer缓冲区、Channel管道、Selector选择器)"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-12-26T14:16:41.000Z"}],["meta",{"property":"article:tag","content":"Java NIO"}],["meta",{"property":"article:modified_time","content":"2022-12-26T14:16:41.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java NIO 快速入门(buffer缓冲区、Channel管道、Selector选择器)\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2022-12-26T14:16:41.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"buffer缓冲区和Channel管道","slug":"buffer缓冲区和channel管道","link":"#buffer缓冲区和channel管道","children":[{"level":3,"title":"buffer缓冲区核心要点","slug":"buffer缓冲区核心要点","link":"#buffer缓冲区核心要点","children":[]},{"level":3,"title":"buffer代码演示","slug":"buffer代码演示","link":"#buffer代码演示","children":[]},{"level":3,"title":"FileChannel通道核心要点","slug":"filechannel通道核心要点","link":"#filechannel通道核心要点","children":[]},{"level":3,"title":"直接与非直接缓冲区","slug":"直接与非直接缓冲区","link":"#直接与非直接缓冲区","children":[]},{"level":3,"title":"scatter和gather、字符集","slug":"scatter和gather、字符集","link":"#scatter和gather、字符集","children":[]}]}],"git":{"createdTime":1661757542000,"updatedTime":1672064201000,"contributors":[{"name":"itwanger","email":"www.qing_gee@163.com","commits":2},{"name":"沉默王二","email":"www.qing_gee@163.com","commits":1}]},"readingTime":{"minutes":6.69,"words":2008},"filePathRelative":"nio/rumen.md","localizedDate":"2022年8月29日","excerpt":"<p>首先我们来看看<strong>IO和NIO的区别</strong>：</p>\\n<figure><img src=\\"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nio/rumen-90c84f53-f82d-43dd-87c5-4477e540fa57.jpg\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>\\n<ul>\\n<li>\\n<p>可简单认为：<strong>IO是面向流的处理，NIO是面向块(缓冲区)的处理</strong></p>\\n</li>\\n<li>\\n<p>面向流的I/O 系统<strong>一次一个字节地处理数据</strong>。</p>\\n</li>\\n<li>\\n<p>一个面向块(缓冲区)的I/O系统<strong>以块的形式处理数据</strong>。</p>\\n</li>\\n</ul>"}');export{e as data};
