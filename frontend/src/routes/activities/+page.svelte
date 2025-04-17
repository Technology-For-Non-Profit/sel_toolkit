<script lang="ts">
  import { on } from "svelte/events";
  import { Label } from "$lib/components/ui/label/index.js";
  import { Button } from "$lib/components/ui/button/index.js";
  import BannerWarmUp from "../../lib/components/templates/BannerTitleDescription.svelte";
  import { page } from "$app/stores";
  import data from "../../data/sel_warmup.json";

  $: topic_name =
    $page.url.searchParams.get("topic_name") ?? "something interesting";
  $: topic_description =
    $page.url.searchParams.get("topic_description") ?? "No description";
</script>

<div
  class="grid grid-cols-2 gap-2 items-center h-screen bg-gray-100 p-10 r rounded-lg"
>
  <div class="flex items-center justify-between col-span-4 w-full">
    <Button
      variant="outline"
      size="icon"
      class="ml-auto"
      on:click={() => (location.href = "/topic")}
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
      >Lets Discuss some Amazing Way to Warm Up to our Session!</Label
    >
  </div>
  <div class=" text-center col-span-4">
    <Label class="text-lg">We are discussing on {topic_name}</Label>
  </div>

  <div class="flex items-center col-span-2 w-full h-full">
    {#each data as d}
      <a href={"#"} class="w-full h-4/5 m-4">
        <BannerWarmUp idea={d.idea} purpose={d.purpose} />
      </a>
    {/each}
  </div>
</div>
