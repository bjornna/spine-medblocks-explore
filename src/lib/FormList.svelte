<script lang="ts">
  import type { Form } from "./Form";
  import { Link } from "svelte-routing";
  import { forms } from "./Form";
</script>

<div>
  {#each forms as form}
    <div class="bg-gray-100 flex p-3 m-3 border justify-between rounded-md">
      <Link class="font-medium" to={form.name.replaceAll(" ", "_")}
        >{form.name}</Link
      >
    </div>
  {/each}
</div>
