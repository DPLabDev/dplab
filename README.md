body {
  font: Lato, "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: white;
  overflow-x: hidden;
}

p {
  font-size: 20px;
  &.small {
    font-size: 16px;
  }
}

a {
  color: #ED2324;
  &.active, &:active, &:focus, &:hover {
    color: #ED2324;
  }
}

h1, h2, h3, h4, h5, h6 {
  font-family: Montserrat, "Helvetica Neue", Helvetica, Arial, sans-serif;
  text-transform: uppercase;
  font-weight: 700;
}

hr.divider {
  padding: 0;
  border: none;
  border-top: solid 5px;
  text-align: center;
  max-width: 250px;
  margin: 25px auto 30px;
}

.img-centered {
  margin: 0 auto;
}

header {
  text-align: center;
  .container {
    padding-top: 100px;
    padding-bottom: 50px;
  }
  img {
    display: block;
    margin: 0 auto 20px;
  }
  .job-title .description {
    font-size: 1.25em;
    font-weight: 300;
  }
}

@media (min-width: 300px) {
  .imageheader {
    content: url("../img/headermobile.png");
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 70%;
  }

  .logo-image {
    content: url("../img/icon.png");
    display: none;
    margin-left: auto;
    margin-right: auto;
    width: 70%;
  }
}

@media (min-width: 600px) {
  .imageheader {
    content: url("../img/header.png");
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
  }
  
  .logo-image {
    content: url("../img/icon.png");
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
  }
}

@media (min-width: 768px) {
  header {
    .container {
      padding-top: 130px;
      padding-bottom: 100px;
    }
    .job-title .description {
      font-size: 1.75em;
    }
  }
}

.navbar-custom {
  background: #2C3E50;
  font-family: Montserrat, "Helvetica Neue", Helvetica, Arial, sans-serif;
  text-transform: uppercase;
  font-weight: 700;
  border: none;
}

.navbar-default .navbar-brand {
  color: #fff;
  &:hover {
    color: #fff;
  }
}

.navbar-custom .navbar-nav {
  letter-spacing: 1px;
}

.navbar-default .navbar-nav > li > a {
  color: #fff;
  &:hover, &:active, &:focus {
    color: #CCCCCC;
  }
}

.navbar-custom {
  .navbar-nav li.active a {
    color: #fff;
    background: #ED2324;
    &:active, &:focus, &:hover {
      color: #fff;
      background: #ED2324;
    }
  }
  .navbar-toggle {
    color: #fff;
    text-transform: uppercase;
    font-size: 10px;
    border-color: #fff;
    &:focus, &:hover {
      background-color: #ED2324;
      color: #fff;
      border-color: #ED2324;
    }
  }
}

@media (min-width: 768px) {
  /* line 163, ../assets/stylesheets/dpstyle.scss */
  .navbar-custom {
    padding: 25px 0;
    -webkit-transition: padding .3s;
    -moz-transition: padding .3s;
    transition: padding 0.3s;
    .navbar-brand {
      font-size: 2em;
      -webkit-transition: all .3s;
      -moz-transition: all .3s;
      transition: all 0.3s;
    }
    &.affix {
      padding: 10px 0;
      .navbar-brand {
        font-size: 1.5em;
      }
    }
  }
}

.navbar-toggle {
  border: 2px solid transparent;
}

section {
  padding: 100px 0;
  h2 {
    margin: 0;
    font-size: 3em;
  }
  &.portfolio {
    background: #E4CC37;
    color: #A89C38;
  }
  &.whoami {
    background: #8FC93A;
    color: #5A5C3B;
    a.btn.btn-lg.btn-outline.active {
      color: #8FC93A;
      background: #5A5C3B;
      border: 2px solid #5A5C3B;
    }
  }
}

@media (max-width: 767px) {
  section {
    padding: 75px 0;
    &.first {
      padding-top: 75px;
    }
  }
}

a.btn.btn-lg.btn-outline {
  &:active, &:focus, &:hover {
    color: #8FC93A;
    background: #5A5C3B;
    border: 2px solid #5A5C3B;
  }
}

section.contact {
  background: #E18335;
  color: #F5D9C2;
  button.btn.btn-primary.btn-outline.active {
    color: #E18335;
    background: #F5D9C2;
    border: 2px solid #F5D9C2;
  }
}

button.btn.btn-primary.btn-outline {
  &:active, &:focus, &:hover {
    color: #E18335;
    background: #F5D9C2;
    border: 2px solid #F5D9C2;
  }
}

#maincontent {
  color: #2C3E50;
}

#portfolio {
  .portfolio-item {
    margin: 0 0 15px;
    right: 0;
    .portfolio-link {
      display: block;
      position: relative;
      max-width: 400px;
      margin: 0 auto;
      .caption {
        background: #ED2324;
        position: absolute;
        width: 100%;
        height: 100%;
        opacity: 0;
        transition: all ease .5s;
        -webkit-transition: all ease .5s;
        -moz-transition: all ease 0.5s;
        &:hover {
          opacity: 1;
        }
        .caption-content {
          position: absolute;
          width: 100%;
          height: 20px;
          font-size: 20px;
          text-align: center;
          margin-top: 15px;
          color: #fff;
          i {
            margin-top: -12px;
          }
          h3, h4 {
            margin: 0;
          }
        }
      }
    }
  }
  * {
    z-index: 2;
  }
}

@media (min-width: 767px) {
  /* line 292, ../assets/stylesheets/dpstyle.scss */
  #portfolio .portfolio-item {
    margin: 0 0 30px;
  }
}

.floating-label-form-group {
  position: relative;
  margin-bottom: 0;
  padding-bottom: .5em;
  border-bottom: 1px solid #F5D9C2;
  input, textarea {
    z-index: 1;
    position: relative;
    padding-right: 0;
    padding-left: 0;
    border: none;
    border-radius: 0;
    font-size: 1.5em;
    background: 0 0;
    box-shadow: none !important;
    resize: none;
  }
  label {
    display: block;
    z-index: 0;
    position: relative;
    top: 2em;
    margin: 0;
    font-size: .85em;
    line-height: 1.764705882em;
    vertical-align: middle;
    vertical-align: baseline;
    opacity: 0;
    -webkit-transition: top .3s ease, opacity .3s ease;
    -moz-transition: top .3s ease, opacity .3s ease;
    -ms-transition: top .3s ease, opacity .3s ease;
    transition: top 0.3s ease, opacity 0.3s ease;
  }
  &:not(:first-child) {
    padding-left: 14px;
    border-left: 1px solid #ED2324;
  }
}

.floating-label-form-group-with-value label {
  top: 0;
  opacity: 1;
}

.floating-label-form-group-with-focus label {
  color: #fff;
}

form .row:first-child .floating-label-form-group {
  border-top: 1px solid #F5D9C2;
}

::-webkit-input-placeholder {
  /* WebKit, Blink, Edge */
  color: #F5D9C2 !important;
}

:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: #F5D9C2 !important;
  opacity: 1;
}

::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: #F5D9C2 !important;
  opacity: 1;
}

:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: #F5D9C2 !important;
}

::-ms-input-placeholder {
  /* Microsoft Edge */
  color: #F5D9C2 !important;
}

::placeholder {
  /* Most modern browsers support this now. */
  color: #F5D9C2 !important;
}

footer {
  color: #fff;
  h3 {
    margin-bottom: 30px;
  }
  .footer-above {
    padding-top: 50px;
    background-color: #2C3E50;
  }
  .footer-col {
    margin-bottom: 50px;
  }
  .footer-below {
    padding: 25px 0;
    background-color: #233140;
  }
}

.btn-outline {
  color: #5A5C3B;
  font-size: 20px;
  border: 2px solid #5A5C3B;
  background: 0 0;
  transition: all .3s ease-in-out;
  margin-top: 15px;
  &.active, &:active, &:focus, &:hover {
    color: #5A5C3B;
    background: #ED2324;
    border: 2px solid #ED2324;
  }
}

.btn-primary {
  color: #F5D9C2;
  background-color: #E18335;
  border-color: #F5D9C2;
  font-weight: 700;
  &.active, &:active, &:focus, &:hover {
    color: #fff;
    background-color: #1a242f;
    border-color: #161f29;
  }
}

.open .dropdown-toggle.btn-primary {
  color: #fff;
  background-color: #1a242f;
  border-color: #161f29;
}

.btn-primary {
  &.active, &:active {
    background-image: none;
  }
}

.open .dropdown-toggle.btn-primary {
  background-image: none;
}

.btn-primary {
  &.disabled {
    background-color: #2C3E50;
    border-color: #2C3E50;
    &.active, &:active, &:focus, &:hover {
      background-color: #2C3E50;
      border-color: #2C3E50;
    }
  }
  &[disabled] {
    background-color: #2C3E50;
    border-color: #2C3E50;
    &.active, &:active, &:focus, &:hover {
      background-color: #2C3E50;
      border-color: #2C3E50;
    }
  }
}

fieldset[disabled] .btn-primary {
  background-color: #2C3E50;
  border-color: #2C3E50;
  &.active, &:active, &:focus, &:hover {
    background-color: #2C3E50;
    border-color: #2C3E50;
  }
}

.btn-primary .badge {
  color: #2C3E50;
  background-color: #fff;
}

.btn-whoami {
  color: #fff;
  background-color: #ED2324;
  border-color: #ED2324;
  font-weight: 700;
  &.active, &:active, &:focus, &:hover {
    color: #fff;
    background-color: #128f76;
    border-color: #11866f;
  }
}

.open .dropdown-toggle.btn-whoami {
  color: #fff;
  background-color: #128f76;
  border-color: #11866f;
}

.btn-whoami {
  &.active, &:active {
    background-image: none;
  }
}

.open .dropdown-toggle.btn-whoami {
  background-image: none;
}

.btn-whoami {
  &.disabled {
    background-color: #ED2324;
    border-color: #ED2324;
    &.active, &:active, &:focus, &:hover {
      background-color: #ED2324;
      border-color: #ED2324;
    }
  }
  &[disabled] {
    background-color: #ED2324;
    border-color: #ED2324;
    &.active, &:active, &:focus, &:hover {
      background-color: #ED2324;
      border-color: #ED2324;
    }
  }
}

fieldset[disabled] .btn-whoami {
  background-color: #ED2324;
  border-color: #ED2324;
  &.active, &:active, &:focus, &:hover {
    background-color: #ED2324;
    border-color: #ED2324;
  }
}

.btn-whoami .badge {
  color: #ED2324;
  background-color: #fff;
}

.btn-social {
  display: inline-block;
  height: 50px;
  width: 50px;
  border: 2px solid #fff;
  color: #fff;
  border-radius: 100%;
  text-align: center;
  font-size: 20px;
  line-height: 45px;
}

.btn-outline {
  font-size: 17px;
}

list-inline a.btn-social.btn-outline.active {
  color: #2C3E50;
  background: #fff;
  border: 2px solid #fff;
}

a.btn-social.btn-outline {
  &:active, &:hover {
    color: #2C3E50;
    background: #fff;
    border: 2px solid #fff;
  }
}

.scroll-top {
  position: fixed;
  right: 2%;
  bottom: 2%;
  width: 50px;
  height: 50px;
  z-index: 1049;
  .btn {
    font-size: 20px;
    width: 50px;
    height: 50px;
    border-radius: 100%;
    line-height: 28px;
  }
}

.portfolio-modal {
  .modal-content {
    border-radius: 0;
    background-clip: border-box;
    -webkit-box-shadow: none;
    box-shadow: none;
    border: none;
    min-height: 100%;
    padding: 100px 0;
    text-align: center;
    h2 {
      margin: 0;
      font-size: 3em;
    }
    img {
      margin-bottom: 30px;
    }
    .item-details {
      margin: 30px 0;
    }
  }
  
  .close-modal {
    position: absolute;
    width: 75px;
    height: 75px;
    background-color: transparent;
    top: 25px;
    right: 25px;
    cursor: pointer;
    &:hover {
      opacity: 0.3;
    }
	
    .lr {
      height: 75px;
      width: 1px;
      margin-left: 35px;
      background-color: #2C3E50;
      transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      -webkit-transform: rotate(45deg);
      z-index: 1051;
      .rl {
        height: 75px;
        width: 1px;
        background-color: #2C3E50;
        transform: rotate(90deg);
        -ms-transform: rotate(90deg);
        -webkit-transform: rotate(90deg);
        z-index: 1052;
      }
    }
  }
  
  .modal-backdrop {
    opacity: 0;
    display: none;
  }
}

.form-control {
  color: #F5D9C2;
  &:focus {
    border-color: #fff;
    color: #fff;
  }
}

#skipnav a {
  padding: 6px;
  position: absolute;
  top: -40px;
  left: 0;
  color: #fff;
  border-right: 1px solid #fff;
  border-bottom: 1px solid #fff;
  border-bottom-right-radius: 8px;
  background: 0 0;
  transition: top 1s ease-out, background 1s linear;
  z-index: 2000;
  &:focus {
    position: absolute;
    left: 0;
    top: 0;
    background: #ED2324;
    outline: 0;
    transition: top 0.1s ease-in, background 0.5s linear;
  }
}

div#maincontent {
  outline: 0;
}

.modal-body {
  background-color: red;
}