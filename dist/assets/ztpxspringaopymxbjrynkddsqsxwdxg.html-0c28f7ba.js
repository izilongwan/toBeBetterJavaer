import{_ as n,W as r,X as o,Y as e,a0 as a,Z as t,a1 as g,C as c}from"./framework-bb7be5cb.js";const d={},s=g(`<p>下面我会简单介绍一下 AOP 的基础知识，以及使用方法，然后直接对源码进行拆解。不 BB，上文章目录。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-ztpxspringaopymxbjrynkddsqsxwdxg-47fdcb84-4294-416f-b95e-9d9bd427717b.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="_1-基础知识" tabindex="-1"><a class="header-anchor" href="#_1-基础知识" aria-hidden="true">#</a> 1. 基础知识</h2><h3 id="_1-1-什么是-aop" tabindex="-1"><a class="header-anchor" href="#_1-1-什么是-aop" aria-hidden="true">#</a> 1.1 什么是 AOP ？</h3><p>AOP 的全称是 “Aspect Oriented Programming”，即<strong>面向切面编程</strong>。</p><p>在 AOP 的思想里面，周边功能（比如性能统计，日志，事务管理等）被定义为<strong>切面</strong>，核心功能和切面功能分别独立进行开发，然后<strong>把核心功能和切面功能“编织”在一起，这就叫 AOP。</strong></p><p>AOP 能够将那些与业务无关，却为业务模块所共同调用的逻辑封装起来，便于减少系统的重复代码，降低模块间的耦合度，并有利于未来的可拓展性和可维护性。</p><h3 id="_1-2-aop-基础概念" tabindex="-1"><a class="header-anchor" href="#_1-2-aop-基础概念" aria-hidden="true">#</a> 1.2 AOP 基础概念</h3><ul><li><strong>连接点(Join point)</strong> ：能够被拦截的地方，Spring AOP 是基于动态代理的，所以是方法拦截的，每个成员方法都可以称之为连接点；</li><li><strong>切点(Poincut)</strong> ：每个方法都可以称之为连接点，我们具体定位到某一个方法就成为切点；</li><li><strong>增强/通知(Advice)</strong> ：表示添加到切点的一段逻辑代码，并定位连接点的方位信息，简单来说就定义了是干什么的，具体是在哪干；</li><li><strong>织入(Weaving)</strong> ：将增强/通知添加到目标类的具体连接点上的过程；</li><li><strong>引入/引介(Introduction)</strong> ：允许我们向现有的类添加新方法或属性，是一种特殊的增强；</li><li><strong>切面(Aspect)</strong> ：切面由切点和增强/通知组成，它既包括了横切逻辑的定义、也包括了连接点的定义。</li></ul><p>上面的解释偏官方，下面用“方言”再给大家解释一遍。</p><ul><li>切入点（Pointcut）：在哪些类，哪些方法上切入（<strong>where</strong>）；</li><li>通知（Advice）：在方法执行的什么时机（<strong>when</strong>：方法前/方法后/方法前后）做什么（<strong>what</strong>：增强的功能）；</li><li>切面（Aspect）：切面 = 切入点 + 通知，通俗点就是在什么时机，什么地方，做什么增强；</li><li>织入（Weaving）：把切面加入到对象，并创建出代理对象的过程，这个由 Spring 来完成。</li></ul><p>5 种通知的分类：</p><ul><li><strong>前置通知(Before Advice)</strong> ：在目标方法被调用前调用通知功能；</li><li><strong>后置通知(After Advice)</strong> ：在目标方法被调用之后调用通知功能；</li><li><strong>返回通知(After-returning)</strong> ：在目标方法成功执行之后调用通知功能；</li><li><strong>异常通知(After-throwing)</strong> ：在目标方法抛出异常之后调用通知功能；</li><li><strong>环绕通知(Around)</strong> ：把整个目标方法包裹起来，在被调用前和调用之后分别调用通知功能。</li></ul><h3 id="_1-3-aop-简单示例" tabindex="-1"><a class="header-anchor" href="#_1-3-aop-简单示例" aria-hidden="true">#</a> 1.3 AOP 简单示例</h3><p>新建 Louzai 类：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@Data
@Service
public class Louzai {

    public void everyDay() {
        System.out.println(&quot;睡觉&quot;);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>添加 LouzaiAspect 切面：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@Aspect
@Component
public class LouzaiAspect {
    
    @Pointcut(&quot;execution(* com.java.Louzai.everyDay())&quot;)
    private void myPointCut() {
    }

    // 前置通知
    @Before(&quot;myPointCut()&quot;)
    public void myBefore() {
        System.out.println(&quot;吃饭&quot;);
    }

    // 后置通知
    @AfterReturning(value = &quot;myPointCut()&quot;)
    public void myAfterReturning() {
        System.out.println(&quot;打豆豆。。。&quot;);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>applicationContext.xml 添加：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!--启用@Autowired等注解--&gt;
&lt;context:annotation-config/&gt;
&lt;context:component-scan base-package=&quot;com&quot; /&gt;
&lt;aop:aspectj-autoproxy proxy-target-class=&quot;true&quot;/&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>程序入口：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class MyTest {
    public static void main(String[] args) {
        ApplicationContext context =new ClassPathXmlApplicationContext(&quot;classpath:applicationContext.xml&quot;);
        Louzai louzai = (Louzai) context.getBean(&quot;louzai&quot;);
        louzai.everyDay();
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>吃饭
睡觉
打豆豆。。。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个示例非常简单，“睡觉” 加了前置和后置通知，但是 Spring 在内部是如何工作的呢？</p><h3 id="_1-4-spring-aop-工作流程" tabindex="-1"><a class="header-anchor" href="#_1-4-spring-aop-工作流程" aria-hidden="true">#</a> 1.4 Spring AOP 工作流程</h3><p>为了方便大家能更好看懂后面的源码，我先整体介绍一下源码的执行流程，让大家有一个整体的认识，否则容易被绕进去。</p><p>整个 Spring AOP 源码，其实分为 3 块，我们会结合上面的示例，给大家进行讲解。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-ztpxspringaopymxbjrynkddsqsxwdxg-b7bd6ce5-0cec-4f31-8bbf-d4ea8a5e7507.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>第一块就是<strong>前置处理</strong>，我们在创建 Louzai Bean 的前置处理中，会遍历程序所有的切面信息，然后<strong>将切面信息保存在缓存中</strong>，比如示例中 LouzaiAspect 的所有切面信息。</p><p>第二块就是<strong>后置处理</strong>，我们在创建 Louzai Bean 的后置处理器中，里面会做两件事情：</p><ul><li><strong>获取 Louzai 的切面方法</strong>：首先会从缓存中拿到所有的切面信息，和 Louzai 的所有方法进行匹配，然后找到 Louzai 所有需要进行 AOP 的方法。</li><li><strong>创建 AOP 代理对象</strong>：结合 Louzai 需要进行 AOP 的方法，选择 Cglib 或 JDK，创建 AOP 代理对象。</li></ul><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-ztpxspringaopymxbjrynkddsqsxwdxg-b339dde2-e0aa-4554-a6d0-d9ecc46248b5.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>第三块就是<strong>执行切面</strong>，通过“责任链 + 递归”，去执行切面。</p><h2 id="_2-源码解读" tabindex="-1"><a class="header-anchor" href="#_2-源码解读" aria-hidden="true">#</a> 2. 源码解读</h2><blockquote><p>注意：Spring 的版本是 5.2.15.RELEASE，否则和我的代码不一样！！！</p></blockquote><p>除了原理部分，上面的知识都不难，下面才是我们的重头戏，让你跟着楼仔，走一遍代码流程。</p><h3 id="_2-1-代码入口" tabindex="-1"><a class="header-anchor" href="#_2-1-代码入口" aria-hidden="true">#</a> 2.1 代码入口</h3><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-ztpxspringaopymxbjrynkddsqsxwdxg-e5f3f404-beb8-49c1-ad70-0b1352480113.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-ztpxspringaopymxbjrynkddsqsxwdxg-b65fb6b6-dea7-45e2-96ad-e2e83430072e.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>这里需要多跑几次，把前面的 beanName 跳过去，只看 louzai。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-ztpxspringaopymxbjrynkddsqsxwdxg-1e29c65c-e0b1-4d27-8d9a-920940087d62.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-ztpxspringaopymxbjrynkddsqsxwdxg-d33887ee-fa82-4f95-9d96-7e477b056d28.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>进入 doGetBean()，进入创建 Bean 的逻辑。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-ztpxspringaopymxbjrynkddsqsxwdxg-da9819ba-ae1f-4748-9e37-ae367c6708fd.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_2-2-前置处理" tabindex="-1"><a class="header-anchor" href="#_2-2-前置处理" aria-hidden="true">#</a> 2.2 前置处理</h3><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-ztpxspringaopymxbjrynkddsqsxwdxg-4d65b97e-829a-4b6a-a344-f4e4bd2aa7df.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>主要就是遍历切面，放入缓存。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-ztpxspringaopymxbjrynkddsqsxwdxg-caf81351-a499-4b88-bd74-455333d4d9aa.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-ztpxspringaopymxbjrynkddsqsxwdxg-91248113-54bd-4532-a639-5f64248e362a.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-ztpxspringaopymxbjrynkddsqsxwdxg-5b677522-3760-4cfb-956b-27af3b811227.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-ztpxspringaopymxbjrynkddsqsxwdxg-92b096f5-4132-4448-bafe-3220393762bf.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-ztpxspringaopymxbjrynkddsqsxwdxg-1d2fb3b6-77e4-4052-ad2f-b269573f126e.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-ztpxspringaopymxbjrynkddsqsxwdxg-a4aacebb-e56a-4387-b717-13bef97ccb99.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>这里是重点！敲黑板！！！</strong></p><ol><li>我们会先遍历所有的类；</li><li>判断是否切面，只有切面才会进入后面逻辑；</li><li>获取每个 Aspect 的切面列表；</li><li>保存 Aspect 的切面列表到缓存 advisorsCache 中。</li></ol><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-ztpxspringaopymxbjrynkddsqsxwdxg-9e382893-619c-493d-ae29-4a55bd7eb9f7.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>到这里，获取切面信息的流程就结束了，<strong>因为后续对切面数据的获取，都是从缓存 advisorsCache 中拿到。</strong></p><p>下面就对上面的流程，再深入解读一下。</p><h3 id="_2-2-1-判断是否是切面" tabindex="-1"><a class="header-anchor" href="#_2-2-1-判断是否是切面" aria-hidden="true">#</a> 2.2.1 判断是否是切面</h3><p>上图的第 2 步，逻辑如下：</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-ztpxspringaopymxbjrynkddsqsxwdxg-0ac0dfa8-2ab2-4fd6-90fe-969249a38387.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_2-2-2-获取切面列表" tabindex="-1"><a class="header-anchor" href="#_2-2-2-获取切面列表" aria-hidden="true">#</a> 2.2.2 获取切面列表</h3><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-ztpxspringaopymxbjrynkddsqsxwdxg-705ec3d5-41c0-4321-a1bf-6dbcfc0a8f62.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-ztpxspringaopymxbjrynkddsqsxwdxg-aeb8a9c9-2776-4833-8c92-bfa8e04cd3e4.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-ztpxspringaopymxbjrynkddsqsxwdxg-b8e444fc-643d-42a4-adb2-8228a4c644b0.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-ztpxspringaopymxbjrynkddsqsxwdxg-e78eca5d-653a-4441-8cf9-6928131c0d14.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>进入到 getAdvice()，生成切面信息。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-ztpxspringaopymxbjrynkddsqsxwdxg-4d9de4a5-894b-4b97-a7e0-80bd996db8bc.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_2-3-后置处理" tabindex="-1"><a class="header-anchor" href="#_2-3-后置处理" aria-hidden="true">#</a> 2.3 后置处理</h3><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-ztpxspringaopymxbjrynkddsqsxwdxg-d47f0eb7-131d-4ff9-94d7-a6a2af5046bb.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>主要就是从缓存拿切面，和 louzai 的方法匹配，并创建 AOP 代理对象。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-ztpxspringaopymxbjrynkddsqsxwdxg-4eeadb6c-53b7-4328-9444-d5936e2a38c0.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>进入 doCreateBean()，走下面逻辑。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-ztpxspringaopymxbjrynkddsqsxwdxg-bfccf30a-f56e-431e-a51c-45e63c312b3f.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-ztpxspringaopymxbjrynkddsqsxwdxg-2b730853-42ea-4bc0-a5be-455eb9e0da48.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-ztpxspringaopymxbjrynkddsqsxwdxg-db0b89d3-f370-4725-bb87-4c66a7387dbe.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-ztpxspringaopymxbjrynkddsqsxwdxg-7b8c3321-e6d4-4462-b6f5-b10e7cb1108b.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>这里是重点！敲黑板！！！</strong></p><ol><li>先获取 louzai 类的所有切面列表；</li><li>创建一个 AOP 的代理对象。</li></ol><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-ztpxspringaopymxbjrynkddsqsxwdxg-fe58ed47-bffe-4d48-a574-5a3c56450587.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="_2-3-1-获取切面" tabindex="-1"><a class="header-anchor" href="#_2-3-1-获取切面" aria-hidden="true">#</a> 2.3.1 获取切面</h4><p>我们先进入第一步，看是如何获取 louzai 的切面列表。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-ztpxspringaopymxbjrynkddsqsxwdxg-2a73d781-cdc3-4212-932a-c6f3ac1d455c.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-ztpxspringaopymxbjrynkddsqsxwdxg-ee619aa4-647c-423f-921c-063d22af5bde.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-ztpxspringaopymxbjrynkddsqsxwdxg-c0ecc5fd-be1f-41c9-a7f6-06691774ff69.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>进入 buildAspectJAdvisors()，这个方法应该有印象，就是前面将切面信息放入缓存 advisorsCache 中，现在这里就是要获取缓存。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-ztpxspringaopymxbjrynkddsqsxwdxg-363a27c9-f1e7-4c95-be4e-cafbf0feb76f.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-ztpxspringaopymxbjrynkddsqsxwdxg-5a30626f-28da-494b-b8c1-d0bb8025fe7d.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>再回到 findEligibleAdvisors()，从缓存拿到所有的切面信息后，继续往后执行。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-ztpxspringaopymxbjrynkddsqsxwdxg-812a9c92-03af-49a9-8833-3f618ebda928.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-ztpxspringaopymxbjrynkddsqsxwdxg-50b074de-062e-47a7-aafe-51243283b865.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-ztpxspringaopymxbjrynkddsqsxwdxg-41ad57c1-636f-495d-b928-3c2cc284d749.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-ztpxspringaopymxbjrynkddsqsxwdxg-9dedc4e9-6434-4b79-ab6d-5a0600daa45b.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-ztpxspringaopymxbjrynkddsqsxwdxg-ae188ad2-d81f-497b-8fd1-8f8e09c06239.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="_2-3-2-创建代理对象" tabindex="-1"><a class="header-anchor" href="#_2-3-2-创建代理对象" aria-hidden="true">#</a> 2.3.2 创建代理对象</h4><p>有了 louzai 的切面列表，后面就可以开始去创建 AOP 代理对象。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-ztpxspringaopymxbjrynkddsqsxwdxg-b508394c-62c2-41a5-a724-6c94de7f8aaa.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-ztpxspringaopymxbjrynkddsqsxwdxg-526f31e0-7ada-4575-90fb-354bb05a1596.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-ztpxspringaopymxbjrynkddsqsxwdxg-efa7ea29-7429-4036-af59-76222fba45f1.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>这里是重点！敲黑板！！！</strong></p><p>这里有 2 种创建 AOP 代理对象的方式，我们是选用 Cglib 来创建。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-ztpxspringaopymxbjrynkddsqsxwdxg-8a18e8e2-b5c3-4834-90ee-4622dc31a462.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-ztpxspringaopymxbjrynkddsqsxwdxg-2a3236c2-5bc9-462f-a4de-8e580dd3d8a9.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-ztpxspringaopymxbjrynkddsqsxwdxg-3bf40134-ca93-4356-ace7-a52974a6080b.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>我们再回到创建代理对象的入口，看看创建的代理对象。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-ztpxspringaopymxbjrynkddsqsxwdxg-0134f49f-987a-42b1-a557-b3e9cb306875.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_2-4-切面执行" tabindex="-1"><a class="header-anchor" href="#_2-4-切面执行" aria-hidden="true">#</a> 2.4 切面执行</h3><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-ztpxspringaopymxbjrynkddsqsxwdxg-e75bd59f-2f95-4dfb-b16c-c3f4533767d1.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>通过 “责任链 + 递归”，执行切面和方法。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-ztpxspringaopymxbjrynkddsqsxwdxg-2710f079-ac57-4e4b-a70f-8814d0f5bafb.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-ztpxspringaopymxbjrynkddsqsxwdxg-e3c0d53f-c7d2-4110-b44a-7d14465e120a.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>前方高能！这块逻辑非常复杂！！！</strong></p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-ztpxspringaopymxbjrynkddsqsxwdxg-e8b2d21b-c8ca-488a-bf99-fab5fe131004.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>下面就是“执行切面”最核心的逻辑，简单说一下设计思路：</p><ol><li><strong>设计思路</strong>：采用递归 + 责任链的模式；</li><li><strong>递归</strong>：反复执行 CglibMethodInvocation 的 proceed()；</li><li><strong>退出递归条件</strong>：interceptorsAndDynamicMethodMatchers 数组中的对象，全部执行完毕；</li><li><strong>责任链</strong>：示例中的责任链，是个长度为 3 的数组，每次取其中一个数组对象，然后去执行对象的 invoke（）。</li></ol><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-ztpxspringaopymxbjrynkddsqsxwdxg-df18226b-3c94-42bb-adb2-9e381c5c8c21.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>因为我们数组里面只有 3 个对象，所以只会递归 3 次，下面就看这 3 次是如何递归，责任链是如何执行的，设计得很巧妙！</p><h4 id="_2-4-1-第一次递归" tabindex="-1"><a class="header-anchor" href="#_2-4-1-第一次递归" aria-hidden="true">#</a> 2.4.1 第一次递归</h4><p>数组的第一个对象是 ExposeInvocationInterceptor，执行 invoke（），<strong>注意入参是 CglibMethodInvocation。</strong></p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-ztpxspringaopymxbjrynkddsqsxwdxg-407ed9d8-c9cc-43d0-9e86-71eeb50bf728.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>里面啥都没干，继续执行 CglibMethodInvocation 的 process()。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-ztpxspringaopymxbjrynkddsqsxwdxg-6b7b45fa-510e-44fb-b81f-88589900636c.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-ztpxspringaopymxbjrynkddsqsxwdxg-d66c5cac-d648-428a-a344-20dfd511c3bc.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="_2-4-2-第二次递归" tabindex="-1"><a class="header-anchor" href="#_2-4-2-第二次递归" aria-hidden="true">#</a> 2.4.2 第二次递归</h4><p>数组的第二个对象是 MethodBeforeAdviceInterceptor，执行 invoke（）。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-ztpxspringaopymxbjrynkddsqsxwdxg-6f35aed5-a725-41a2-96ee-bfcb481abd03.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-ztpxspringaopymxbjrynkddsqsxwdxg-0ab482cf-cf10-4e48-8880-fda1cdc5d91b.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-ztpxspringaopymxbjrynkddsqsxwdxg-35eec321-2e43-451a-8b22-0e00695985b9.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-ztpxspringaopymxbjrynkddsqsxwdxg-df43ae49-c73e-459a-b09b-4009624baf92.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-ztpxspringaopymxbjrynkddsqsxwdxg-b15f48b0-ee63-4f23-bf0c-98e14d18bdaa.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-ztpxspringaopymxbjrynkddsqsxwdxg-a6900293-7500-4b5c-bd48-1e77c6b5c260.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-ztpxspringaopymxbjrynkddsqsxwdxg-ed54f377-1de9-4d0e-94fe-2ad36470ef33.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-ztpxspringaopymxbjrynkddsqsxwdxg-ce217e8b-4c11-4edf-99c8-85ad011eede8.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-ztpxspringaopymxbjrynkddsqsxwdxg-85514d47-ce74-4842-9f54-f35b363942a6.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="_2-4-3-第三次递归" tabindex="-1"><a class="header-anchor" href="#_2-4-3-第三次递归" aria-hidden="true">#</a> 2.4.3 第三次递归</h4><p>数组的第二个对象是 AfterReturningAdviceInterceptor，执行 invoke（）。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-ztpxspringaopymxbjrynkddsqsxwdxg-40fe18f2-e199-4ebc-a269-8a1c11326f96.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-ztpxspringaopymxbjrynkddsqsxwdxg-ad21eda6-e867-4f42-8834-ab9a4282396f.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-ztpxspringaopymxbjrynkddsqsxwdxg-0bf4d91c-2198-4bfe-9945-b00f8d736a00.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>执行完上面逻辑，就会退出递归，我们看看 invokeJoinpoint() 的执行逻辑，其实就是执行主方法。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-ztpxspringaopymxbjrynkddsqsxwdxg-9c2f1045-2449-4fa9-b579-b113b94d9870.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-ztpxspringaopymxbjrynkddsqsxwdxg-a68777fb-36e2-4681-9fd5-b7db7414d1c8.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-ztpxspringaopymxbjrynkddsqsxwdxg-78fedc8b-4ed3-4580-9077-867ee8f898d2.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>再回到第三次递归的入口，继续执行后面的切面。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-ztpxspringaopymxbjrynkddsqsxwdxg-8dba29ac-391e-4370-8709-7c92679f4d3f.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>切面执行逻辑，前面已经演示过，直接看执行方法。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-ztpxspringaopymxbjrynkddsqsxwdxg-c97a08e2-7016-4292-be4d-de057147e320.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>后面就依次退出递归，整个流程结束。</p><h4 id="_2-4-4-设计思路" tabindex="-1"><a class="header-anchor" href="#_2-4-4-设计思路" aria-hidden="true">#</a> 2.4.4 设计思路</h4><p>这块代码，我研究了大半天，因为这个不是纯粹的责任链模式。</p><p>纯粹的责任链模式，对象内部有一个自身的 next 对象，执行完当前对象的方法末尾，就会启动 next 对象的执行，直到最后一个 next 对象执行完毕，或者中途因为某些条件中断执行，责任链才会退出。</p><p>这里 CglibMethodInvocation 对象内部没有 next 对象，全程是通过 interceptorsAndDynamicMethodMatchers 长度为 3 的数组控制，依次去执行数组中的对象，直到最后一个对象执行完毕，责任链才会退出。</p><p><strong>这个也属于责任链，只是实现方式不一样，后面会详细剖析</strong>，下面再讨论一下，这些类之间的关系。</p><p>我们的主对象是 CglibMethodInvocation，继承于 ReflectiveMethodInvocation，然后 process() 的核心逻辑，其实都在 ReflectiveMethodInvocation 中。</p><p><strong>ReflectiveMethodInvocation 中的 process() 控制整个责任链的执行。</strong></p><p>ReflectiveMethodInvocation 中的 process() 方法，里面有个长度为 3 的数组 interceptorsAndDynamicMethodMatchers，里面存储了 3 个对象，分别为 ExposeInvocationInterceptor、MethodBeforeAdviceInterceptor、AfterReturningAdviceInterceptor。</p><p><strong>注意！！！这 3 个对象，都是继承 MethodInterceptor 接口。</strong></p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-ztpxspringaopymxbjrynkddsqsxwdxg-3b071b5a-df2a-4afb-b80e-17c2edf7a6e2.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>然后每次执行 invoke() 时，里面都会去执行 CglibMethodInvocation 的 process()。</p><p><strong>是不是听得有些蒙圈？甭着急，我重新再帮你梳理一下。</strong></p><p>对象和方法的关系：</p><ul><li><strong>接口继承</strong>：数组中的 3 个对象，都是继承 MethodInterceptor 接口，实现里面的 invoke() 方法；</li><li><strong>类继承</strong>：我们的主对象 CglibMethodInvocation，继承于 ReflectiveMethodInvocation，复用它的 process() 方法；</li><li><strong>两者结合（策略模式）</strong>：invoke() 的入参，就是 CglibMethodInvocation，执行 invoke() 时，内部会执行 CglibMethodInvocation.process()，这个其实就是个策略模式。</li></ul><blockquote><p>可能有同学会说，invoke() 的入参是 MethodInvocation，没错！但是 CglibMethodInvocation 也继承了 MethodInvocation，不信自己可以去看。</p></blockquote><p>执行逻辑：</p><ul><li><strong>程序入口</strong>：是 CglibMethodInvocation 的 process() 方法；</li><li><strong>链式执行（衍生的责任链模式）</strong>：process() 中有个包含 3 个对象的数组，依次去执行每个对象的 invoke() 方法。</li><li><strong>递归（逻辑回退）</strong>：invoke() 方法会执行切面逻辑，同时也会执行 CglibMethodInvocation 的 process() 方法，让逻辑再一次进入 process()。</li><li><strong>递归退出</strong>：当数字中的 3 个对象全部执行完毕，流程结束。</li></ul><p>所以这里设计巧妙的地方，是因为纯粹责任链模式，里面的 next 对象，需要保证里面的对象类型完全相同。</p><p>但是数组里面的 3 个对象，里面没有 next 成员对象，所以不能直接用责任链模式，那怎么办呢？就单独搞了一个 CglibMethodInvocation.process()，通过去无限递归 process()，来实现这个责任链的逻辑。</p><p><strong>这就是我们为什么要看源码，学习里面优秀的设计思路！</strong></p><h2 id="_3-总结" tabindex="-1"><a class="header-anchor" href="#_3-总结" aria-hidden="true">#</a> 3. 总结</h2><p>我们再小节一下，文章先介绍了什么是 AOP，以及 AOP 的原理和示例。之后再剖析了 AOP 的源码，分为 3 块：</p><ul><li>将所有的切面都保存在缓存中；</li><li>取出缓存中的切面列表，和 louzai 对象的所有方法匹配，拿到属于 louzai 的切面列表；</li><li>创建 AOP 代理对象；</li><li>通过“责任链 + 递归”，去执行切面逻辑。</li></ul><p>今天的源码解析就到这，Spring 相关的源码，还有哪些是大家想学习的呢，可以留言。</p><hr><p>没有什么使我停留——除了目的，纵然岸旁有玫瑰、有绿荫、有宁静的港湾，我是不系之舟。</p>`,175),p={href:"https://mp.weixin.qq.com/s/xxl1qOKQUrVoO-bRJorE6Q",target:"_blank",rel:"noopener noreferrer"},b={href:"https://mp.weixin.qq.com/s/byM6khHVNMXOpG3oaBGsQg",target:"_blank",rel:"noopener noreferrer"},l={href:"https://mp.weixin.qq.com/s/gOuoM27tl4l6GW7aqZu98Q",target:"_blank",rel:"noopener noreferrer"},x={href:"https://mp.weixin.qq.com/s/3Iry19JaEoN4pA3-JDtVhw",target:"_blank",rel:"noopener noreferrer"},f={href:"https://mp.weixin.qq.com/s/CyJAVQza-9zmDdboStKe8w",target:"_blank",rel:"noopener noreferrer"},m={href:"https://mp.weixin.qq.com/s/4qHRBcJn1AvP07U4H6JcOQ",target:"_blank",rel:"noopener noreferrer"},u={href:"https://mp.weixin.qq.com/s/MGqyie9KvD6kH8Tuv2mqOw",target:"_blank",rel:"noopener noreferrer"},v={href:"https://mp.weixin.qq.com/s/Pu1cddsQOiMfCU4I96iygQ",target:"_blank",rel:"noopener noreferrer"},j={href:"https://mp.weixin.qq.com/s/9f_sOLiRwDS3pzC-mJ9jLQ",target:"_blank",rel:"noopener noreferrer"},h={href:"https://mp.weixin.qq.com/s/zYLEUmbfmiKeFk03e1TxbA",target:"_blank",rel:"noopener noreferrer"},y=e("figure",null,[e("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-ztpxspringaopymxbjrynkddsqsxwdxg-521e3b18-010d-47df-a22a-9922bdb7ccae.png",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1);function z(w,q){const i=c("ExternalLinkIcon");return r(),o("div",null,[s,e("ul",null,[e("li",null,[e("a",p,[a("今年这情况，拿到这俩offer不错了"),t(i)])]),e("li",null,[e("a",b,[a("愤怒，竟然还有学校在教JSP"),t(i)])]),e("li",null,[e("a",l,[a("曝光秋招毁约公司"),t(i)])]),e("li",null,[e("a",x,[a("垃圾外包，离职也罢"),t(i)])]),e("li",null,[e("a",f,[a("非科班转码"),t(i)])]),e("li",null,[e("a",m,[a("推荐 10 个神级 Intellij IDEA 插件"),t(i)])]),e("li",null,[e("a",u,[a("美团率先开奖 24k，不甘心？"),t(i)])]),e("li",null,[e("a",v,[a("Fleet，Java 轻量级 IDE 的未来？"),t(i)])]),e("li",null,[e("a",j,[a("先不管那么多，offer 接了再说"),t(i)])]),e("li",null,[e("a",h,[a("一套 KTV 管理系统，估价 3 万还是 30 万？"),t(i)])])]),y])}const _=n(d,[["render",z],["__file","ztpxspringaopymxbjrynkddsqsxwdxg.html.vue"]]);export{_ as default};
