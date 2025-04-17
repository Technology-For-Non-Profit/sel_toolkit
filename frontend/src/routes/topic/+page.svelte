<script lang="ts">
  import { on } from "svelte/events";
  import { Label } from "$lib/components/ui/label/index.js";
  import { Button } from "$lib/components/ui/button/index.js";
  import MediumBanner from "../../lib/components/templates/MediumBanner.svelte";
  import { page } from "$app/stores";
  import data from "../../data/sel_topic_modules.json";

  $: topic_name =
    $page.url.searchParams.get("topic_name") ?? "something interesting";
  $: topic_description =
    $page.url.searchParams.get("topic_description") ?? "No description";
</script>

<div
  class="grid grid-cols-4 gap-4 items-center justify-center h-screen bg-gray-100 p-10 r rounded-lg"
>
  <div class="flex items-center justify-between col-span-4 w-full">
    <Button
      variant="outline"
      size="icon"
      class="ml-auto"
      on:click={() => (location.href = "/")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-5 h-5"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15.75 19.5L8.25 12l7.5-7.5"
        />
      </svg>
    </Button>
    <Label class="text-2xl font-bold text-center flex-grow"
      >Fantastic! Lets discuss on {topic_name} today!
    </Label>
  </div>

  <div class="flex items-center col-span-4 w-full h-full">
    {#each data as d}
      <div class="w-full h-full m-2">
        <a
          href={`${d.link}?name=${encodeURIComponent(d.name)}&description=${encodeURIComponent(d.description)}&topic_name=${encodeURIComponent(topic_name)}&topic_description=${encodeURIComponent(topic_description)}`}
          class="w-full h-full mx-2"
        >
          <MediumBanner name={d.name} description={d.description} />
        </a>
      </div>
    {/each}
  </div>
</div>
