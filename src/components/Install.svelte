<script lang="ts">
  let copied = false
  let copiedTimeout: number
</script>

<button
  class="cursor-pointer rounded px-4 py-2 font-mono ring-2 ring-amber-400"
  on:mousedown={e => {
    const selection = window.getSelection()
    const range = document.createRange()
    range.selectNodeContents(e.currentTarget)
    selection?.removeAllRanges()
    selection?.addRange(range)
    navigator.clipboard.writeText(e.currentTarget.innerText)
    copied = true
    clearTimeout(copiedTimeout)
    copiedTimeout = setTimeout(() => (copied = false), 2000)
  }}
>
  npm i svelte-zdog
</button>

<p class="opacity-0 transition" class:opacity-100={copied}>
  copied to clipboard !
</p>
