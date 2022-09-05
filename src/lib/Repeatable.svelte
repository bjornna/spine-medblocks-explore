<script lang="ts">
  export let number: number = 1;
  export let name: string = "";
</script>

{#each [...Array(number)] as _, i}
  <slot {i} />
{/each}
<div>
  <sl-button
    type="neutral"
    class="mt-2"
    on:click={() => {
      number++;
    }}><sl-icon slot="prefix" name="plus-square-fill" />Add {name}</sl-button
  >
  {#if number > 1}
    <sl-button
      on:click={() => {
        number--;
      }}
      ><sl-icon slot="prefix" name="dash-square-fill" />Delete {name}</sl-button
    >
  {/if}
</div>
