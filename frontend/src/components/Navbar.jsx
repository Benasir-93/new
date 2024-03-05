import React from 'react'

function Navbar() {
  return (

<>
<nav className="navbar navbar-expand-lg bg-body-light">
  <div className="container-fluid">
    <a class="navbar-brand" href="#"><h2>5WAY</h2></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0 ">
       
        <li class="nav-item mx-auto">
          <a class="nav-link fw-semibold" href="# "  style={{color:"#005DFF"}}>About</a>
        </li>
        <li class="nav-item  mx-auto">
          <a class="nav-link fw-semibold" href="#"  style={{color:"#005DFF"}}>Contact</a>
        </li>
        <li class="nav-item  mx-auto">
          <a class="nav-link fw-semibold" href="#"  style={{color:"#005DFF"}}>Get Inquiry</a>
        </li>
      </ul>
     
    </div>
  </div>
</nav>
</>
    )
}

export default Navbar