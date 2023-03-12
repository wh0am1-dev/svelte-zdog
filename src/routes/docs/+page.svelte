<script lang="ts">
  import { base } from '$app/paths'
  import { Illustration, Ellipse, RoundedRect, Shape, TAU } from '$lib'

  const mouth = '#e88'
  const skin = '#ffe0da'
  const fg = '#fbbf24'
  const bg = '#44403c'
  const hipX = 3
  const armSize = 6
</script>

<main id="top">
  <!-- guy -->
  <Illustration
    element="svg"
    width={240}
    height={240}
    zoom={5}
    dragRotate
    rotate={{ y: -TAU / 8 }}
    update={node => _ => (node.rotate.y += 0.005)}
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

  <h1>svelte-zdog</h1>

  <a href="https://npm.im/svelte-zdog">
    <img
      alt="npm"
      src="https://img.shields.io/badge/npm-svelte--zdog-222?style=flat-square&logo=npm"
    />
  </a>

  <code>npm i svelte-zdog</code>

  <p>svelte components for <a href="https://zzz.dog">zdog</a> 3D renders</p>

  <section>
    <div>
      <h2 id="primitives">primitives</h2>
      <ul>
        <li>
          <a href="https://zzz.dog/api#illustration">Illustration</a>
        </li>
        <li><a href="https://zzz.dog/api#anchor">Anchor</a></li>
        <li><a href="https://zzz.dog/shapes#box">Box</a></li>
        <li><a href="https://zzz.dog/shapes#cone">Cone</a></li>
        <li><a href="https://zzz.dog/shapes#cylinder">Cylinder</a></li>
        <li><a href="https://zzz.dog/shapes#ellipse">Ellipse</a></li>
        <li><a href="https://zzz.dog/api#group">Group</a></li>
        <li><a href="https://zzz.dog/shapes#hemisphere">Hemisphere</a></li>
        <li><a href="https://zzz.dog/shapes#polygon">Polygon</a></li>
        <li><a href="https://zzz.dog/shapes#rect">Rect</a></li>
        <li><a href="https://zzz.dog/shapes#roundedrect">RoundedRect</a></li>
        <li><a href="https://zzz.dog/shapes#shape">Shape</a></li>
      </ul>
    </div>

    <div>
      <h2 id="utils">utils</h2>
      <ul>
        <li><a href="https://zzz.dog/api#utilities-tau">TAU</a></li>
        <li><a href="https://zzz.dog/api#vector">Vector</a></li>
        <li><a href="https://zzz.dog/api#utilities-easeinout">easeInOut</a></li>
        <li><a href="https://zzz.dog/api#utilities-lerp">lerp</a></li>
        <li><a href="https://zzz.dog/api#utilities-modulo">modulo</a></li>
      </ul>
    </div>
  </section>

  <h3>
    <small>by</small>
    <a href="https://carlos-aguilar.com">carlos-aguilar.com</a>
  </h3>
</main>

<style lang="postcss">
  main {
    @apply w-full overflow-x-hidden py-8;
    @apply flex flex-col items-center justify-center;
  }

  section {
    @apply my-16 flex flex-row justify-center;
  }

  div {
    @apply mx-8 flex flex-col items-start;
  }

  h1 {
    @apply my-8 text-6xl font-bold;
  }

  h2 {
    @apply my-4 text-4xl font-bold;
  }

  h3 {
    @apply relative;
  }

  small {
    @apply absolute -top-3 -left-3;
  }

  p {
    @apply my-2 text-base;
  }

  a {
    @apply px-1 text-amber-400 hover:bg-amber-400 hover:text-stone-800;
  }

  a:has(> img) {
    @apply px-0;
  }

  code {
    @apply my-4 select-all rounded px-4 py-2 font-bold ring-2 ring-amber-400;
  }

  li {
    @apply list-disc;
  }
</style>
