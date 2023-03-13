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
  export let className: string = ''
  export let element: ZdogElement = 'canvas'
  export let update: Subscriber<Zdog.Anchor> = () => () => void 0
  export let onResize: OnResize = () => void 0
  export let onPrerender: OnPrerender = () => void 0
  export let onDragStart: OnDragStart = () => void 0
  export let onDragMove: OnDragMove = () => void 0
  export let onDragEnd: OnDragEnd = () => void 0

  let canvas: SVGSVGElement | HTMLCanvasElement
  const ctx: ZdogContext = {
    scene: new Zdog.Anchor(),
    subscribers: [],
    subscribe: fn => {
      if (typeof fn === 'function') {
        ctx.subscribers.push(fn)
        return () =>
          (ctx.subscribers = ctx.subscribers.filter(sub => sub !== fn))
      }

      return () => {}
    },
  }

  setZdog(ctx)
  setParent(ctx.scene)

  onMount(() => {
    const illu = new Zdog.Illustration({
      ...$$restProps,
      element: canvas,
      onResize: function (w, h) {
        onResize(this, w, h)
      },
      onPrerender: function (context) {
        onPrerender(this, context)
      },
      onDragStart: function (pointer) {
        onDragStart(this, pointer)
      },
      onDragMove: function (pointer, moveX, moveY) {
        onDragMove(this, pointer, moveX, moveY)
      },
      onDragEnd: function () {
        onDragEnd(this)
      },
    })

    illu.addChild(ctx.scene)
    illu.updateGraph()

    let frame: number
    let unsubscribe = ctx.subscribe(update(ctx.scene))
    const render = (ms = 0) => {
      ctx.subscribers.forEach(fn => fn(ms))
      illu.updateRenderGraph()
      frame = requestAnimationFrame(render)
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
