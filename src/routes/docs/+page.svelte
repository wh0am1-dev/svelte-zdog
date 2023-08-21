<script lang="ts">
  import Install from '../../components/Install.svelte'
  import Guy from '../../components/scenes/Guy.svelte'
  import Eye from '../../components/scenes/Eye.svelte'
  import EyeSnippet from '../../components/snippets/EyeSnippet.svelte'
  import Animation from '../../components/scenes/Animation.svelte'
  import AnimationSnippet from '../../components/snippets/AnimationSnippet.svelte'
  import API from '../../components/API.svelte'
  import Github from '../../components/Github.svelte'
  import NPM from '../../components/NPM.svelte'
  import NotByAi from '../../components/NotByAI.svelte'
  import Signature from '../../components/Signature.svelte'
</script>

<svelte:head>
  <title>svelte-zdog · docs</title>
</svelte:head>

<main
  class="m-auto flex max-w-full flex-col items-center justify-center overflow-x-hidden px-4 py-16"
>
  <Guy />
  <h1>svelte-zdog</h1>
  <p>svelte components for <a href="https://zzz.dog">zdog</a> 3D renders</p>

  <h2 class="mt-32">🧰 install</h2>
  <Install />

  <h2 class="mt-32">📐 create</h2>
  <Eye />
  <EyeSnippet class="mt-4" />
  <p class="mt-8">
    build using declarative tree-like structs,<br />
    components expose all primitive options as props<br />
  </p>

  <h2 class="mt-32">🎬 animate</h2>
  <Animation />
  <AnimationSnippet class="mt-4" />
  <p class="mt-8">
    props are not reactive,<br />
    components accept an <span class="text-amber-400">update</span> function
  </p>
  <p class="mt-4">
    <span class="text-sky-400">node</span> → primitive reference<br />
    <span class="text-sky-400">delta</span> → ms since last frame<br />
    <span class="text-sky-400">ms</span> → total ms elapsed
  </p>

  <h2 class="mt-32">📦 pkg exports</h2>
  <API />

  <Github class="mt-32" />
  <NPM class="mt-4" />
  <NotByAi class="mt-4" />

  <Signature class="mt-16" />
</main>
