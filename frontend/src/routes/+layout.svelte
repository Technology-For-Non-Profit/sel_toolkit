<script lang="ts">

  import Button from "$lib/components/ui/button/button.svelte";
  import Label from "$lib/components/ui/label/label.svelte";
  import { page } from "$app/state";
  import "../app.css";
  let { children } = $props();
  let heading = $state("Good Morning Ninad! What is the topic for today?");

  $effect(() => {
    let topic_name =
      page.url.searchParams.get("topic_name") ?? "something interesting";
    switch (page.url.pathname) {
      case "/topic":
        heading = `Fantastic! Lets discuss on ${topic_name} today!`;
        break;
      case "/warmup":
        heading = "Lets Discuss some Amazing Way to Warm Up to our Session!";
        break;
      case "/story":
        heading = "Lets Discuss a Story for our Session!";
        break;
      case "/quiz":
        heading = "Its Quiz Time!";
        break;
      case "/activity":
        heading = `Lets head to some amazing activities based on ${topic_name}!`;
        break;
      default:
        heading = "Good Morning Ninad! What is the topic for today?";
    }
  });
</script>

<div
  class=" align-middle inline-flex bg-gray-300 w-screen"
  style="padding: 1rem; border-bottom: 1px solid #ddd;"
>
  <div class="w-fit">
    <Button
      variant="outline"
      size="lg"
      class="mx-5"
      on:click={() => (page.url.pathname != "/" ? history.back() : "/")}
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
    <Button variant="outline" size="lg" on:click={() => (location.href = "/")}>
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
          d="M3 12l9-9 9 9M4.5 12H19.5V21H4.5z"
        />
      </svg>
    </Button>
  </div>
  <div class="w-3/4 align-middle my-auto text-center">
    <Label class="text-2xl font-semibold">{heading}</Label>
  </div>
</div>

{@render children()}
