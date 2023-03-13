<script lang="ts">
  import Zdog from 'zdog'
  import { mount } from '$lib'
  import type { PrimitiveProps } from '$lib/types'
  interface $$Props extends PrimitiveProps<Zdog.Shape> {}
  export const node = mount(Zdog.Shape, $$props)
</script>

<slot />
