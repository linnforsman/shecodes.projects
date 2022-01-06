<script>
  import Navbar from "./Navbar.svelte";
</script>

<main>
  <div>
    <h1>Linn Forsman</h1>
    <h2>Data Science</h2>
    <h3>Portfolio</h3>
    <p>
      I am a Data Scientist with a background in Information Technology, audio
      engineering, and music.
    </p>
  </div>
  <Navbar />
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #0077ff;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  h2 {
    color: #0077ff;
    text-transform: uppercase;
    font-size: 2em;
    font-weight: 100;
  }

  h3 {
    font-size: 2.7em;
    font-weight: 100;
    text-transform: uppercase;
  }
  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
