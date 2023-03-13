<script lang="ts">
  import Zdog from 'zdog'
  import { mount } from '$lib'
  import type { PrimitiveProps } from '$lib/types'
  interface $$Props extends PrimitiveProps<Zdog.Rect> {}
  export const node = mount(Zdog.Rect, $$props)
</script>

<slot />
