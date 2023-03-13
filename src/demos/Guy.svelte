<script lang="ts">
  import { Illustration, Ellipse, RoundedRect, Shape, TAU } from '$lib'

  const mouth = '#e88'
  const skin = '#ffe0da'
  const fg = '#fbbf24'
  const bg = '#44403c'
  const hipX = 3
  const armSize = 6
</script>

<Illustration
  element="svg"
  width={240}
  height={240}
  zoom={5}
  dragRotate
  rotate={{ y: -TAU / 8 }}
  update={scene => ms => {
    scene.rotate.y += 0.005
  }}
>
  <!-- hips -->
  <Shape
    path={[{ x: -hipX }, { x: hipX }]}
    translate={{ y: 2 }}
    stroke={4}
    color={bg}
  >
    <!-- leg -->
    <Shape
      path={[{ y: 0 }, { y: 12 }]}
      translate={{ x: -hipX }}
      rotate={{ x: TAU / 4 }}
      color={bg}
      stroke={4}
    >
      <!-- foot -->
      <RoundedRect
        width={2}
        height={4}
        cornerRadius={1}
        translate={{ y: 14, z: 2 }}
        rotate={{ x: TAU / 4 }}
        color={fg}
        stroke={4}
        fill
      />
    </Shape>
    <!-- /leg -->

    <!-- stand leg -->
    <Shape
      path={[{ y: 0 }, { y: 12 }]}
      translate={{ x: hipX }}
      rotate={{ x: -TAU / 8 }}
      color={bg}
      stroke={4}
    >
      <!-- foot -->
      <RoundedRect
        width={2}
        height={4}
        cornerRadius={1}
        translate={{ y: 14, z: 2 }}
        rotate={{ x: -TAU / 8 }}
        color={fg}
        stroke={4}
        fill
      />
    </Shape>
    <!-- /stand leg -->

    <!-- chest -->
    <Shape
      path={[{ x: -1.5 }, { x: 1.5 }]}
      translate={{ y: -6.5 }}
      rotate={{ x: TAU / 8 }}
      color={fg}
      stroke={9}
    >
      <!-- head -->
      <Shape translate={{ y: -9.5 }} color={skin} stroke={12}>
        <!-- eyes -->
        <Ellipse
          diameter={2}
          quarters={2}
          translate={{ x: -2, y: 1, z: 4.5 }}
          rotate={{ z: -TAU / 4 }}
          color={bg}
          stroke={0.5}
          backface={false}
        />
        <Ellipse
          diameter={2}
          quarters={2}
          translate={{ x: 2, y: 1, z: 4.5 }}
          rotate={{ z: -TAU / 4 }}
          backface={false}
          color={bg}
          stroke={0.5}
        />
        <!-- smile -->
        <Ellipse
          diameter={3}
          quarters={2}
          translate={{ y: 2.5, z: 4.5 }}
          rotate={{ z: TAU / 4 }}
          backface={false}
          color={mouth}
          stroke={0.5}
          closed
          fill
        />
      </Shape>
      <!-- /head -->

      <!-- left arm -->
      <Shape
        path={[{ y: 0 }, { y: armSize }]}
        translate={{ x: -5, y: -2 }}
        rotate={{ x: -TAU / 4 }}
        color={bg}
        stroke={4}
      >
        <!-- forearm -->
        <Shape
          path={[{ y: 0 }, { y: armSize }]}
          translate={{ y: armSize }}
          rotate={{ x: TAU / 8 }}
          color={skin}
          stroke={4}
        >
          <!-- hand -->
          <Shape translate={{ z: 1, y: armSize }} color={skin} stroke={6} />
        </Shape>
      </Shape>
      <!-- /left arm -->

      <!-- right arm -->
      <Shape
        path={[{ y: 0 }, { y: armSize }]}
        translate={{ x: 5, y: -2 }}
        rotate={{ x: TAU / 4 }}
        color={bg}
        stroke={4}
      >
        <!-- forearm -->
        <Shape
          path={[{ y: 0 }, { y: armSize }]}
          translate={{ y: armSize }}
          rotate={{ x: TAU / 8 }}
          color={skin}
          stroke={4}
        >
          <!-- hand -->
          <Shape translate={{ z: 1, y: armSize }} color={skin} stroke={6} />
        </Shape>
      </Shape>
      <!-- /right arm -->
    </Shape>
    <!-- /chest -->
  </Shape>
  <!-- /hips -->
</Illustration>
