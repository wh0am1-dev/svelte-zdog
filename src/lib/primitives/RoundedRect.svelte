<script lang="ts">
  import Zdog from 'zdog'
  import { mount } from '$lib'
  import type { PrimitiveProps } from '$lib/types'
  interface $$Props extends PrimitiveProps<Zdog.RoundedRect> {}
  export const node = mount(Zdog.RoundedRect, $$props)
</script>

<slot />
