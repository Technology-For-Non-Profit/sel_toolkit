<script lang="ts">
  import Button from "$lib/components/ui/button/button.svelte";
  import Home from "./Home.svelte";
  import Label from "$lib/components/ui/label/label.svelte";
  import type { PageProps } from "./$types";

  let { data }: PageProps = $props();
</script>

<div
  style="display: flex; justify-content: center; align-items: center; height: 100vh;"
>
  <Home data={data.item} />
</div>
<!-- <h1>Welcome to SvelteKit</h1>
<p>
  Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the
  documentation
</p> -->
