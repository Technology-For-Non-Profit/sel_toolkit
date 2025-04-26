<script lang="ts">
  import { Button } from "$lib/components/ui/button/index.js";
  import * as Card from "$lib/components/ui/card/index.js";
  import * as Select from "$lib/components/ui/select/index.js";
  import { Input } from "$lib/components/ui/input/index.js";
  import { Label } from "$lib/components/ui/label/index.js";
  export let idea: string;
  export let purpose: string;
</script>

<Card.Root
  class="hover:shadow-lg m-2 transition-shadow duration-300 w-full h-full cursor-pointer hover:bg-amber-200 border-amber-700"
>
  <Card.Header>
    <Card.Title class="text-2xl">{idea}</Card.Title>
  </Card.Header>
  <Card.Content>
    <Card.Description class="text-xl">{purpose}</Card.Description>
  </Card.Content>
</Card.Root>
