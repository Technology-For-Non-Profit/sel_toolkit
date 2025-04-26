<script lang="ts">
  import { on } from "svelte/events";
  import { Label } from "$lib/components/ui/label/index.js";
  import { Button } from "$lib/components/ui/button/index.js";
  import { page } from "$app/stores";

  import OnePageQuiz from "./OnePageQuiz.svelte";
  import type { PageProps } from "./$types";

  let { data }: PageProps = $props();

  let topic_name =
    $page.url.searchParams.get("topic_name") ?? "something interesting";
  let topic_description =
    $page.url.searchParams.get("topic_description") ?? "No description";
</script>

<div class=" bg-gray-100 px-24 text-center align-middle mx-auto h-screen">
  <p class="py-4 font-medium">
    Lets discuss more about <span class="text-lg text-pink-500"
      >{topic_name}</span
    >
    with the quiz
  </p>
  <div class="bg-grey-700 w-3/6 h-2/6 mx-auto p-1">
    <OnePageQuiz data={data.item} />
  </div>
</div>
