<script lang="ts">
  import { Illustration, TAU } from '$lib'
  import Wall from './Wall.svelte'

  const zoom = 12
  let rotate = false
</script>

<Illustration
  element="canvas"
  width={240}
  height={240}
  {zoom}
  dragRotate
  rotate={{ x: -TAU / 10, y: TAU / 8 }}
  onDragStart={() => (rotate = false)}
  onDragEnd={() => (rotate = true)}
  update={scene => delta => {
    if (rotate) scene.rotate.y += delta / 2000
  }}
>
  <Wall outside="light" inside="dark" left="light" right="dark" {zoom} />
  <Wall
    outside="dark"
    inside="light"
    left="light"
    right="dark"
    rotate={{ y: -TAU / 4 }}
    {zoom}
  />
  <Wall
    outside="dark"
    inside="light"
    left="dark"
    right="light"
    rotate={{ y: -TAU / 2 }}
    {zoom}
  />
  <Wall
    outside="light"
    inside="dark"
    left="dark"
    right="light"
    rotate={{ y: (-TAU * 3) / 4 }}
    {zoom}
  />
</Illustration>
