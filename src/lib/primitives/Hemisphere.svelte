<script lang="ts">
  import Zdog from 'zdog'
  import { mount, type PrimitiveProps } from '$lib'
  interface $$Props extends PrimitiveProps<Zdog.Hemisphere> {}
  export const node = mount(Zdog.Hemisphere, $$props)
</script>

<slot />
