<script>
  import { Illustration, Ellipse } from '$lib'
</script>

<Illustration
  element="svg"
  width={240}
  height={240}
  dragRotate
  update={node => ms => {
    node.rotate.y += 0.01
  }}
>
  <Ellipse diameter={128} stroke={32} color="#fbbf24" />
</Illustration>
