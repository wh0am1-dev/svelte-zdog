<script lang="ts">
  import Guy from '../../demos/Guy.svelte'
  import Eye from '../../demos/Eye.svelte'
  import EyeSnippet from '../../snippets/EyeSnippet.svelte'
  import Animation from '../../demos/Animation.svelte'
  import AnimationSnippet from '../../snippets/AnimationSnippet.svelte'
  let copied = false
</script>

<svelte:head>
  <title>svelte-zdog · docs</title>
</svelte:head>

<main
  class="m-auto flex max-w-full flex-col items-center justify-center overflow-x-hidden py-16 px-4"
>
  <Guy />
  <h1>svelte-zdog</h1>
  <p>svelte components for <a href="https://zzz.dog">zdog</a> 3D renders</p>
  <a
    href="https://npm.im/svelte-zdog"
    class="hover:-translate-y-0.5 hover:scale-105"
  >
    <img
      alt="npm"
      src="https://img.shields.io/npm/v/svelte-zdog?logo=npm&style=flat-square"
    />
  </a>

  <div class="mt-16" />
  <h2>🛠 install</h2>
  <code
    class="select-all rounded px-4 py-2 ring-2 ring-amber-400"
    on:mousedown={e => {
      navigator.clipboard.writeText(e.currentTarget.innerText)
      copied = true
      setTimeout(() => (copied = false), 2000)
    }}
  >
    npm i svelte-zdog
  </code>
  <p class="opacity-0 transition" class:opacity-100={copied}>
    copied to clipboard !
  </p>

  <div class="mt-16" />
  <Eye />
  <h2>📐 build</h2>
  <EyeSnippet />
  <p class="mt-4">primitive components expose all primitive options as props</p>

  <div class="mt-32" />
  <Animation />
  <h2>🎬 animate</h2>
  <AnimationSnippet />
  <p class="mt-4">
    primitive components accept an update function, node is the primitive, ms is
    millis
  </p>

  <div class="mt-32" />
  <h2>📦 pkg exports</h2>
  <section id="api" class="flex flex-row justify-center">
    <div class="column">
      <h2>root</h2>
      <ul>
        <li>
          <a href="https://zzz.dog/api#illustration">Illustration</a>
        </li>
      </ul>
      <h2>utils</h2>
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

    <div class="column">
      <h2>nodes</h2>
      <ul>
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
  </section>

  <span class="relative mt-32">
    <small class="absolute -top-3 -left-3">by</small>
    <a href="https://carlos-aguilar.com">carlos-aguilar.com</a>
  </span>
</main>

<style lang="postcss">
  .column {
    @apply mx-8 flex flex-col items-start;
  }

  li {
    @apply list-disc;
  }
</style>
