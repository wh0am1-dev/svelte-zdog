<pre
  class="mt-4 max-w-full overflow-x-auto rounded px-4 py-2 text-stone-300 ring-1 ring-stone-700"><code
    ><span class="sky">&lt;</span><span class="emerald">script</span><span
      class="sky">&gt;</span
    >
  <span class="red">import</span> &#123; <span class="sky">Illustration</span
    >, <span class="sky">Group</span>, <span class="sky">Ellipse</span
    > &#125; <span class="red">from</span> '<span class="lime">svelte-zdog</span
    >'
<span class="sky">&lt;/</span><span class="emerald">script</span><span
      class="sky">&gt;</span
    >

<span class="sky">&lt;</span>Illustration <span class="amber">width</span
    >=&#123;<span class="purple">240</span>&#125; <span class="amber"
      >height</span
    >=&#123;<span class="purple">240</span>&#125; <span class="amber"
      >dragRotate</span
    ><span class="sky">&gt;</span>
  <span class="sky">&lt;</span>Group <span class="amber">translate</span
    >=&#123;&#123; z: <span class="purple">20</span> &#125;&#125;<span
      class="sky">&gt;</span
    >
    <span class="sky">&lt;</span>Ellipse <span class="amber">width</span
    >=&#123;<span class="purple">180</span>&#125; <span class="amber"
      >height</span
    >=&#123;<span class="purple">100</span>&#125; <span class="amber"
      >color</span
    >="<span class="lime">#f5f5f4</span>" <span class="amber">stroke</span
    >=&#123;<span class="purple">10</span>&#125; <span class="amber">fill</span
    ><span class="sky"> /&gt;</span>
    <span class="sky">&lt;</span>Ellipse <span class="amber">diameter</span
    >=&#123;<span class="purple">80</span>&#125; <span class="amber">color</span
    >="<span class="lime">#fbbf24</span>" <span class="amber">stroke</span
    >=&#123;<span class="purple">10</span>&#125; <span class="amber">fill</span
    ><span class="sky"> /&gt;</span>
    <span class="sky">&lt;</span>Ellipse <span class="amber">diameter</span
    >=&#123;<span class="purple">40</span>&#125; <span class="amber">color</span
    >="<span class="lime">#1c1917</span>" <span class="amber">stroke</span
    >=&#123;<span class="purple">10</span>&#125; <span class="amber">fill</span
    ><span class="sky"> /&gt;</span>
    <span class="sky">&lt;</span>Ellipse
      <span class="amber">translate</span>=&#123;&#123; x: <span class="purple"
      >20</span
    >, y: <span class="emerald">-</span><span class="purple">20</span
    > &#125;&#125;
      <span class="amber">diameter</span>=&#123;<span class="purple">30</span
    >&#125;
      <span class="amber">color</span>="<span class="lime">#f5f5f4</span>"
      <span class="amber">stroke</span>=&#123;<span class="purple">10</span
    >&#125;
      <span class="amber">fill</span>
    <span class="sky">/&gt;</span>
  <span class="sky">&lt;/</span>Group<span class="sky">&gt;</span>
<span class="sky">&lt;/</span>Illustration<span class="sky">&gt;</span>
</code></pre>

<style lang="postcss">
  .red {
    @apply text-red-400;
  }

  .amber {
    @apply text-amber-400;
  }

  .lime {
    @apply text-lime-400;
  }

  .emerald {
    @apply text-emerald-400;
  }

  .sky {
    @apply text-sky-400;
  }

  .purple {
    @apply text-purple-400;
  }
</style>
