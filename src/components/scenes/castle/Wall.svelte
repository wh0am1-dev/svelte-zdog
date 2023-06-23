<script lang="ts">
  import { Anchor, Rect, Shape, TAU } from '$lib'

  const colors = {
    dark: '#44403c',
    light: '#fbbf24',
  }

  export let zoom = 10
  export let outside: keyof typeof colors = 'light'
  export let inside: keyof typeof colors = 'light'
  export let left: keyof typeof colors = 'light'
  export let right: keyof typeof colors = 'light'
  export let rotate: {
    x?: number
    y?: number
    z?: number
  } = {}
</script>

<!-- rotor -->
<Anchor {rotate}>
  <!-- wall -->
  <Anchor translate={{ z: 4 }}>
    <!-- top block -->
    <Anchor translate={{ x: -4, y: -4 }}>
      <Rect
        width={2}
        height={2}
        translate={{ z: 1 }}
        color={colors[outside]}
        stroke={1 / zoom}
        backface={false}
        fill
      />
      <Rect
        width={2}
        height={2}
        translate={{ x: -1 }}
        rotate={{ y: TAU / 4 }}
        color={colors[left]}
        stroke={1 / zoom}
        backface={false}
        fill
      />
      <Rect
        width={2}
        height={2}
        translate={{ x: 1 }}
        rotate={{ y: -TAU / 4 }}
        color={colors[right]}
        stroke={1 / zoom}
        backface={false}
        fill
      />
      <Rect
        width={2}
        height={2}
        translate={{ z: -1 }}
        rotate={{ y: TAU / 2 }}
        color={colors[inside]}
        stroke={1 / zoom}
        backface={false}
        fill
      />
      <Rect
        width={2}
        height={2}
        translate={{ y: -1 }}
        rotate={{ x: TAU / 4 }}
        color={colors.dark}
        stroke={1 / zoom}
        backface={false}
        fill
      />
    </Anchor>

    <!-- top block copy -->
    <Anchor translate={{ x: 0, y: -4 }}>
      <Rect
        width={2}
        height={2}
        translate={{ z: 1 }}
        color={colors[outside]}
        stroke={1 / zoom}
        backface={false}
        fill
      />
      <Rect
        width={2}
        height={2}
        translate={{ x: -1 }}
        rotate={{ y: TAU / 4 }}
        color={colors[left]}
        stroke={1 / zoom}
        backface={false}
        fill
      />
      <Rect
        width={2}
        height={2}
        translate={{ x: 1 }}
        rotate={{ y: -TAU / 4 }}
        color={colors[right]}
        stroke={1 / zoom}
        backface={false}
        fill
      />
      <Rect
        width={2}
        height={2}
        translate={{ z: -1 }}
        rotate={{ y: TAU / 2 }}
        color={colors[inside]}
        stroke={1 / zoom}
        backface={false}
        fill
      />
      <Rect
        width={2}
        height={2}
        translate={{ y: -1 }}
        rotate={{ x: TAU / 4 }}
        color={colors.dark}
        stroke={1 / zoom}
        backface={false}
        fill
      />
    </Anchor>

    <!-- top tile -->
    <Rect
      width={2}
      height={2}
      color={colors.dark}
      rotate={{ x: TAU / 4 }}
      translate={{ x: -2, y: -3 }}
      stroke={1 / zoom}
      backface={false}
      fill
    />
    <Rect
      width={2}
      height={2}
      color={colors.dark}
      rotate={{ x: TAU / 4 }}
      translate={{ x: 2, y: -3 }}
      stroke={1 / zoom}
      backface={false}
      fill
    />

    <!-- outside arch -->
    <Shape
      path={[
        { x: 0, y: -3 },
        { x: 3, y: -3 },
        { x: 3, y: 2 },
        {
          arc: [
            { x: 3, y: -1 },
            { x: 0, y: -1 },
          ],
        },
      ]}
      translate={{ z: 1 }}
      color={colors[outside]}
      stroke={1 / zoom}
      backface={false}
      fill
    />
    <Shape
      path={[
        { x: 0, y: -3 },
        { x: 3, y: -3 },
        { x: 3, y: 2 },
        {
          arc: [
            { x: 3, y: -1 },
            { x: 0, y: -1 },
          ],
        },
      ]}
      translate={{ z: 1 }}
      scale={{ x: -1 }}
      color={colors[outside]}
      stroke={1 / zoom}
      backface={false}
      fill
    />

    <!-- inside arch -->
    <Shape
      path={[
        { x: 0, y: -3 },
        { x: 3, y: -3 },
        { x: 3, y: 2 },
        {
          arc: [
            { x: 3, y: -1 },
            { x: 0, y: -1 },
          ],
        },
      ]}
      translate={{ z: -1 }}
      rotate={{ y: TAU / 2 }}
      color={colors[inside]}
      stroke={1 / zoom}
      backface={false}
      fill
    />
    <Shape
      path={[
        { x: 0, y: -3 },
        { x: 3, y: -3 },
        { x: 3, y: 2 },
        {
          arc: [
            { x: 3, y: -1 },
            { x: 0, y: -1 },
          ],
        },
      ]}
      translate={{ z: -1 }}
      rotate={{ y: TAU / 2 }}
      scale={{ x: -1 }}
      color={colors[inside]}
      stroke={1 / zoom}
      backface={false}
      fill
    />

    <!-- outside columns -->
    <Rect
      width={2}
      height={8}
      translate={{ x: -4, y: 1, z: 1 }}
      color={colors[outside]}
      stroke={1 / zoom}
      backface={false}
      fill
    />
    <Rect
      width={2}
      height={8}
      translate={{ x: 4, y: 1, z: 1 }}
      color={colors[outside]}
      stroke={1 / zoom}
      backface={false}
      fill
    />

    <!-- inside columns -->
    <Rect
      width={2}
      height={3}
      translate={{ x: -3, y: 3.5 }}
      rotate={{ y: -TAU / 4 }}
      color={colors[right]}
      stroke={1 / zoom}
      backface={false}
      fill
    />
    <Rect
      width={2}
      height={3}
      translate={{ x: 3, y: 3.5 }}
      rotate={{ y: TAU / 4 }}
      color={colors[left]}
      stroke={1 / zoom}
      backface={false}
      fill
    />

    <!-- under & quarter arcs -->
    <Shape
      path={[
        { x: 3, y: 2 },
        {
          arc: [
            { x: 3, y: -1 },
            { x: 0, y: -1 },
          ],
        },
        { x: 0, y: -1, z: -2 },
        {
          arc: [
            { x: 3, y: -1, z: -2 },
            { x: 3, y: 2, z: -2 },
          ],
        },
      ]}
      translate={{ z: 1 }}
      color={colors[left]}
      stroke={1 / zoom}
      backface
      fill
    />
    <Shape
      path={[
        { x: 3, y: 2 },
        {
          arc: [
            { x: 3, y: -1 },
            { x: 0, y: -1 },
          ],
        },
        { x: 0, y: -1, z: -2 },
        {
          arc: [
            { x: 3, y: -1, z: -2 },
            { x: 3, y: 2, z: -2 },
          ],
        },
      ]}
      translate={{ z: 1 }}
      scale={{ x: -1 }}
      color={colors[right]}
      stroke={1 / zoom}
      backface
      fill
    />

    <!-- feet soles -->
    <Rect
      width={2}
      height={2}
      translate={{ x: -4, y: 5, z: 0 }}
      rotate={{ x: -TAU / 4 }}
      color={colors.light}
      stroke={1 / zoom}
      backface={false}
      fill
    />
  </Anchor>
  <!-- /wall -->
</Anchor>
<!-- /rotor -->
