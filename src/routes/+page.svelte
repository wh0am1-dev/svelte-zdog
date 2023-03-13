<script lang="ts">
  import { base } from '$app/paths'
  import Guy from '../demos/Guy.svelte'
</script>

<main
  class="m-auto -mt-4 flex min-h-screen w-full flex-col items-center justify-center overflow-hidden"
>
  <Guy />

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
