<script lang="ts">
  import * as Card from "$lib/components/ui/card/index.js";
  import * as Carousel from "$lib/components/ui/carousel/index.js";
  import Label from "$lib/components/ui/label/label.svelte";

  export let title: string;
  export let overview: string;
  export let details: string[];
</script>

<Carousel.Root
  opts={{
    align: "center",
  }}
  class="w-full text-center px-2 mx-12 "
>
  <p>
    <Label class="text-2xl font-bold m-10 col-span-4 text-center"
      >Activity - {title}</Label
    >
  </p>
  <Label class="text-lg font-medium m-4 col-span-4 text-center"
    >{overview}</Label
  >
  <Carousel.Content>
    {#each details as d, i (i)}
      <Carousel.Item class="md:basis-1/2 lg:basis-1/3 ">
        <div class="p-1 ">
          <Card.Root>
            <Card.Content
              class="flex aspect-square items-center justify-center p-6 font-medium "
            >
              {@html d}
              <span class="text-2xl text-gray-500 self-end text-center mx-auto"
                >{i + 1}</span
              >
            </Card.Content>
          </Card.Root>
        </div>
      </Carousel.Item>
    {/each}
  </Carousel.Content>
  <Carousel.Previous />
  <Carousel.Next />
</Carousel.Root>
