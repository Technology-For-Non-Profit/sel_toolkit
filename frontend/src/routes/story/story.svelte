<script lang="ts">
  // Your TypeScript code here
  import BannerOneStory from "$lib/components/templates/BannerOneStory.svelte";
  export let title: string;
  export let overview: string; // Use the prop in your
  export let details: string; // Corrected the type to string[]
</script>

<BannerOneStory {title} {overview} {details} />
