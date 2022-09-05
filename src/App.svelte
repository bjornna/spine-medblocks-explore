<script lang="ts">
  import "./index.css";
  import { forms } from "./lib/Form";
  import "medblocks-ui";
  import "medblocks-ui/dist/shoelace";

  import { Router, Route } from "svelte-routing";
  import Home from "./lib/Home.svelte";

  import FormWrapper from "./lib/FormWrapper.svelte";
</script>

<main class="p-5 md:p-12 flex flex-col gap-5">
  <div class="flex justify-between">
    <a class="flex gap-3" href="/">
      <h1 class="text-2xl font-medium text-gray-700">Arena for Ryggkirurgi</h1>
    </a>
    <sl-button
      type="neutral"
      href="https://github.com/medblocks/all-forms"
      target="_blank"
    >
      <sl-icon slot="suffix" name="github" />
      Github
    </sl-button>
  </div>
  <Router>
    <Route path="/"><Home /></Route>
    {#each forms as form}
      <Route path={form.name.replaceAll(" ", "_")}>
        <FormWrapper id={form.id} component={form.component} name={form.name} />
      </Route>
    {/each}
  </Router>
</main>

<style>
</style>
