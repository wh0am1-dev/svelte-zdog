import { getContext, setContext, onMount, onDestroy } from 'svelte'
import Zdog from 'zdog'
import type {
  ZdogContext,
  Subscription,
  Primitive,
  PrimitiveOptions,
  PrimitiveConstructor,
  PrimitiveProps,
} from './types'

// Root context
// ================================

const zdogCtx = Symbol()
/** Returns the main scene anchor */
export const getScene = () => getContext<ZdogContext>(zdogCtx).scene
/** Zdog context setter */
export const setZdog = (ctx: ZdogContext) =>
  setContext<ZdogContext>(zdogCtx, ctx)
/** Subscribe update function */
export const subscribe = (fn: Subscription) =>
  onDestroy(getContext<ZdogContext>(zdogCtx).subscribe(fn))

// Parent context
// ================================

const parentCtx = Symbol()
/** Get parent node */
export const getParent = () => getContext<Primitive>(parentCtx)
/** Set parent node */
export const setParent = (parent: Primitive) =>
  setContext<Primitive>(parentCtx, parent)

// Mount node function
// ================================

/** Mount Zdog primitive into the tree */
export const mount = <P extends Primitive>(
  /** Zdog primitive */
  primitive: PrimitiveConstructor<P>,
  /** Primitive options */
  options: PrimitiveProps<P>
) => {
  const scene = getScene()
  const parent = getParent()
  const { update, ...rest } = options
  const node = new primitive(rest as PrimitiveOptions<P>)

  setParent(node)
  if (update) subscribe(update(node))

  onMount(() => {
    parent.addChild(node)
    scene.updateGraph()

    return () => {
      parent.removeChild(node)
      parent.updateGraph()
      scene.updateGraph()
    }
  })

  return node
}

// Re-exports
// ================================

export { default as Illustration } from '$lib/Illustration.svelte'

export { default as Anchor } from '$lib/primitives/Anchor.svelte'
export { default as Box } from '$lib/primitives/Box.svelte'
export { default as Cone } from '$lib/primitives/Cone.svelte'
export { default as Cylinder } from '$lib/primitives/Cylinder.svelte'
export { default as Ellipse } from '$lib/primitives/Ellipse.svelte'
export { default as Group } from '$lib/primitives/Group.svelte'
export { default as Hemisphere } from '$lib/primitives/Hemisphere.svelte'
export { default as Polygon } from '$lib/primitives/Polygon.svelte'
export { default as Rect } from '$lib/primitives/Rect.svelte'
export { default as RoundedRect } from '$lib/primitives/RoundedRect.svelte'
export { default as Shape } from '$lib/primitives/Shape.svelte'

export const { TAU, Vector, easeInOut, lerp, modulo } = Zdog
