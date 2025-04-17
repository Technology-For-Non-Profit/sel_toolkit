<script lang="ts">
  import Banner from "../lib/components/templates/Banner.svelte";
  import Label from "$lib/components/ui/label/label.svelte";
  import sel_data from "../data/sel_topic.json";
  let cards = ["Card 1", "Card 2", "Card 3"];
</script>

<div
  class="grid grid-cols-4 gap-4 items-center justify-center h-screen bg-gray-100 p-10"
>
  <Label class="text-2xl font-bold mb-4 col-span-4 text-center">
    Good Morning Ninad! What is our topic for today?
  </Label>

  {#each sel_data as topic}
    <a
      href={`/topic?topic_name=${encodeURIComponent(topic.name)}&topic_description=${encodeURIComponent(topic.description)}`}
      class="w-full h-full"
    >
      <Banner name={topic.name} description={topic.description} />
    </a>
  {/each}
</div>

<!-- /*
{#each sel_data as topic}
  <a href={`/topic`} class="w-full h-full">
    <Banner name={topic.name} description={topic.description} />
  </a>
{/each}

*/ -->
