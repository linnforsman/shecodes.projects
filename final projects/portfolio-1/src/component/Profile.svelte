<script>
  import { Link } from "svelte-routing";
</script>

<header>
  <main>
    <Link to="/">Back</Link>
    <h5>Data Scientist_</h5>
    <h3>Linn Forsman</h3>
    <h4>/ Overview</h4>
    <p></p>
    <h4>/ Project Experience</h4>
    <h4>/ Professional Experience</h4>
    <h4>/ Education</h4>
  </main>
</header>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h3 {
    font-size: 2.7em;
    font-weight: 500;
    text-transform: uppercase;
  }

  h4 {
    font-size: 1.5em;
    font-weight: 100;
    text-transform: uppercase;
  }

  h5 {
    font-size: 1.2em;
    font-weight: 100;
    text-transform: uppercase;
  }

  p {
    font-size: 1.2em;
    font-weight: 100;
  }
  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
