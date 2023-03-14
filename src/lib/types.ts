import type Zdog from 'zdog'

/** Zdog primitive */
export type Primitive =
  | Zdog.Anchor
  | Zdog.Box
  | Zdog.Cone
  | Zdog.Cylinder
  | Zdog.Ellipse
  | Zdog.Group
  | Zdog.Hemisphere
  | Zdog.Polygon
  | Zdog.Rect
  | Zdog.RoundedRect
  | Zdog.Shape

/** Zdog primitive options */
export type PrimitiveOptions<P extends Primitive> = P extends Zdog.Box
  ? Zdog.BoxOptions
  : P extends Zdog.Cone
  ? Zdog.ConeOptions
  : P extends Zdog.Hemisphere
  ? Zdog.HemisphereOptions
  : P extends Zdog.Cylinder
  ? Zdog.CylinderOptions
  : P extends Zdog.Ellipse
  ? Zdog.EllipseOptions
  : P extends Zdog.RoundedRect
  ? Zdog.RoundedRectOptions
  : P extends Zdog.Rect
  ? Zdog.RectOptions
  : P extends Zdog.Polygon
  ? Zdog.PolygonOptions
  : P extends Zdog.Shape
  ? Zdog.ShapeOptions
  : P extends Zdog.Group
  ? Zdog.GroupOptions
  : P extends Zdog.Anchor
  ? Zdog.AnchorOptions
  : never

/** Zdog primitive constructor */
export type PrimitiveConstructor<P extends Primitive> = {
  new (o: PrimitiveOptions<P>): P
}

/** Zdog primitive props */
export type PrimitiveProps<P extends Primitive> = PrimitiveOptions<P> & {
  update?: Subscriber<P>
}

/** Update subscription registrant */
export type Subscriber<P extends Primitive> = (p: P) => Subscription
/** Lifecycle subscription */
export type Subscription = (delta: number) => void
/** Subscription destructor */
export type Destructor = () => void

/** Zdog context */
export interface ZdogContext {
  /** Root anchor of the scene */
  scene: Zdog.Anchor
  /** List of update subscriptions */
  subscribers: Array<Subscription>
  /** Subscribe new update function */
  subscribe: (fn?: Subscription) => Destructor
}

/** Zdog element type */
export type ZdogElement = 'svg' | 'canvas'

/** Illustration resize callback */
export type OnResize = (
  illu: Zdog.Illustration,
  width: number,
  height: number
) => void

/** Illustration prerender callback */
export type OnPrerender = (
  illu: Zdog.Illustration,
  context: CanvasRenderingContext2D | SVGSVGElement
) => void

/** Illustration drag start callback */
export type OnDragStart = (
  illu: Zdog.Dragger,
  pointer: Zdog.PointerPosition
) => void

/** Illustration drag move callback */
export type OnDragMove = (
  illu: Zdog.Dragger,
  pointer: Zdog.PointerPosition,
  moveX: number,
  moveY: number
) => void

/** Illustration drag end callback */
export type OnDragEnd = (illu: Zdog.Dragger) => void

/** Zdog illustration props */
export interface IllustrationProps
  extends Omit<
    Zdog.IllustrationOptions,
    | 'element'
    | 'onResize'
    | 'onPrerender'
    | 'onDragStart'
    | 'onDragMove'
    | 'onDragEnd'
  > {
  /** Illustration width */
  width: number
  /** Illustration height */
  height: number
  /** css classes */
  className?: string
  /** Render to SVG or canvas */
  element?: ZdogElement
  /** Update loop subscription */
  update?: Subscriber<Zdog.Anchor>
  /** Illustration resize callback */
  onResize?: OnResize
  /** Illustration prerender callback */
  onPrerender?: OnPrerender
  /** Illustration drag start callback */
  onDragStart?: OnDragStart
  /** Illustration drag move callback */
  onDragMove?: OnDragMove
  /** Illustration drag end callback */
  onDragEnd?: OnDragEnd
}
