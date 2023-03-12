<script lang="ts">
  import { base } from '$app/paths'
  import Guy from '$lib/docs/Guy.svelte'
</script>

<main class="container">
  <div class="demo">
    <Guy />
  </div>

  <h1 class="title">
    <small class="made-with">made with</small>
    svelte-zdog
  </h1>

  <a href="{base}/docs" class="docs">docs</a>
</main>

<style lang="postcss">
  .container {
    @apply m-auto -mt-4 min-h-screen w-full overflow-hidden;
    @apply flex flex-col items-center justify-center;
  }

  .demo {
    @apply h-60 w-60;
  }

  .title {
    @apply relative my-8 text-6xl font-bold;
  }

  .made-with {
    @apply absolute text-sm text-amber-400;
  }

  .docs {
    @apply px-4 text-2xl;
    @apply rounded ring-2 ring-amber-400;
    @apply hover:bg-amber-400 hover:text-stone-800;
  }
</style>
