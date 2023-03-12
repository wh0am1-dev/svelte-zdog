<script lang="ts">
  import Zdog from 'zdog'
  import { mount, type PrimitiveProps } from '$lib'
  interface $$Props extends PrimitiveProps<Zdog.Anchor> {}
  export const node = mount(Zdog.Anchor, $$props)
</script>

<slot />
