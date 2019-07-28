<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="container">
      <div class="navbar navbar-inverse navbar-fixed-top">
        <div class="container">
          <div class="navbar-header">
            <button class="navbar-toggle collapsed" type="button" data-toggle="collapse" data-target=".navbar-collapse">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand hidden-sm" href="/" onclick="_hmt.push(['_trackEvent', 'navbar', 'click', 'navbar-首页'])">Bootstrap中文网</a>
          </div>
          <div class="navbar-collapse collapse" role="navigation">
            <ul class="nav navbar-nav">
              <li class="hidden-sm hidden-md"><a href="/">Bootstrap2中文文档</a></li>
              <li><a href="/"  >Bootstrap3中文文档</a></li>
              <li><a href="/">Bootstrap4中文文档</a></li>
              <li><a href="/">Less 教程</a></li>
              <li><a href="/">jQuery API</a></li>
              <li><a class="reddot" href="/">网站实例</a></li>
            </ul>
            <ul class="nav navbar-nav navbar-right hidden-sm">
              <li><a href="/">关于</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
