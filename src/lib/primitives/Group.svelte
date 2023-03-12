<script lang="ts">
  import Zdog from 'zdog'
  import { mount, type PrimitiveProps } from '$lib'
  interface $$Props extends PrimitiveProps<Zdog.Group> {}
  export const node = mount(Zdog.Group, $$props)
</script>

<slot />
