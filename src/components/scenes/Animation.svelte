<script lang="ts">
  import { Illustration, Ellipse, TAU } from '$lib'
  let rotate = true
</script>

<Illustration
  element="svg"
  width={240}
  height={240}
  dragRotate
  onDragStart={() => (rotate = false)}
  onDragEnd={() => (rotate = true)}
  update={node => delta => {
    if (rotate) {
      node.rotate.x += delta / 800
      node.rotate.y += delta / 1600
      node.rotate.z += delta / 2400
    }
  }}
>
  <Ellipse diameter={128} stroke={4} color="#ef4444" />
  <Ellipse diameter={128} stroke={4} color="#84cc16" rotate={{ x: TAU / 4 }} />
  <Ellipse diameter={128} stroke={4} color="#0ea5e9" rotate={{ y: TAU / 4 }} />
</Illustration>
