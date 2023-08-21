<script lang="ts">
  let className = ''
  export { className as class }
</script>

<pre
  class="{className} max-w-full overflow-x-auto rounded px-4 py-2 text-stone-300 ring-1 ring-stone-700"><code
    ><span class="sky">&lt;</span><span class="emerald">script</span><span
      class="sky">&gt;</span
    >
  <span class="red">import</span> &#123; <span class="sky">Illustration</span
    >, <span class="sky">Ellipse</span>, <span class="sky">TAU</span
    > &#125; <span class="red">from</span> '<span class="lime">svelte-zdog</span
    >'
  <span class="red">let</span> <span class="sky">rotate</span> <span
      class="emerald">=</span
    > <span class="purple">true</span>
<span class="sky">&lt;/</span><span class="emerald">script</span><span
      class="sky">&gt;</span
    >

<span class="sky">&lt;</span>Illustration
  <span class="amber">element</span>="<span class="lime">svg</span>"
  <span class="amber">width</span>=&#123;<span class="purple">240</span>&#125;
  <span class="amber">height</span>=&#123;<span class="purple">240</span>&#125;
  <span class="amber">dragRotate</span>
  <span class="amber">onDragStart</span>=&#123;() <span class="emerald">=></span
    > (<span class="sky">rotate</span> <span class="emerald">=</span> <span
      class="purple">false</span
    >)&#125;
  <span class="amber">onDragEnd</span>=&#123;() <span class="emerald">=></span
    > (<span class="sky">rotate</span> <span class="emerald">=</span> <span
      class="purple">true</span
    >)&#125;
  <span class="amber">update</span>=&#123;<span class="sky">node</span> <span
      class="emerald">=&gt;</span
    > (<span class="sky">delta</span>, <span class="sky">ms</span>) <span
      class="emerald">=&gt;</span
    > &#123;
    <span class="red">if</span> (<span class="sky">rotate</span>) &#123;
      <span class="sky">node</span>.<span class="sky">rotate</span>.<span
      class="sky">x</span
    > <span class="emerald">+=</span> <span class="sky">delta</span> <span
      class="emerald">/</span
    > <span class="purple">800</span>
      <span class="sky">node</span>.<span class="sky">rotate</span>.<span
      class="sky">y</span
    > <span class="emerald">+=</span> <span class="sky">delta</span> <span
      class="emerald">/</span
    > <span class="purple">1600</span>
      <span class="sky">node</span>.<span class="sky">rotate</span>.<span
      class="sky">z</span
    > <span class="emerald">+=</span> <span class="sky">delta</span> <span
      class="emerald">/</span
    > <span class="purple">2400</span>
    &#125;
  &#125;&#125;
<span class="sky">&gt;</span>
  <span class="sky">&lt;</span>Ellipse <span class="amber">diameter</span
    >=&#123;<span class="purple">128</span>&#125; <span class="amber"
      >stroke</span
    >=&#123;<span class="purple">4</span>&#125; <span class="amber">color</span
    >="<span class="lime">#ef4444</span>" <span class="sky">/&gt;</span>
  <span class="sky">&lt;</span>Ellipse <span class="amber">diameter</span
    >=&#123;<span class="purple">128</span>&#125; <span class="amber"
      >stroke</span
    >=&#123;<span class="purple">4</span>&#125; <span class="amber">color</span
    >="<span class="lime">#84cc16</span>" <span class="amber">rotate</span
    >=&#123;&#123; x: <span class="sky">TAU</span> <span class="emerald">/</span
    > <span class="purple">4</span> &#125;&#125; <span class="sky">/&gt;</span>
  <span class="sky">&lt;</span>Ellipse <span class="amber">diameter</span
    >=&#123;<span class="purple">128</span>&#125; <span class="amber"
      >stroke</span
    >=&#123;<span class="purple">4</span>&#125; <span class="amber">color</span
    >="<span class="lime">#0ea5e9</span>" <span class="amber">rotate</span
    >=&#123;&#123; y: <span class="sky">TAU</span> <span class="emerald">/</span
    > <span class="purple">4</span> &#125;&#125; <span class="sky">/&gt;</span>
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
