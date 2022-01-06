<script>
  import { Link } from "svelte-routing";
</script>

<main>
  <nav>
    <Link to="service">Services</Link>
    <Link to="about">About</Link>
    <Link to="projects">Portfolio</Link>
    <Link to="blog">Blog</Link>
  </nav>
</main>

<style>
  nav {
    display: flex;
    justify-content: space-around;
    padding: 5rem;
    text-transform: uppercase;
    font-weight: 100;
  }
</style>
