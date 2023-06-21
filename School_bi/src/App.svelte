<script lang="ts">
  import svelteLogo from './assets/svelte.svg'
  import viteLogo from '/vite.svg'
  import Counter from './lib/Counter.svelte'
</script>

<main>
  <!-- <div>
    <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
      <img src={viteLogo} class="logo" alt="Vite Logo" />
    </a>
    <a href="https://svelte.dev" target="_blank" rel="noreferrer">
      <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
    </a>
  </div> -->
  <h1>Library EZ</h1>

  <div class="card">
    <button class="px-10 py-3 bg-red-500">Tailwind Button</button>
    <button class="btn btn-primary">Primary daisy button</button>
    <button class="btn btn-secondary">Secondary daisy button</button>
  </div>
  
  <p>
    Check out <a href="https://github.com/Fiery518/School_bi/blob/main/README.md" target="_blank" rel="noreferrer">School_bi read about it</a>, Lessss... goooooo
  </p>

  <p class="read-the-docs">
    Will create this to be something great
  </p>
</main>

<style global lang = "postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
