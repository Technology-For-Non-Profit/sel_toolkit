<script lang="ts">
  import { Button } from "$lib/components/ui/button/index.js";
  import * as Card from "$lib/components/ui/card/index.js";
  import * as Select from "$lib/components/ui/select/index.js";
  import { Input } from "$lib/components/ui/input/index.js";
  import { Label } from "$lib/components/ui/label/index.js";
  export let name: string;
  export let description: string;
</script>

<Card.Root
  class="hover:shadow-lg transition-shadow duration-300 w-full h-full cursor-pointer hover:bg-gray-200"
  on:click={() => {
    alert("Card clicked");
  }}
>
  <Card.Header>
    <Card.Title tag="h6">{name}</Card.Title>
  </Card.Header>
  <Card.Content>
    <Card.Description>{description}</Card.Description>
  </Card.Content>
</Card.Root>
