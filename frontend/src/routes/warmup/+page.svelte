<script lang="ts">
  import { Label } from "$lib/components/ui/label/index.js";
  import BannerTitleDescription from "../../lib/components/templates/BannerTitleDescription.svelte";
  import { page } from "$app/stores";
  import json_data from "../../data/sel_warmup.json";
  import Idea from "./idea.svelte";
  import type { PageProps } from "./$types";

  let topic_id =
    $page.url.searchParams.get("topic_id") ?? "something interesting";

  let topic_name =
    $page.url.searchParams.get("topic_name") ?? "something interesting";

  let topic_description =
    $page.url.searchParams.get("topic_description") ?? "No description";

  let { data }: PageProps = $props();
  let is_idea = $state(false);
  let current_idea = $state("");
  let current_purpose = $state("");
  let current_questions: string[] = $state([]);
  console.log("The fetched data is ---->", data);
</script>

<div
  class="grid grid-cols-2 gap-2 items-center h-screen bg-gray-100 p-10 r rounded-lg"
>
  <!-- <div class="flex items-center justify-between col-span-4 w-full">
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
  </div> -->
  <div class=" text-center col-span-4">
    <Label class="text-lg">We are discussing on {topic_name}</Label>
  </div>

  <div
    class={`flex items-center col-span-2 w-full h-full ${is_idea ? "hidden" : ""} `}
  >
    {#each data.item as d}
      <a
        href={"#"}
        class="w-full h-4/5 m-4"
        onclick={() => {
          is_idea = true;
          current_idea = d.idea;
          current_purpose = d.purpose;
          current_questions = d.reflective_questions;
        }}
      >
        <BannerTitleDescription idea={d.idea} purpose={d.purpose} />
      </a>
    {/each}
  </div>
  {#if is_idea}
    <div
      class="flex items-center justify-center w-full h-full mx-auto col-span-2"
    >
      <Idea
        idea={current_idea}
        purpose={current_purpose}
        questions={current_questions}
      />
    </div>
  {/if}
</div>
