<script lang="ts">
  import { onMount } from 'svelte'
  import Zdog from 'zdog'
  import {
    setZdog,
    setParent,
    type ZdogContext,
    type Subscriber,
    type Destructor,
  } from '$lib'

  interface $$Props extends Omit<Zdog.IllustrationOptions, 'element'> {
    /** Illustration width */
    width: number
    /** Illustration height */
    height: number
    /** Render to SVG or canvas */
    element?: 'svg' | 'canvas'
    /** Update loop subscription */
    update?: Subscriber<Zdog.Anchor>
  }

  export let width: number
  export let height: number
  export let element: 'svg' | 'canvas' = 'canvas'
  export let update: Subscriber<Zdog.Anchor> | undefined = undefined

  let canvas: SVGSVGElement | HTMLCanvasElement
  const ctx: ZdogContext = {
    scene: new Zdog.Anchor(),
    subscribers: [],
    subscribe: fn => {
      ctx.subscribers.push(fn)
      return () => (ctx.subscribers = ctx.subscribers.filter(sub => sub !== fn))
    },
  }

  setZdog(ctx)
  setParent(ctx.scene)

  onMount(() => {
    const illu = new Zdog.Illustration({
      ...$$restProps,
      element: canvas,
    })

    if ($$restProps.onResize) {
      illu.onResize = $$restProps.onResize.bind(illu)
    }

    if ($$restProps.onPrerender) {
      illu.onPrerender = $$restProps.onPrerender?.bind(illu)
    }

    if ($$restProps.onDragStart) {
      illu.onDragStart = $$restProps.onDragStart?.bind(illu)
    }

    if ($$restProps.onDragMove) {
      illu.onDragMove = $$restProps.onDragMove?.bind(illu)
    }

    if ($$restProps.onDragEnd) {
      illu.onDragEnd = $$restProps.onDragEnd?.bind(illu)
    }

    illu.addChild(ctx.scene)
    illu.updateGraph()

    let unsubscribe: Destructor
    if (update) unsubscribe = ctx.subscribe(update(ctx.scene))

    let frame: number
    const render = (ms = 0) => {
      ctx.subscribers.forEach(fn => fn(ms))
      illu.updateRenderGraph()
      frame = requestAnimationFrame(render)
    }
    render()

    return () => {
      unsubscribe?.()
      cancelAnimationFrame(frame)
    }
  })
</script>

{#if element === 'canvas'}
  <canvas bind:this={canvas} {width} {height} />
{:else if element === 'svg'}
  <svg bind:this={canvas} {width} {height} />
{/if}

<slot />
