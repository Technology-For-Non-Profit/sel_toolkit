<script lang="ts">
  import { Button } from "$lib/components/ui/button/index.js";
  import * as Card from "$lib/components/ui/card/index.js";
  import * as Select from "$lib/components/ui/select/index.js";
  import { Input } from "$lib/components/ui/input/index.js";
  import { Label } from "$lib/components/ui/label/index.js";
  export let idea: string;
  export let purpose: string;
  export let questions: string[]; // Use the prop in your component
</script>

<Card.Root
  class="hover:shadow-lg m-2 transition-shadow duration-300 w-full h-full"
>
  <Card.Header>
    <Card.Title>{idea}</Card.Title>
  </Card.Header>
  <Card.Content>
    <Card.Description class="text-center text-2xl">{purpose}</Card.Description>
    <div class="w-full">
      {#each questions as question}
        <Card.Description>
          <div
            class="text-xl text-center p-4 my-4 border-spacing-1
          border-amber-300 border rounded-lg transition-transform duration-300
          ease-in-out transform hover:scale-105 hover:shadow-md bg-gray-200 text-black hover:bg-amber-300"
          >
            {question}
          </div></Card.Description
        >
      {/each}
    </div>
  </Card.Content>
</Card.Root>
