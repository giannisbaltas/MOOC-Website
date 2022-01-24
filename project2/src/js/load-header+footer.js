document.getElementById("header").innerHTML =
`<div class="header-area">
<a href="./" title="HOME - UniStud" class="logo">
    <img src="../../res/pictures/logo.png" alt="HOME">
</a>
<div class="menu-btn" id="menu-btn">
  <div></div>
  <div class="middle-line"></div>
  <div></div>
</div>
<nav class="nav-area">
<ul>
<li> <a href="index.html">Home</a> </li>
<li> 
  <div class="dropdown">
    <button class="dropbtn">Courses<i class="fa fa-caret-down"></i></button>
      <div class="dropdown-content" id="resultCategories">
        <!-- Fill the content in app.js -->
      </div>
    </div>
  </script>
  <div id="results-output1"></div>
  <div id="final_categories"></div>
</li>
    
</ul>
</nav>
<a href="../html/register.html" title="Register" class="register-area">
    <i class="fa fa-user fa-2x register-icon"></i>
    <span class="register-label">Register!</span>
</a>
</div>`;
      

document.getElementById("footer").innerHTML = 
`<small class="copyright">&copy; Copyright 2021, Petros - Giannis</small>
<div class="relevant-links">
    <span class="relevant-links-title">Relevant:</span>
    <div class="flex-around">
        <a href="https://github.com/subamanis/MOOC_Website" title="Repository">
            <i class="fa fa-github fa-2x"></i>
        </a>
        <a href="https://github.com/subamanis/MOOC_Website" title="Repository">
            <i class="fa fa-university fa-lg"></i>
        </a>
    </div>
</div>`;


