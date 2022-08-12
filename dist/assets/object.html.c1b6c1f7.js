import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";import{r as l,o as i,c as n,a as e,b as d,e as s,d as o}from"./app.ed576714.js";const a={},r=s('<p>\u6765\u6E90\u4E289\u9F99</p><p>juejin.im/post/5d0655d8e51d455a2f22025e</p><p><img src="https://mmbiz.qpic.cn/mmbiz_jpg/xq9PqibkVAzpWtFaUKXgb28E4GPavCmrJSrPwoFdOljbLUxocC2J0gWMA5FFXegWrBeDYyazM8XUSLiagrYmZQjA/640?wx_fmt=jpeg" alt=""></p><hr><p><strong>\u6982\xA0 \xA0\u89C8</strong></p><p><strong>Object\u662Fjava\u6240\u6709\u7C7B\u7684\u57FA\u7C7B\uFF0C\u662F\u6574\u4E2A\u7C7B\u7EE7\u627F\u7ED3\u6784\u7684\u9876\u7AEF\uFF0C\u4E5F\u662F\u6700\u62BD\u8C61\u7684\u4E00\u4E2A\u7C7B</strong>\u3002\u5927\u5BB6\u5929\u5929\u90FD\u5728\u4F7F\u7528 <code>toString()\u3001equals()\u3001hashCode()\u3001wait()\u3001notify()\u3001getClass()</code>\u7B49\u65B9\u6CD5\uFF0C\u6216\u8BB8\u90FD\u6CA1\u6709\u610F\u8BC6\u5230\u662F <code>Object</code>\u7684\u65B9\u6CD5\uFF0C\u4E5F\u6CA1\u6709\u53BB\u770B <code>Object</code>\u8FD8\u6709\u54EA\u4E9B\u65B9\u6CD5\u4EE5\u53CA\u601D\u8003\u4E3A\u4EC0\u4E48\u8FD9\u4E9B\u65B9\u6CD5\u8981\u653E\u5230 <code>Object</code>\u4E2D\u3002\u672C\u7BC7\u5C31\u6BCF\u4E2A\u65B9\u6CD5\u5177\u4F53\u529F\u80FD\u3001\u91CD\u5199\u89C4\u5219\u4EE5\u53CA\u81EA\u5DF1\u7684\u4E00\u4E9B\u7406\u89E3\u3002</p><hr><p><strong>Object\u7C7B\u6240\u6709\u65B9\u6CD5\u8BE6\u89E3</strong></p><p><code>Object</code>\u4E2D\u542B\u6709\uFF1A <code>registerNatives()\u3001getClass()\u3001hashCode()\u3001equals()\u3001clone()\u3001toString()\u3001notify()\u3001notifyAll()\u3001wait(long)\u3001wait(long,int)\u3001wait()\u3001finalize()</code> \u5171<strong>\u5341\u4E8C\u4E2A\u65B9\u6CD5</strong>\u3002\u8FD9\u4E2A\u987A\u5E8F\u662F\u6309\u7167 <code>Object</code>\u7C7B\u4E2D\u5B9A\u4E49\u65B9\u6CD5\u7684\u987A\u5E8F\u5217\u4E3E\u7684\uFF0C\u4E0B\u9762\u6211\u4E5F\u4F1A\u6309\u7167\u8FD9\u4E2A\u987A\u5E8F\u4F9D\u6B21\u8FDB\u884C\u8BB2\u89E3\u3002</p><ul><li><strong>registerNatives()</strong></li></ul><ol><li>public class Object {</li><li>private static native void registerNatives();</li><li>static {</li><li>registerNatives();</li><li>}</li><li>}</li></ol><p><strong>\u4ECE\u540D\u5B57\u4E0A\u7406\u89E3\uFF0C\u8FD9\u4E2A\u65B9\u6CD5\u662F\u6CE8\u518C <code>native</code>\u65B9\u6CD5</strong>\uFF08\u672C\u5730\u65B9\u6CD5\uFF0C\u7531 <code>JVM</code>\u5B9E\u73B0\uFF0C\u5E95\u5C42\u662F <code>C/C++</code>\u5B9E\u73B0\u7684\uFF09<strong>\u5411\u8C01\u6CE8\u518C\u5462\uFF1F\u5F53\u7136\u662F\u5411 <code>JVM</code></strong>\uFF0C\u5F53\u6709\u7A0B\u5E8F\u8C03\u7528\u5230 <code>native</code>\u65B9\u6CD5\u65F6\uFF0C <code>JVM</code>\u624D\u597D\u53BB\u627E\u5230\u8FD9\u4E9B\u5E95\u5C42\u7684\u65B9\u6CD5\u8FDB\u884C\u8C03\u7528\u3002</p><p><code>Object</code>\u4E2D\u7684 <code>native</code>\u65B9\u6CD5\uFF0C\u5E76\u4F7F\u7528 <code>registerNatives()</code>\u5411 <code>JVM</code>\u8FDB\u884C\u6CE8\u518C\u3002\uFF08\u8FD9\u5C5E\u4E8E <code>JNI</code>\u7684\u8303\u7574\uFF0C\u6709\u5174\u8DA3\u7684\u53EF\u81EA\u884C\u67E5\u9605\u3002\uFF09</p><p><img src="https://mmbiz.qpic.cn/mmbiz_png/xq9PqibkVAzp1opdyycWF8FqUsnz1pdR07HZn67GzuK8MwwAyF5VBXbmOKfqRfQX1TtiaryNQCSpFgWVdvjibpewA/640?wx_fmt=png" alt=""></p><blockquote><p>\u4E3A\u4EC0\u4E48\u8981\u4F7F\u7528\u9759\u6001\u65B9\u6CD5\uFF0C\u8FD8\u8981\u653E\u5230\u9759\u6001\u5757\u4E2D\u5462\uFF1F</p></blockquote><p>\u6211\u4EEC\u77E5\u9053\u4E86\u5728\u7C7B\u521D\u59CB\u5316\u7684\u65F6\u5019\uFF0C\u4F1A\u4F9D\u6B21\u4ECE\u7236\u7C7B\u5230\u672C\u7C7B\u7684\u7C7B\u53D8\u91CF\u53CA\u7C7B\u521D\u59CB\u5316\u5757\u4E2D\u7684\u7C7B\u53D8\u91CF\u53CA\u65B9\u6CD5\u6309\u7167\u5B9A\u4E49\u987A\u5E8F\u653E\u5230 <code>&lt; clinit&gt;</code>\u65B9\u6CD5\u4E2D\uFF0C\u8FD9\u6837\u53EF\u4EE5\u4FDD\u8BC1\u7236\u7C7B\u7684\u7C7B\u53D8\u91CF\u53CA\u65B9\u6CD5\u7684\u521D\u59CB\u5316\u4E00\u5B9A\u5148\u4E8E\u5B50\u7C7B\u3002\u6240\u4EE5\u5F53\u5B50\u7C7B\u8C03\u7528\u76F8\u5E94 <code>native</code>\u65B9\u6CD5\uFF0C\u6BD4\u5982\u8BA1\u7B97 <code>hashCode</code>\u65F6\uFF0C\u4E00\u5B9A\u53EF\u4EE5\u4FDD\u8BC1\u80FD\u591F\u8C03\u7528\u5230 <code>JVM</code>\u7684 <code>native</code>\u65B9\u6CD5\u3002</p><ul><li><strong>getClass()</strong></li></ul><ol><li>public final native Class getClass();</li></ol><p>\u8FD9\u662F\u4E00\u4E2A <code>public</code>\u7684\u65B9\u6CD5\uFF0C\u6211\u4EEC\u53EF\u4EE5\u76F4\u63A5\u901A\u8FC7\u5BF9\u8C61\u8C03\u7528\u3002</p><p>\u7C7B\u52A0\u8F7D\u7684\u7B2C\u4E00\u9636\u6BB5\u7C7B\u7684\u52A0\u8F7D\u5C31\u662F\u5C06 <code>.class</code>\u6587\u4EF6\u52A0\u8F7D\u5230\u5185\u5B58\uFF0C\u5E76\u751F\u6210\u4E00\u4E2A <code>java.lang.Class</code>\u5BF9\u8C61\u7684\u8FC7\u7A0B\u3002 <code>getClass()</code>\u65B9\u6CD5\u5C31\u662F\u83B7\u53D6\u8FD9\u4E2A\u5BF9\u8C61\uFF0C\u8FD9\u662F\u5F53\u524D\u7C7B\u7684\u5BF9\u8C61\u5728\u8FD0\u884C\u65F6\u7C7B\u7684\u6240\u6709\u4FE1\u606F\u7684\u96C6\u5408\u3002\u8FD9\u4E2A\u65B9\u6CD5\u662F\u53CD\u5C04\u4E09\u79CD\u65B9\u5F0F\u4E4B\u4E00\u3002</p><ul><li><strong>hashCode()</strong></li></ul><ol><li>public native int hashCode();</li></ol><p>\u8FD9\u662F\u4E00\u4E2A <code>public</code>\u7684\u65B9\u6CD5\uFF0C\u6240\u4EE5\u5B50\u7C7B\u53EF\u4EE5\u91CD\u5199\u5B83\u3002\u8FD9\u4E2A\u65B9\u6CD5\u8FD4\u56DE\u5F53\u524D\u5BF9\u8C61\u7684 <code>hashCode</code>\u503C\uFF0C\u8FD9\u4E2A\u503C\u662F\u4E00\u4E2A\u6574\u6570\u8303\u56F4\u5185\u7684 <code>\uFF08-2^31~2^31-1\uFF09</code>\u6570\u5B57\u3002</p><p>\u5BF9\u4E8E <code>hashCode</code>\u6709\u4EE5\u4E0B\u51E0\u70B9\u7EA6\u675F:</p><ol><li><p>\u5728 Java\u5E94\u7528\u7A0B\u5E8F\u6267\u884C\u671F\u95F4\uFF0C\u5728\u5BF9\u540C\u4E00\u5BF9\u8C61\u591A\u6B21\u8C03\u7528\xA0<code>hashCode</code>\xA0\u65B9\u6CD5\u65F6\uFF0C\u5FC5\u987B\u4E00\u81F4\u5730\u8FD4\u56DE\u76F8\u540C\u7684\u6574\u6570\uFF0C\u524D\u63D0\u662F\u5C06\u5BF9\u8C61\u8FDB\u884C\xA0<code>equals</code>\xA0\u6BD4\u8F83\u65F6\u6240\u7528\u7684\u4FE1\u606F\u6CA1\u6709\u88AB\u4FEE\u6539\uFF1B</p></li><li><p>\u5982\u679C\u4E24\u4E2A\u5BF9\u8C61\xA0<code>x.equals(y)</code>\xA0\u65B9\u6CD5\u8FD4\u56DE\xA0<code>true</code>\uFF0C\u5219\xA0<code>x</code>\u3001\xA0<code>y</code>\u8FD9\u4E24\u4E2A\u5BF9\u8C61\u7684\xA0<code>hashCode</code>\u5FC5\u987B\u76F8\u7B49\u3002</p></li><li><p>\u5982\u679C\u4E24\u4E2A\u5BF9\u8C61\xA0<code>x.equals(y)</code>\xA0\u65B9\u6CD5\u8FD4\u56DE\xA0<code>false</code>\uFF0C\u5219\xA0<code>x</code>\u3001\xA0<code>y</code>\u8FD9\u4E24\u4E2A\u5BF9\u8C61\u7684\xA0<code>hashCode</code>\u53EF\u4EE5\u76F8\u7B49\u4E5F\u53EF\u4EE5\u4E0D\u7B49\u3002\u4F46\u662F\uFF0C\u4E3A\u4E0D\u76F8\u7B49\u7684\u5BF9\u8C61\u751F\u6210\u4E0D\u540C\u6574\u6570\u7ED3\u679C\u53EF\u4EE5\u63D0\u9AD8\u54C8\u5E0C\u8868\u7684\u6027\u80FD\u3002</p></li><li><p>\u9ED8\u8BA4\u7684\xA0<code>hashCode</code>\u662F\u5C06\u5185\u5B58\u5730\u5740\u8F6C\u6362\u4E3A\u7684\xA0<code>hash</code>\u503C\uFF0C\u91CD\u5199\u8FC7\u540E\u5C31\u662F\u81EA\u5B9A\u4E49\u7684\u8BA1\u7B97\u65B9\u5F0F\uFF1B\u4E5F\u53EF\u4EE5\u901A\u8FC7\xA0<code>System.identityHashCode(Object)</code>\u6765\u8FD4\u56DE\u539F\u672C\u7684\xA0<code>hashCode</code>\u3002</p></li><li><p>public\xA0class\xA0HashCodeTest\xA0{</p></li><li><p>private\xA0int\xA0age;</p></li><li><p>private\xA0String\xA0name;</p></li><li></li><li><p>@Override</p></li><li><p>public\xA0int\xA0hashCode()\xA0{</p></li><li><p>Object[]\xA0a\xA0=\xA0Stream.of(age,\xA0name).toArray();</p></li><li><p>int\xA0result\xA0=\xA01;</p></li><li><p>for\xA0(Object\xA0element\xA0:\xA0a)\xA0{</p></li><li><p>result\xA0=\xA031\xA0*\xA0result\xA0+\xA0(element\xA0==\xA0null\xA0?\xA00\xA0:\xA0element.hashCode());</p></li><li><p>}</p></li><li><p>return\xA0result;</p></li><li><p>}</p></li><li><p>}</p></li></ol><p>\u63A8\u8350\u4F7F\u7528 <code>Objects.hash(Object\u2026values)</code>\u65B9\u6CD5\u3002\u76F8\u4FE1\u770B\u6E90\u7801\u7684\u65F6\u5019\uFF0C\u90FD\u770B\u5230\u8BA1\u7B97 <code>hashCode</code>\u90FD\u4F7F\u7528\u4E86 <code>31</code>\u4F5C\u4E3A\u57FA\u7840\u4E58\u6570\uFF0C\u4E3A\u4EC0\u4E48\u4F7F\u7528 <code>31</code>\u5462\uFF1F\u6211\u6BD4\u8F83\u8D5E\u540C\u4E0E\u7406\u89E3 <code>result *31=(result&lt;&lt;5)-result</code>\u3002 <code>JVM</code>\u5E95\u5C42\u53EF\u4EE5\u81EA\u52A8\u505A\u4F18\u5316\u4E3A\u4F4D\u8FD0\u7B97\uFF0C\u6548\u7387\u5F88\u9AD8\uFF1B\u8FD8\u6709\u56E0\u4E3A <code>31</code>\u8BA1\u7B97\u7684 <code>hashCode</code>\u51B2\u7A81\u8F83\u5C11\uFF0C\u5229\u4E8E <code>hash</code>\u6876\u4F4D\u7684\u5206\u5E03\u3002</p><ul><li><strong>equals()</strong></li></ul><ol><li>public boolean equals(Object obj);</li></ol><p>\u7528\u4E8E\u6BD4\u8F83\u5F53\u524D\u5BF9\u8C61\u4E0E\u76EE\u6807\u5BF9\u8C61\u662F\u5426\u76F8\u7B49\uFF0C\u9ED8\u8BA4\u662F\u6BD4\u8F83\u5F15\u7528\u662F\u5426\u6307\u5411\u540C\u4E00\u5BF9\u8C61\u3002\u4E3A <code>public</code>\u65B9\u6CD5\uFF0C\u5B50\u7C7B\u53EF\u91CD\u5199\u3002</p><ol><li>public class Object{</li><li>public boolean equals(Object obj) {</li><li>return (this == obj);</li><li>}</li><li>}</li></ol><blockquote><p>\u4E3A\u4EC0\u4E48\u9700\u8981\u91CD\u5199 <code>equals</code>\u65B9\u6CD5\uFF1F</p></blockquote><p><strong>\u56E0\u4E3A\u5982\u679C\u4E0D\u91CD\u5199equals\u65B9\u6CD5\uFF0C\u5F53\u5C06\u81EA\u5B9A\u4E49\u5BF9\u8C61\u653E\u5230 <code>map</code>\u6216\u8005 <code>set</code>\u4E2D\u65F6</strong>\uFF1B\u5982\u679C\u8FD9\u65F6\u4E24\u4E2A\u5BF9\u8C61\u7684 <code>hashCode</code>\u76F8\u540C\uFF0C\u5C31\u4F1A\u8C03\u7528 <code>equals</code>\u65B9\u6CD5\u8FDB\u884C\u6BD4\u8F83\uFF0C\u8FD9\u4E2A\u65F6\u5019\u4F1A\u8C03\u7528 <code>Object</code>\u4E2D\u9ED8\u8BA4\u7684 <code>equals</code>\u65B9\u6CD5\uFF0C\u800C\u9ED8\u8BA4\u7684 <code>equals</code>\u65B9\u6CD5\u53EA\u662F\u6BD4\u8F83\u4E86\u4E24\u4E2A\u5BF9\u8C61\u7684\u5F15\u7528\u662F\u5426\u6307\u5411\u4E86\u540C\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u663E\u7136\u5927\u591A\u6570\u65F6\u5019\u90FD\u4E0D\u4F1A\u6307\u5411\uFF0C\u8FD9\u6837\u5C31\u4F1A\u5C06\u91CD\u590D\u5BF9\u8C61\u5B58\u5165 <code>map</code>\u6216\u8005 <code>set</code>\u4E2D\u3002\u8FD9\u5C31<strong>\u7834\u574F\u4E86 <code>map</code>\u4E0E <code>set</code>\u4E0D\u80FD\u5B58\u50A8\u91CD\u590D\u5BF9\u8C61\u7684\u7279\u6027\uFF0C\u4F1A\u9020\u6210\u5185\u5B58\u6EA2\u51FA</strong>\u3002</p><p><strong>\u91CD\u5199 <code>equals</code>\u65B9\u6CD5\u7684\u51E0\u6761\u7EA6\u5B9A\uFF1A</strong></p><ol><li><strong>\u81EA\u53CD\u6027</strong>\uFF1A\u5373\xA0<code>x.equals(x)</code>\u8FD4\u56DE\xA0<code>true</code>\uFF0C\xA0<code>x</code>\u4E0D\u4E3A\xA0<code>null</code>\uFF1B</li><li><strong>\u5BF9\u79F0\u6027</strong>\uFF1A\u5373\xA0<code>x.equals(y)</code>\u4E0E\xA0<code>y.equals(x\uFF09</code>\u7684\u7ED3\u679C\u76F8\u540C\uFF0C\xA0<code>x</code>\u4E0E\xA0<code>y</code>\u4E0D\u4E3A\xA0<code>null</code>\uFF1B</li><li><strong>\u4F20\u9012\u6027</strong>\uFF1A\u5373\xA0<code>x.equals(y)</code>\u7ED3\u679C\u4E3A\xA0<code>true</code>,\xA0<code>y.equals(z)</code>\u7ED3\u679C\u4E3A\xA0<code>true</code>\uFF0C\u5219\xA0<code>x.equals(z)</code>\u7ED3\u679C\u4E5F\u5FC5\u987B\u4E3A\xA0<code>true</code>\uFF1B</li><li><strong>\u4E00\u81F4\u6027</strong>\uFF1A\u5373\xA0<code>x.equals(y)</code>\u8FD4\u56DE\xA0<code>true</code>\u6216\xA0<code>false</code>\uFF0C\u5728\u672A\u66F4\u6539\xA0<code>equals</code>\u65B9\u6CD5\u4F7F\u7528\u7684\u53C2\u6570\u6761\u4EF6\u4E0B\uFF0C\u591A\u6B21\u8C03\u7528\u8FD4\u56DE\u7684\u7ED3\u679C\u4E5F\u5FC5\u987B\u4E00\u81F4\u3002\xA0<code>x</code>\u4E0E\xA0<code>y</code>\u4E0D\u4E3A\xA0<code>null</code>\u3002</li><li>\u5982\u679C\xA0<code>x</code>\u4E0D\u4E3A\xA0<code>null</code>,\xA0<code>x.equals(null)</code>\u8FD4\u56DE\xA0<code>false</code>\u3002</li></ol><ul><li><strong>clone()</strong></li></ul><ol><li>protected native Object clone() throws CloneNotSupportedException;</li></ol><p>\u6B64\u65B9\u6CD5\u8FD4\u56DE\u5F53\u524D\u5BF9\u8C61\u7684\u4E00\u4E2A\u526F\u672C\u3002</p><p>\u8FD9\u662F\u4E00\u4E2A <code>protected</code>\u65B9\u6CD5\uFF0C\u63D0\u4F9B\u7ED9\u5B50\u7C7B\u91CD\u5199\u3002\u4F46\u9700\u8981\u5B9E\u73B0 <code>Cloneable</code>\u63A5\u53E3\uFF0C\u8FD9\u662F\u4E00\u4E2A\u6807\u8BB0\u63A5\u53E3\uFF0C\u5982\u679C\u6CA1\u6709\u5B9E\u73B0\uFF0C\u5F53\u8C03\u7528 <code>object.clone()</code>\u65B9\u6CD5\uFF0C\u4F1A\u629B\u51FA <code>CloneNotSupportedException</code>\u3002</p><ol><li>public\xA0class\xA0CloneTest\xA0implements\xA0Cloneable\xA0{</li><li>private\xA0int\xA0age;</li><li>private\xA0String\xA0name;</li><li>//\u7701\u7565get\u3001set\u3001\u6784\u9020\u51FD\u6570\u7B49</li><li></li><li>@Override</li><li>protected\xA0CloneTest\xA0clone()\xA0throws\xA0CloneNotSupportedException\xA0{</li><li>return\xA0(CloneTest)\xA0super.clone();</li><li>}</li><li></li><li>public\xA0static\xA0void\xA0main(String[]\xA0args)\xA0throws\xA0CloneNotSupportedException\xA0{</li><li>CloneTest\xA0cloneTest\xA0=\xA0new\xA0CloneTest(23,\xA0&quot;XX&quot;);</li><li>CloneTest\xA0clone\xA0=\xA0cloneTest.clone();</li><li>System.out.println(clone\xA0==\xA0cloneTest);</li><li>System.out.println(cloneTest.getAge()==clone.getAge());</li><li>System.out.println(cloneTest.getName()==clone.getName());</li><li>}</li><li>}</li><li>//\u8F93\u51FA\u7ED3\u679C</li><li>//false</li><li>//true</li><li>//true</li></ol><p>\u4ECE\u8F93\u51FA\u6211\u4EEC\u770B\u89C1\uFF0C <code>clone</code>\u7684\u5BF9\u8C61\u662F\u4E00\u4E2A\u65B0\u7684\u5BF9\u8C61\uFF1B\u4F46\u539F\u5BF9\u8C61\u4E0E <code>clone</code>\u5BF9\u8C61\u7684 <code>String</code>\u7C7B\u578B\u7684 <code>name</code>\u5374\u662F\u540C\u4E00\u4E2A\u5F15\u7528\uFF0C\u8FD9\u8868\u660E\uFF0C <code>super.clone</code>\u65B9\u6CD5\u5BF9\u6210\u5458\u53D8\u91CF\u5982\u679C\u662F\u5F15\u7528\u7C7B\u578B\uFF0C\u8FDB\u884C\u662F\u6D45\u62F7\u8D1D\u3002</p><blockquote><p>\u90A3\u5982\u679C\u6211\u4EEC\u8981\u8FDB\u884C\u6DF1\u62F7\u8D1D\u600E\u4E48\u529E\u5462\uFF1F</p><p><strong>\u7B54\u6848\u662F</strong>\uFF1A\u5982\u679C\u6210\u5458\u53D8\u91CF\u662F\u5F15\u7528\u7C7B\u578B\uFF0C\u60F3\u5B9E\u73B0\u6DF1\u62F7\u8D1D\uFF0C\u5219\u6210\u5458\u53D8\u91CF\u4E5F\u8981\u5B9E\u73B0 <code>Cloneable</code>\u63A5\u53E3\uFF0C\u91CD\u5199 <code>clone</code>\u65B9\u6CD5\u3002</p></blockquote><ul><li><strong>toString()</strong></li></ul><ol><li>public String toString()\uFF1B</li></ol><p>\u8FD9\u662F\u4E00\u4E2A <code>public</code>\u65B9\u6CD5\uFF0C\u5B50\u7C7B\u53EF\u91CD\u5199\uFF0C\u5EFA\u8BAE\u6240\u6709\u5B50\u7C7B\u90FD\u91CD\u5199 <code>toString</code>\u65B9\u6CD5\uFF0C\u9ED8\u8BA4\u7684 <code>toString</code>\u65B9\u6CD5\uFF0C\u53EA\u662F\u5C06\u5F53\u524D\u7C7B\u7684\u5168\u9650\u5B9A\u6027\u7C7B\u540D <code>+@+</code>\u5341\u516D\u8FDB\u5236\u7684 <code>hashCode</code>\u503C\u3002</p><p><strong>\u6211\u4EEC\u601D\u8003\u4E00\u4E0B\u4E3A\u4EC0\u4E48\u9700\u8981toString\u65B9\u6CD5\uFF1F</strong></p><p>\u53EF\u4EE5\u8FD9\u4E48\u7406\u89E3\uFF1A\u8FD4\u56DE\u5F53\u524D\u5BF9\u8C61\u7684\u5B57\u7B26\u4E32\u8868\u793A\uFF0C\u53EF\u4EE5\u5C06\u5176\u6253\u5370\u65B9\u4FBF\u67E5\u770B\u5BF9\u8C61\u7684\u4FE1\u606F\uFF0C\u65B9\u4FBF\u8BB0\u5F55\u65E5\u5FD7\u4FE1\u606F\u63D0\u4F9B\u8C03\u8BD5\u3002\u6211\u4EEC\u53EF\u4EE5\u9009\u62E9\u9700\u8981\u8868\u793A\u7684\u91CD\u8981\u4FE1\u606F\u91CD\u5199\u5230 <code>toString</code>\u65B9\u6CD5\u4E2D\u3002</p><ul><li><strong>wait()/ wait(long)/ wait(long,int)</strong></li></ul><p>\u8FD9\u4E09\u4E2A\u65B9\u6CD5\u662F\u7528\u6765\u7EBF\u7A0B\u95F4\u901A\u4FE1\u7528\u7684\uFF0C\u4F5C\u7528\u662F\u963B\u585E\u5F53\u524D\u7EBF\u7A0B\uFF0C\u7B49\u5F85\u5176\u4ED6\u7EBF\u7A0B\u8C03\u7528 <code>notify()/notifyAll()</code>\u65B9\u6CD5\u5C06\u5176\u5524\u9192\u3002\u8FD9\u4E9B\u65B9\u6CD5\u90FD\u662F <code>publicfinal</code>\u7684\uFF0C\u4E0D\u53EF\u88AB\u91CD\u5199\u3002</p><p><strong>\u6CE8\u610F\uFF1A</strong></p><ol><li>\u6B64\u65B9\u6CD5\u53EA\u80FD\u5728\u5F53\u524D\u7EBF\u7A0B\u83B7\u53D6\u5230\u5BF9\u8C61\u7684\u9501\u76D1\u89C6\u5668\u4E4B\u540E\u624D\u80FD\u8C03\u7528\uFF0C\u5426\u5219\u4F1A\u629B\u51FA\xA0<code>IllegalMonitorStateException</code>\u5F02\u5E38\u3002</li><li>\u8C03\u7528\xA0<code>wait</code>\u65B9\u6CD5\uFF0C\u7EBF\u7A0B\u4F1A\u5C06\u9501\u76D1\u89C6\u5668\u8FDB\u884C\u91CA\u653E\uFF1B\u800C\xA0<code>Thread.sleep\uFF0CThread.yield()</code>\u5E76\u4E0D\u4F1A\u91CA\u653E\u9501\u3002</li><li><code>wait</code>\u65B9\u6CD5\u4F1A\u4E00\u76F4\u963B\u585E\uFF0C\u76F4\u5230\u5176\u4ED6\u7EBF\u7A0B\u8C03\u7528\u5F53\u524D\u5BF9\u8C61\u7684\xA0<code>notify()/notifyAll()</code>\u65B9\u6CD5\u5C06\u5176\u5524\u9192\uFF1B\u800C\xA0<code>wait(long)</code>\u662F\u7B49\u5F85\u7ED9\u5B9A\u8D85\u65F6\u65F6\u95F4\u5185\uFF08\u5355\u4F4D\u6BEB\u79D2\uFF09\uFF0C\u5982\u679C\u8FD8\u6CA1\u6709\u8C03\u7528\xA0<code>notify()/nofiyAll()</code>\u4F1A\u81EA\u52A8\u5524\u9192\uFF1B\xA0<code>wait(long,int)</code>\u5982\u679C\u7B2C\u4E8C\u4E2A\u53C2\u6570\u5927\u4E8E\xA0<code>0</code>\u5E76\u4E14\u5C0F\u4E8E\xA0<code>999999</code>\uFF0C\u5219\u7B2C\u4E00\u4E2A\u53C2\u6570\xA0<code>+1</code>\u4F5C\u4E3A\u8D85\u65F6\u65F6\u95F4\uFF1B</li></ol><ul><li><strong>notify()/notifyAll()</strong></li></ul><p>\u524D\u9762\u8BF4\u4E86\uFF0C\u5982\u679C\u5F53\u524D\u7EBF\u7A0B\u83B7\u5F97\u4E86\u5F53\u524D\u5BF9\u8C61\u9501\uFF0C\u8C03\u7528 <code>wait</code>\u65B9\u6CD5\uFF0C\u5C06\u9501\u91CA\u653E\u5E76\u963B\u585E\uFF1B\u8FD9\u65F6\u53E6\u4E00\u4E2A\u7EBF\u7A0B\u83B7\u53D6\u5230\u4E86\u6B64\u5BF9\u8C61\u9501\uFF0C\u5E76\u8C03\u7528\u6B64\u5BF9\u8C61\u7684 <code>notify()/notifyAll()</code>\u65B9\u6CD5\u5C06\u4E4B\u524D\u7684\u7EBF\u7A0B\u5524\u9192\u3002\u8FD9\u4E9B\u65B9\u6CD5\u90FD\u662F <code>publicfinal</code>\u7684\uFF0C\u4E0D\u53EF\u88AB\u91CD\u5199\u3002</p><ol><li><code>publicfinalnativevoidnotify();</code>\xA0\u968F\u673A\u5524\u9192\u4E4B\u524D\u5728\u5F53\u524D\u5BF9\u8C61\u4E0A\u8C03\u7528\xA0<code>wait</code>\u65B9\u6CD5\u7684\u4E00\u4E2A\u7EBF\u7A0B</li><li><code>publicfinalnativevoidnotifyAll()</code>; \u5524\u9192\u6240\u6709\u4E4B\u524D\u5728\u5F53\u524D\u5BF9\u8C61\u4E0A\u8C03\u7528\xA0<code>wait</code>\u65B9\u6CD5\u7684\u7EBF\u7A0B</li></ol><p><strong>\u6CE8\u610F</strong>\uFF1A\u8C03\u7528 <code>notify()</code>\u540E\uFF0C\u963B\u585E\u7EBF\u7A0B\u88AB\u5524\u9192\uFF0C\u53EF\u4EE5\u53C2\u4E0E\u9501\u7684\u7ADE\u4E89\uFF0C\u4F46\u53EF\u80FD\u8C03\u7528 <code>notify()</code>\u65B9\u6CD5\u7684\u7EBF\u7A0B\u8FD8\u8981\u7EE7\u7EED\u505A\u5176\u4ED6\u4E8B\uFF0C\u9501\u5E76\u672A\u91CA\u653E\uFF0C\u6240\u4EE5\u6211\u4EEC\u770B\u5230\u7684\u7ED3\u679C\u662F\uFF0C\u65E0\u8BBA <code>notify()</code>\u662F\u5728\u65B9\u6CD5\u4E00\u5F00\u59CB\u8C03\u7528\uFF0C\u8FD8\u662F\u6700\u540E\u8C03\u7528\uFF0C\u963B\u585E\u7EBF\u7A0B\u90FD\u8981\u7B49\u5F85\u5F53\u524D\u7EBF\u7A0B\u7ED3\u675F\u624D\u80FD\u5F00\u59CB\u3002</p><blockquote><p>\u4E3A\u4EC0\u4E48 <code>wait()/notify()</code>\u65B9\u6CD5\u8981\u653E\u5230 <code>Object</code>\u4E2D\u5462\uFF1F \u56E0\u4E3A\u6BCF\u4E2A\u5BF9\u8C61\u90FD\u53EF\u4EE5\u6210\u4E3A\u9501\u76D1\u89C6\u5668\u5BF9\u8C61\uFF0C\u6240\u4EE5\u653E\u5230 <code>Object</code>\u4E2D\uFF0C\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528\u3002</p></blockquote><ul><li><strong>finalize()</strong></li></ul><ol><li>protected void finalize() throws Throwable ;</li></ol><p>\u6B64\u65B9\u6CD5\u662F\u5728\u5783\u573E\u56DE\u6536\u4E4B\u524D\uFF0CJVM\u4F1A\u8C03\u7528\u6B64\u65B9\u6CD5\u6765\u6E05\u7406\u8D44\u6E90\u3002\u6B64\u65B9\u6CD5\u53EF\u80FD\u4F1A\u5C06\u5BF9\u8C61\u91CD\u65B0\u7F6E\u4E3A\u53EF\u8FBE\u72B6\u6001\uFF0C\u5BFC\u81F4JVM\u65E0\u6CD5\u8FDB\u884C\u5783\u573E\u56DE\u6536\u3002</p><p>\u6211\u4EEC\u77E5\u9053java\u76F8\u5BF9\u4E8EC++\u5F88\u5927\u7684\u4F18\u52BF\u662F\u7A0B\u5E8F\u5458\u4E0D\u7528\u624B\u52A8\u7BA1\u7406\u5185\u5B58\uFF0C\u5185\u5B58\u7531jvm\u7BA1\u7406\uFF1B\u5982\u679C\u6211\u4EEC\u7684\u5F15\u7528\u5BF9\u8C61\u5728\u5806\u4E2D\u6CA1\u6709\u5F15\u7528\u6307\u5411\u4ED6\u4EEC\u65F6\uFF0C\u5F53\u5185\u5B58\u4E0D\u8DB3\u65F6\uFF0CJVM\u4F1A\u81EA\u52A8\u5C06\u8FD9\u4E9B\u5BF9\u8C61\u8FDB\u884C\u56DE\u6536\u91CA\u653E\u5185\u5B58\uFF0C\u8FD9\u5C31\u662F\u6211\u4EEC\u5E38\u8BF4\u7684\u5783\u573E\u56DE\u6536\u3002\u4F46\u5783\u573E\u56DE\u6536\u6CA1\u6709\u8BB2\u8FF0\u7684\u8FD9\u4E48\u7B80\u5355\u3002</p><p><strong><code>finalize()</code>\u65B9\u6CD5\u5177\u6709\u5982\u4E0B4\u4E2A\u7279\u70B9\uFF1A</strong></p><ol><li>\u6C38\u8FDC\u4E0D\u8981\u4E3B\u52A8\u8C03\u7528\u67D0\u4E2A\u5BF9\u8C61\u7684\xA0<code>finalize()</code>\u65B9\u6CD5\uFF0C\u8BE5\u65B9\u6CD5\u7531\u5783\u573E\u56DE\u6536\u673A\u5236\u81EA\u5DF1\u8C03\u7528\uFF1B</li><li><code>finalize()</code>\u4F55\u65F6\u88AB\u8C03\u7528\uFF0C\u662F\u5426\u88AB\u8C03\u7528\u5177\u6709\u4E0D\u786E\u5B9A\u6027\uFF1B</li><li>\u5F53\xA0<code>JVM</code>\u6267\u884C\u53EF\u6062\u590D\u5BF9\u8C61\u7684\xA0<code>finalize()</code>\u53EF\u80FD\u4F1A\u5C06\u6B64\u5BF9\u8C61\u91CD\u65B0\u53D8\u4E3A\u53EF\u8FBE\u72B6\u6001\uFF1B</li><li>\u5F53\xA0<code>JVM</code>\u6267\u884C\xA0<code>finalize()</code>\u65B9\u6CD5\u65F6\u51FA\u73B0\u5F02\u5E38\uFF0C\u5783\u573E\u56DE\u6536\u673A\u5236\u4E0D\u4F1A\u62A5\u544A\u5F02\u5E38\uFF0C\u7A0B\u5E8F\u7EE7\u7EED\u6267\u884C\u3002</li></ol><hr><p><strong>\u603B\xA0 \xA0\u7ED3</strong></p><p>\u672C\u7BC7\u4E3E\u4F8B\u8BB2\u89E3\u4E86 <code>Objec</code>\u4E2D\u7684\u6240\u6709\u65B9\u6CD5\u7684\u4F5C\u7528\u3001\u610F\u4E49\u53CA\u4F7F\u7528\uFF0C\u4ECE <code>java</code>\u6700\u57FA\u7840\u7684\u7C7B\u51FA\u53D1\uFF0C\u611F\u53D7 <code>java</code>\u8BBE\u8BA1\u4E4B\u7F8E\u5427\u3002\u6211\u662F\u4E0D\u4F1A\u9AD8\u8BC9\u5927\u5BB6\uFF0C<strong>\u8FD9\u597D\u50CF\u9762\u8BD5\u4E5F\u4F1A\u95EE\u7684\u3010\u644A\u624B\u3011</strong>\u3002</p><p><strong>\u540E\xA0 \xA0\u8BB0</strong></p><blockquote><p>\u82E5\u6709\u9519\u8BEF\u6216\u8005\u4E0D\u5F53\u4E4B\u5904\uFF0C\u53EF\u5728\u672C\u516C\u4F17\u53F7\u5185\u53CD\u9988\uFF0C\u4E00\u8D77\u5B66\u4E60\u4EA4\u6D41\uFF01</p></blockquote><p><strong>\u66F4\u591A\u70ED\u6587\u5728\u6B64\uFF1A</strong></p>',67),p=o("\u25CF\xA0\xA0"),b={href:"http://mp.weixin.qq.com/s?__biz=MzU4ODI1MjA3NQ==&mid=2247484006&idx=1&sn=15cf2b8a17bd6f49952f65bdc718724b&chksm=fdded4a2caa95db4b3099fa75635a7d99655e22963f9dc65446cd703a66cbc9b2a22b87b7ece&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"},h=o("Spring Boot \u7CFB\u5217\u5B9E\u6218\u6587\u7AE0\u5408\u96C6\uFF08\u6E90\u7801\u5DF2\u5F00\u6E90\uFF09"),g=o("\u25CF\xA0\xA0"),u={href:"http://mp.weixin.qq.com/s?__biz=MzU4ODI1MjA3NQ==&mid=2247484027&idx=1&sn=1f005a4c2ec45631865429ff9ccfbe44&chksm=fdded4bfcaa95da942be42b38c7733bdf5ce322136231ca2014dc6b92c117a2fe5bea35bb6bb&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"},f=o("\u7A0B\u5E8F\u5458\u5199\u7B80\u5386\u65F6\u5FC5\u987B\u6CE8\u610F\u7684\u6280\u672F\u8BCD\u6C47\u62FC\u5199"),_=o("\u25CF\xA0\xA0"),m={href:"http://mp.weixin.qq.com/s?__biz=MzU4ODI1MjA3NQ==&mid=2247484161&idx=1&sn=6378dbce60394dc71877dd890b52309d&chksm=fdded5c5caa95cd39f81a39863dd56cb4f4787bd69b9795b050552de70b255d4187808ed5e16&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"},q=o("\u57FA\u4E8ESpring Security OAuth2"),x=o("\u7684SSO\u5355\u70B9\u767B\u5F55+JWT\u6743\u9650\u63A7\u5236\u5B9E\u6218"),C=o("\u25CF\xA0\xA0"),j={href:"http://mp.weixin.qq.com/s?__biz=MzU4ODI1MjA3NQ==&mid=2247483807&idx=1&sn=e3a164701c2f6e0f3cf91bd25d595479&chksm=fdded75bcaa95e4d857e5f4e040f37b7c3d8f3b301856493419498b6e54d8a43addfc25e7505&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"},w=o("\u4ECE\u4E00\u4EFD\u914D\u7F6E\u6E05\u5355\u8BE6\u89E3Nginx\u670D\u52A1\u5668\u914D\u7F6E"),y=o("\u25CF\xA0\xA0"),k={href:"http://mp.weixin.qq.com/s?__biz=MzU4ODI1MjA3NQ==&mid=2247484183&idx=1&sn=6f2d948b0a20aba18b04371f9a0de17d&chksm=fdded5d3caa95cc5de641eb44b617073d7f46ad1e768ba00ea72e97f6584486273e3a84c4f62&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"},v=o("\u5982\u4F55\u5728Windows\u4E0B\u50CFMac\u4E00\u6837\u4F18\u96C5\u7684\u5F00\u53D1"),z=o("\u25CF\xA0\xA0"),O={href:"http://mp.weixin.qq.com/s?__biz=MzU4ODI1MjA3NQ==&mid=2247483763&idx=1&sn=6ceb9e73540b5016dadfb212636b3855&chksm=fdded7b7caa95ea1165b507397c39267d3bf7522c83cc8ed10eae4ee4a13db831eb58a3dc167&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"},M=o("Docker\u5BB9\u5668\u53EF\u89C6\u5316\u76D1\u63A7\u4E2D\u5FC3\u642D\u5EFA"),S=o("\u25CF\xA0\xA0"),A={href:"http://mp.weixin.qq.com/s?__biz=MzU4ODI1MjA3NQ==&mid=2247483768&idx=1&sn=df06fd3fc033ef8120a14677db388d9a&chksm=fdded7bccaa95eaaac9ff046c1c7fad0d3489ec7af546d829175af6106340e053f570e8c927c&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"},N=o("\u5229\u7528ELK\u642D\u5EFADocker\u5BB9\u5668\u5316\u5E94\u7528\u65E5\u5FD7\u4E2D\u5FC3"),V=o("\u25CF\xA0\xA0"),J={href:"http://mp.weixin.qq.com/s?__biz=MzU4ODI1MjA3NQ==&mid=2247483780&idx=1&sn=e04264df80209244f8e263ef0931d134&chksm=fdded740caa95e56190918108985795439a277a88e054c119b3cb63a92a8e0899943d9f3e02b&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"},T=o("RPC\u6846\u67B6\u5B9E\u8DF5\u4E4B\uFF1AGoogle gRPC"),E=o("\u25CF\xA0\xA0"),I={href:"http://mp.weixin.qq.com/s?__biz=MzU4ODI1MjA3NQ==&mid=2247483877&idx=1&sn=113867c83c0cecf5781a9e1a7f91bdd1&chksm=fdded721caa95e37f757660e7f14775ac55e4a72f9c24b119af7ef83ca7587ceb53f22298c99&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"},U=o("\u4E00\u6587\u8BE6\u89E3 Linux\u7CFB\u7EDF\u5E38\u7528\u76D1\u63A7\u5DE5\u5177"),D=e("hr",null,null,-1),Q=e("p",null,[o("\u66F4\u591A "),e("strong",null,"\u52A1\u5B9E\u3001\u80FD\u770B\u61C2\u3001\u53EF\u590D\u73B0\u7684"),o("\xA0\u6280\u672F\u6587\u7AE0\u5C3D\u5728\u516C\u4F17\u53F7 "),e("strong",null,"CodeSheep"),o("\uFF0C\u6B22\u8FCE\u626B\u7801\u8BA2\u9605\uFF0C\u7B2C\u4E00\u65F6\u95F4\u83B7\u53D6\u66F4\u65B0 \u2B07\uFE0F\u2B07\uFE0F\u2B07\uFE0F")],-1),F=e("p",null,[e("img",{src:"https://mmbiz.qpic.cn/mmbiz_gif/xq9PqibkVAzr3Ax6dwjysCZ8Zsom5kkKicbdS1tYartkx9YyCm5qtynaUicLDXjYcZaQbXVIFjBETA7RJJEYvkiciaA/640?",alt:""})],-1),P=o("\u8F6C\u8F7D\u94FE\u63A5\uFF1A"),X={href:"https://mp.weixin.qq.com/s/eJy74CbzthHMgRPOA_4wEA",target:"_blank",rel:"noopener noreferrer"},B=o("https://mp.weixin.qq.com/s/eJy74CbzthHMgRPOA_4wEA"),L=o("\uFF0C\u51FA\u5904\uFF1ACodeSheep\uFF0C\u6574\u7406\uFF1A\u6C89\u9ED8\u738B\u4E8C");function R(W,Y){const c=l("ExternalLinkIcon");return i(),n("div",null,[r,e("p",null,[p,e("a",b,[h,d(c)])]),e("p",null,[g,e("a",u,[f,d(c)])]),e("p",null,[_,e("a",m,[q,d(c)]),x]),e("p",null,[C,e("a",j,[w,d(c)])]),e("p",null,[y,e("a",k,[v,d(c)])]),e("p",null,[z,e("a",O,[M,d(c)])]),e("p",null,[S,e("a",A,[N,d(c)])]),e("p",null,[V,e("a",J,[T,d(c)])]),e("p",null,[E,e("a",I,[U,d(c)])]),D,Q,F,e("blockquote",null,[e("p",null,[P,e("a",X,[B,d(c)]),L])])])}var Z=t(a,[["render",R],["__file","object.html.vue"]]);export{Z as default};
