<script lang="ts">
  import Guy from '$lib/docs/Guy.svelte'
</script>

<main id="top">
  <section class="demo">
    <Guy />
  </section>

  <h1>svelte-zdog</h1>

  <p>svelte components for <a href="https://zzz.dog">zdog</a> 3D renders</p>

  <a href="https://npm.im/svelte-zdog" class="npm">
    <img
      alt="npm"
      src="https://img.shields.io/npm/v/svelte-zdog?logo=npm&style=flat-square"
    />
  </a>

  <section id="how-to">
    <h2>add</h2>
    <code
      class="snippet"
      on:mousedown={e =>
        navigator.clipboard.writeText(e.currentTarget.innerText)}
    >
      npm i svelte-zdog
    </code>

    <h2>use</h2>
    <code class="snippet">
      <pre>&lt;script&gt;
  import &#123; Illustration, Ellipse &#125; from 'svelte-zdog'
&lt;/script&gt;

&lt;Illustration width=&#123;240&#125; height=&#123;240&#125; dragRotate&gt;
  &lt;Ellipse diameter=&#123;80&#125; stroke=&#123;20&#125; color="#ffb700" /&gt;
&lt;/Illustration&gt;
</pre>
    </code>
  </section>

  <section id="api">
    <div class="column">
      <h2>primitives</h2>
      <ul>
        <li>
          <a href="https://zzz.dog/api#illustration">Illustration</a>
        </li>
        <li>
          <a href="https://zzz.dog/api#anchor">Anchor</a>
        </li>
        <li>
          <a href="https://zzz.dog/shapes#box">Box</a>
        </li>
        <li>
          <a href="https://zzz.dog/shapes#cone">Cone</a>
        </li>
        <li>
          <a href="https://zzz.dog/shapes#cylinder">Cylinder</a>
        </li>
        <li>
          <a href="https://zzz.dog/shapes#ellipse">Ellipse</a>
        </li>
        <li>
          <a href="https://zzz.dog/api#group">Group</a>
        </li>
        <li>
          <a href="https://zzz.dog/shapes#hemisphere">Hemisphere</a>
        </li>
        <li>
          <a href="https://zzz.dog/shapes#polygon">Polygon</a>
        </li>
        <li>
          <a href="https://zzz.dog/shapes#rect">Rect</a>
        </li>
        <li>
          <a href="https://zzz.dog/shapes#roundedrect">RoundedRect</a>
        </li>
        <li>
          <a href="https://zzz.dog/shapes#shape">Shape</a>
        </li>
      </ul>
    </div>

    <div class="column">
      <h2>utilities</h2>
      <ul>
        <li>
          <a href="https://zzz.dog/api#utilities-tau">TAU</a>
        </li>
        <li>
          <a href="https://zzz.dog/api#vector">Vector</a>
        </li>
        <li>
          <a href="https://zzz.dog/api#utilities-easeinout"> easeInOut </a>
        </li>
        <li>
          <a href="https://zzz.dog/api#utilities-lerp">lerp</a>
        </li>
        <li>
          <a href="https://zzz.dog/api#utilities-modulo">modulo</a>
        </li>
      </ul>
    </div>
  </section>

  <span class="author">
    <small class="by">by</small>
    <a href="https://carlos-aguilar.com">carlos-aguilar.com</a>
  </span>
</main>

<style lang="postcss">
  #top {
    @apply m-auto w-full overflow-x-hidden py-8;
    @apply flex flex-col items-center justify-center;
  }

  .demo {
    @apply h-60 w-60;
  }

  .npm {
    @apply hover:-translate-y-0.5 hover:scale-105;
  }

  #how-to {
    @apply my-8 flex flex-col items-center justify-center;
  }

  #api {
    @apply flex flex-row justify-center;
  }

  .column {
    @apply mx-8 flex flex-col items-start;
  }

  .author {
    @apply relative mt-16;
  }

  .by {
    @apply absolute -top-3 -left-3;
  }

  .snippet {
    @apply max-w-full select-all rounded px-4 py-2 font-bold ring-2 ring-amber-400;
  }

  li {
    @apply list-disc;
  }
</style>
