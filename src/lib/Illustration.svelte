<script lang="ts">
  import { onMount } from 'svelte'
  import Zdog from 'zdog'
  import { setZdog, setParent } from '$lib'
  import type {
    IllustrationProps,
    ZdogElement,
    Subscriber,
    ZdogContext,
    OnResize,
    OnPrerender,
    OnDragStart,
    OnDragMove,
    OnDragEnd,
  } from '$lib/types'

  interface $$Props extends IllustrationProps {}

  export let width: number
  export let height: number
  export let className = ''
  export let element: ZdogElement = 'canvas'
  export let update: Subscriber<Zdog.Anchor> = () => () => void 0
  export let onResize: OnResize = () => void 0
  export let onPrerender: OnPrerender = () => void 0
  export let onDragStart: OnDragStart = () => void 0
  export let onDragMove: OnDragMove = () => void 0
  export let onDragEnd: OnDragEnd = () => void 0

  let illu: Zdog.Illustration
  let canvas: SVGSVGElement | HTMLCanvasElement
  const ctx: ZdogContext = {
    scene: new Zdog.Anchor(),
    subscribers: [],
    subscribe: sub => {
      if (typeof sub === 'function') {
        ctx.subscribers.push(sub)
        return () => {
          ctx.subscribers = ctx.subscribers.filter(s => s !== sub)
        }
      }

      return () => void 0
    },
  }

  setZdog(ctx)
  setParent(ctx.scene)

  onMount(() => {
    illu = new Zdog.Illustration({
      ...$$restProps,
      element: canvas,
      onResize(w, h) {
        onResize(this, w, h)
      },
      onPrerender(context) {
        onPrerender(this, context)
      },
      onDragStart(pointer) {
        onDragStart(this, pointer)
      },
      onDragMove(pointer, moveX, moveY) {
        onDragMove(this, pointer, moveX, moveY)
      },
      onDragEnd() {
        onDragEnd(this)
      },
    })

    illu.addChild(ctx.scene)
    illu.updateGraph()

    let last = 0
    let frame: number
    let unsubscribe = ctx.subscribe(update(ctx.scene))
    const render = (ms = 0) => {
      ctx.subscribers.forEach(fn => fn(ms - last))
      illu.updateRenderGraph()
      frame = requestAnimationFrame(render)
      last = ms
    }

    render()

    return () => {
      unsubscribe()
      cancelAnimationFrame(frame)
    }
  })
</script>

{#if element === 'canvas'}
  <canvas bind:this={canvas} {width} {height} class={className} />
{:else if element === 'svg'}
  <svg bind:this={canvas} {width} {height} class={className} />
{/if}

<slot />
