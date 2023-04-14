<script lang="ts">
  import { base } from '$app/paths'
  import Castle from '../components/castle/Castle.svelte'
  import Guy from '../components/Guy.svelte'
  import Eye from '../components/Eye.svelte'
  import Animation from '../components/Animation.svelte'

  const sketches = [Castle, Guy, Eye, Animation]

  let pointer = 0
  $: selected = sketches[pointer]
</script>

<main
  class="min-h-mobile m-auto flex w-full flex-col items-center justify-center overflow-hidden"
>
  <svelte:component this={selected} />

  <button
    on:click={() => (pointer = ++pointer % sketches.length)}
    class="mt-4 rounded p-0.5 text-2xl transition hover:bg-stone-800"
  >
    ⏭
  </button>

  <h1 class="relative">
    <small class="absolute text-sm text-amber-400">made with</small>
    svelte-zdog
  </h1>

  <a
    href="{base}/docs"
    class="rounded px-4 text-2xl ring-2 ring-amber-400 transition hover:bg-amber-400 hover:text-stone-800"
  >
    docs
  </a>
</main>
