<script lang="ts">
  import Zdog from 'zdog'
  import { mount } from '$lib'
  import type { PrimitiveProps } from '$lib/types'
  interface $$Props extends PrimitiveProps<Zdog.Cone> {}
  export const node = mount(Zdog.Cone, $$props)
</script>

<slot />
