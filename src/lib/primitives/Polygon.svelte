<script lang="ts">
  import Zdog from 'zdog'
  import { mount, type PrimitiveProps } from '$lib'
  interface $$Props extends PrimitiveProps<Zdog.Polygon> {}
  export const node = mount(Zdog.Polygon, $$props)
</script>

<slot />
