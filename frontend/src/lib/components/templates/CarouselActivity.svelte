<script lang="ts">
  import { Button } from "$lib/components/ui/button/index.js";
  import * as Card from "$lib/components/ui/card/index.js";
  import * as Select from "$lib/components/ui/select/index.js";
  import { Input } from "$lib/components/ui/input/index.js";
  import { Label } from "$lib/components/ui/label/index.js";
  export let title: string;
  export let overview: string;
  export let details: string[]; // Use the prop in your component
</script>

<Card.Root
  class="hover:shadow-lg m-2 transition-shadow duration-300 w-full h-full"
>
  <Card.Header>
    <Card.Title>{title}</Card.Title>
  </Card.Header>
  <Card.Content>
    <Card.Description class="text-center">{overview}</Card.Description>
    <div class="w-full">
      <Card.Description>
        <div
          class="text-xl text-center p-4 my-4 border-spacing-1 mx-auto
               rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-md flex justify-center items-center"
        >
          {@html details}
        </div></Card.Description
      >
    </div>
  </Card.Content>
</Card.Root>
