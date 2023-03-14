<script>
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
  update={node => ms => {
    if (rotate) {
      node.rotate.x += 0.01
      node.rotate.y += 0.005
      node.rotate.z += 0.0025
    }
  }}
>
  <Ellipse diameter={128} stroke={4} color="#ef4444" />
  <Ellipse diameter={128} stroke={4} color="#84cc16" rotate={{ x: TAU / 4 }} />
  <Ellipse diameter={128} stroke={4} color="#0ea5e9" rotate={{ y: TAU / 4 }} />
</Illustration>
