<script lang="ts">
  // Your TypeScript code here
  import BannerWarmUpIdea from "$lib/components/templates/BannerWarmUpIdea.svelte";
  export let idea: string;
  export let purpose: string; // Use the prop in your
  export let questions: string[]; // Corrected the type to string[]
</script>

<BannerWarmUpIdea {idea} {purpose} {questions} />
