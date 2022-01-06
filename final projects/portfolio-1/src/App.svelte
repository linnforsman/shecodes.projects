<script>
  import { Router, Route } from "svelte-routing";
  import Home from "./component/Home.svelte";
  import Service from "./component/Service.svelte";
  import Profile from "./component/Profile.svelte";
  import Projects from "./component/Projects.svelte";
  import BlogPost from "./component/BlogPost.svelte";
  import Blog from "./component/Blog.svelte";

  export let url = "";
</script>

<Router url="{url}">
  <div>
    <Route path="/" component={Home} />
    <Route path="service" component={Service} />
    <Route path="about" component={Profile} />
    <Route path="projects" component={Projects} />
    <Route path="blog/:id" component={BlogPost} />
    <Route path="blog" component={Blog} />
  </div>
</Router>
