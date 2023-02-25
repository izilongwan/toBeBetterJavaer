const e=JSON.parse('{"key":"v-2136d56c","path":"/collection/linkedlist.html","title":"Java LinkedList详解（附源码分析）","lang":"zh-CN","frontmatter":{"title":"Java LinkedList详解（附源码分析）","shortTitle":"LinkedList详解","category":["Java核心"],"tag":["集合框架（容器）"],"description":"Java程序员进阶之路，小白的零基础Java教程，Java LinkedList详解","head":[["meta",{"name":"keywords","content":"Java,Java SE,Java基础,Java教程,Java程序员进阶之路,Java入门,教程,LinkedList,LinkedList源码"}],["meta",{"property":"og:url","content":"https://tobebetterjavaer.com/collection/linkedlist.html"}],["meta",{"property":"og:site_name","content":"Java程序员进阶之路"}],["meta",{"property":"og:title","content":"Java LinkedList详解（附源码分析）"}],["meta",{"property":"og:description","content":"Java程序员进阶之路，小白的零基础Java教程，Java LinkedList详解"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-12-26T14:16:41.000Z"}],["meta",{"property":"article:tag","content":"集合框架（容器）"}],["meta",{"property":"article:modified_time","content":"2022-12-26T14:16:41.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java LinkedList详解（附源码分析）\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2022-12-26T14:16:41.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"一、LinkedList 的剖白","slug":"一、linkedlist-的剖白","link":"#一、linkedlist-的剖白","children":[]},{"level":2,"title":"二、LinkedList 的内功心法","slug":"二、linkedlist-的内功心法","link":"#二、linkedlist-的内功心法","children":[]},{"level":2,"title":"03、LinkedList 的招式","slug":"_03、linkedlist-的招式","link":"#_03、linkedlist-的招式","children":[{"level":3,"title":"1）招式一：增","slug":"_1-招式一-增","link":"#_1-招式一-增","children":[]},{"level":3,"title":"2）招式二：删","slug":"_2-招式二-删","link":"#_2-招式二-删","children":[]},{"level":3,"title":"3）招式三：改","slug":"_3-招式三-改","link":"#_3-招式三-改","children":[]},{"level":3,"title":"4）招式四：查","slug":"_4-招式四-查","link":"#_4-招式四-查","children":[]}]},{"level":2,"title":"四、LinkedList 的挑战","slug":"四、linkedlist-的挑战","link":"#四、linkedlist-的挑战","children":[]}],"git":{"createdTime":1630475140000,"updatedTime":1672064201000,"contributors":[{"name":"itwanger","email":"www.qing_gee@163.com","commits":10},{"name":"沉默王二","email":"www.qing_gee@163.com","commits":2}]},"readingTime":{"minutes":9.03,"words":2710},"filePathRelative":"collection/linkedlist.md","localizedDate":"2021年9月1日","excerpt":"<h2> 一、LinkedList 的剖白</h2>\\n<p>大家好，我是 LinkedList，和 ArrayList 是同门师兄弟，但我俩练的内功却完全不同。师兄练的是动态数组，我练的是链表。</p>\\n<p>问大家一个问题，知道我为什么要练链表这门内功吗？</p>\\n<p>举个例子来讲吧，假如你们手头要管理一推票据，可能有一张，也可能有一亿张。</p>\\n<p>该怎么办呢？</p>\\n<p>申请一个 10G 的大数组等着？那万一票据只有 100 张呢？</p>\\n<p>申请一个默认大小的数组，随着数据量的增大扩容？要知道扩容是需要重新复制数组的，很耗时间。</p>\\n<p>关键是，数组还有一个弊端就是，假如现在有 500 万张票据，现在要从中间删除一个票据，就需要把 250 万张票据往前移动一格。</p>"}');export{e as data};
