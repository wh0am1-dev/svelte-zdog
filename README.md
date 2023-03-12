<div align="center">

[![svelte-zdog](static/img/header-alpha.png)](https://carlos-aguilar.com/svelte-zdog)

[![npm](https://img.shields.io/badge/npm-svelte--zdog-222?style=flat-square&logo=npm)](https://npm.im/svelte-zdog)

svelte components for [zdog](https://zzz.dog) 3D renders

read [the docs](https://carlos-aguilar.com/svelte-zdog) for more info

## example

</div>

```svelte
<script>
  import { Illustration, Ellipse } from 'svelte-zdog'
</script>

<Illustration width={240} height={240} dragRotate>
  <Ellipse diameter={80} stroke={20} color="#ffb700" />
</Illustration>
```

<div align="center">

result:

![example](static/img/example.png)

## dev

🚧 dev server  
`npm run dev`

🏗 build site  
`npm run build`

📦 package  
`npm run package`

</div>
