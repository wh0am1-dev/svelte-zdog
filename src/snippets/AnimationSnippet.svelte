<pre
  class="mt-4 max-w-full overflow-x-auto rounded px-4 py-2 text-stone-300 ring-1 ring-stone-700"><code
    ><span class="sky">&lt;</span><span class="emerald">script</span><span
      class="sky">&gt;</span
    >
  <span class="red">import</span> &#123; <span class="sky">Illustration</span
    >, <span class="sky">Ellipse</span> &#125; <span class="red">from</span
    > '<span class="lime">svelte-zdog</span>'
<span class="sky">&lt;/</span><span class="emerald">script</span><span
      class="sky">&gt;</span
    >

<span class="sky">&lt;</span>Illustration
  <span class="amber">element</span>="<span class="lime">svg</span>"
  <span class="amber">width</span>=&#123;<span class="purple">240</span>&#125;
  <span class="amber">height</span>=&#123;<span class="purple">240</span>&#125;
  <span class="amber">dragRotate</span>
  <span class="amber">update</span>=&#123;<span class="sky">node</span> <span
      class="emerald">=&gt;</span
    > <span class="sky">ms</span> <span class="emerald">=&gt;</span> &#123;
    <span class="sky">node</span>.<span class="sky">rotate</span>.<span
      class="sky">y</span
    > <span class="emerald">+=</span> <span class="purple">0.01</span>
  &#125;&#125;
<span class="sky">&gt;</span>
  <span class="sky">&lt;</span>Ellipse <span class="amber">diameter</span
    >=&#123;<span class="purple">128</span>&#125; <span class="amber"
      >stroke</span
    >=&#123;<span class="purple">32</span>&#125; <span class="amber">color</span
    >="<span class="lime">#fbbf24</span>" <span class="sky">/&gt;</span>
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
