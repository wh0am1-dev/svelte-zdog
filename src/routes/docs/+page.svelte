<script lang="ts">
  import { Illustration, Ellipse, RoundedRect, Shape, TAU } from '$lib'

  const mouth = '#e88'
  const skin = '#ffe0da'
  const fg = '#ffb700'
  const bg = '#444'
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

  <!-- <img alt="svelte-zdog" src="/img/header-alpha.png" /> -->
  <h1>svelte-zdog</h1>
  <a href="https://npm.im/svelte-zdog">
    <img
      alt="npm"
      src="https://img.shields.io/badge/npm-svelte--zdog-222?style=flat-square&logo=npm"
    />
  </a>
  <p>svelte components for <a href="https://zzz.dog">zdog</a> 3D renders</p>

  <h2 id="components">components</h2>
  <section>
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
  </section>

  <h2 id="utils">utils</h2>
  <section>
    <ul>
      <li><a href="https://zzz.dog/api">Zdog</a></li>
      <li><a href="https://zzz.dog/api#utilities-tau">TAU</a></li>
      <li><a href="https://zzz.dog/api#vector">Vector</a></li>
      <li><a href="https://zzz.dog/api#utilities-easeinout">easeInOut</a></li>
      <li><a href="https://zzz.dog/api#utilities-extend">extend</a></li>
      <li><a href="https://zzz.dog/api#utilities-lerp">lerp</a></li>
      <li><a href="https://zzz.dog/api#utilities-modulo">modulo</a></li>
    </ul>
  </section>
</main>

<style lang="postcss">
  main {
    @apply w-full overflow-x-hidden py-8;
    @apply flex flex-col items-center justify-center;
  }

  section {
    @apply w-80;
  }

  h1 {
    @apply my-8 text-7xl font-bold;
  }

  h2 {
    @apply mt-12 mb-4 text-4xl font-bold;
  }

  p {
    @apply my-4 text-base;
  }

  a {
    @apply text-amber-400 hover:bg-amber-400 hover:text-stone-800;
  }

  li {
    @apply list-disc;
  }
</style>
