<script>
  import { Illustration, Group, Ellipse } from '$lib'
</script>

<Illustration element="svg" width={240} height={240} dragRotate>
  <Group translate={{ z: 20 }}>
    <Ellipse width={180} height={100} color="#f5f5f4" stroke={10} fill />
    <Ellipse diameter={80} color="#fbbf24" stroke={10} fill />
    <Ellipse diameter={40} color="#1c1917" stroke={10} fill />
    <Ellipse
      translate={{ x: 20, y: -20 }}
      diameter={30}
      color="#f5f5f4"
      stroke={10}
      fill
    />
  </Group>
</Illustration>
