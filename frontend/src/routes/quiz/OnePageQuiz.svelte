<script lang="ts">
  import * as Card from "$lib/components/ui/card/index.js";
  import * as Carousel from "$lib/components/ui/carousel/index.js";
  import data from "../../data/sel_quiz.json";
  $: quiz_state = "question";
</script>

<Carousel.Root>
  <Carousel.Content>
    {#each data as d, i (i)}
      <Carousel.Item>
        <div class="p-1">
          <Card.Root>
            <Card.Content
              class="flex aspect-square items-center justify-center p-6"
            >
              {#if quiz_state === "question"}
                <button
                  onclick={() => {
                    quiz_state = "answer";
                  }}
                  class=" transition-all text-4xl font-semibold hover:transform hover:scale-105 transition-discrete duration-400 bg-gray-100 p-4 rounded-xl  motion-reduce:animate-bounce"
                >
                  <p class="text-6xl mb-4 fade-out">Q. {i + 1}</p>
                  <span class="fade-out">{d.question}</span>
                </button>
              {:else}
                <span class="text-4xl font-semibold fade-in">
                  <p class="text-6xl mb-4">Answer</p>
                  {d.options[d.answer]}
                </span>
              {/if}
            </Card.Content>
          </Card.Root>
        </div>
      </Carousel.Item>
    {/each}
  </Carousel.Content>
  <Carousel.Previous
    onclick={() => {
      quiz_state = "question";
    }}
  />
  <Carousel.Next
    onclick={() => {
      quiz_state = "question"; // Reset state on next
    }}
  />
</Carousel.Root>
