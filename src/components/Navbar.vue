<template>
  <header
    id="navbar-spy"
    class="header header-1 header-transparent header-fixed"
  >
    <nav id="primary-menu" class="navbar navbar-fixed-top">
      <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button
            type="button"
            class="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#navbar-collapse-1"
            aria-expanded="false"
          >
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <router-link class="logo" to="/">
            <img
              class="logo-light"
              src="/assets/images/logo/logo-light.png"
              alt="Land Logo"
            />
            <img
              class="logo-dark"
              src="/assets/images/logo/logo-dark.png"
              alt="Land Logo"
            />
          </router-link>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse pull-right" id="navbar-collapse-1">
          <ul class="nav navbar-nav nav-pos-center navbar-left">
            <!-- Home Menu -->
            <li class=" active">
              <router-link
                to="/"
                data-toggle="dropdown"
                class="dropdown-toggle menu-item"
                >home</router-link
              >
              
            </li>
            <li class=" active">
              <router-link
                to="/property"
                data-toggle="dropdown"
                class="dropdown-toggle menu-item"
                >property</router-link
              >
              
            </li>
            <li class=" active">
              <router-link
                to="/agency"
                data-toggle="dropdown"
                class="dropdown-toggle menu-item"
                >agency</router-link
              >
              
            </li>
            <li class=" active">
              <router-link
                to="/agents"
                data-toggle="dropdown"
                class="dropdown-toggle menu-item"
                >agents</router-link
              >
            </li>
            <li class=" active">
              <router-link
                to="/about"
                data-toggle="dropdown"
                class="dropdown-toggle menu-item"
                >about us</router-link
              >
            </li>
            <li class=" active">
              <router-link
                to="/contact"
                data-toggle="dropdown"
                class="dropdown-toggle menu-item"
                >contact</router-link
              >
            </li>
          </ul>
          <!-- Module Signup  -->
          <div class="module module-login pull-left">
            <a class="btn-popup" data-toggle="modal" data-target="#signupModule"
              >Login</a
            >
            <div
              class="modal register-login-modal fade"
              tabindex="-1"
              role="dialog"
              id="signupModule"
            >
              <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                  <div class="modal-body">
                    <div class="row">
                      <!-- Nav tabs -->
                      <ul class="nav nav-tabs">
                        <li class="active">
                          <a href="#login" data-toggle="tab">login</a>
                        </li>
                        <li><a href="#signup" data-toggle="tab">signup</a></li>
                      </ul>
                      <!-- Tab panes -->
                      <div class="tab-content">
                        <div class="tab-pane fade in active" id="login">
                          <div class="signup-form-container text-center">
                            <form class="mb-0">
                              <a href="#" class="btn btn--facebook btn--block"
                                ><i class="fa fa-facebook-square"></i>Login with
                                Facebook</a
                              >
                              <div class="or-text">
                                <span>or</span>
                              </div>
                              <div class="form-group">
                                <input
                                  type="email"
                                  class="form-control"
                                  name="login-email"
                                  id="login-email"
                                  placeholder="Email Address"
                                />
                              </div>
                              <!-- .form-group end -->
                              <div class="form-group">
                                <input
                                  type="password"
                                  class="form-control"
                                  name="login-password"
                                  id="login-password"
                                  placeholder="Password"
                                />
                              </div>
                              <!-- .form-group end -->
                              <div class="input-checkbox">
                                <label class="label-checkbox">
                                  <span>Remember Me</span>
                                  <input type="checkbox" />
                                  <span class="check-indicator"></span>
                                </label>
                              </div>
                              <input
                                type="submit"
                                class="btn btn--primary btn--block"
                                value="Sign In"
                              />
                              <a href="#" class="forget-password"
                                >Forget your password?</a
                              >
                            </form>
                            <!-- form  end -->
                          </div>
                          <!-- .signup-form end -->
                        </div>
                        <div class="tab-pane" id="signup">
                          <form class="mb-0">
                            <a href="#" class="btn btn--facebook btn--block"
                              ><i class="fa fa-facebook-square"></i>Register
                              with Facebook</a
                            >
                            <div class="or-text">
                              <span>or</span>
                            </div>
                            <div class="form-group">
                              <input
                                type="text"
                                class="form-control"
                                name="full-name"
                                id="full-name"
                                placeholder="Full Name"
                              />
                            </div>
                            <!-- .form-group end -->
                            <div class="form-group">
                              <input
                                type="email"
                                class="form-control"
                                name="register-email"
                                id="register-email"
                                placeholder="Email Address"
                              />
                            </div>
                            <!-- .form-group end -->
                            <div class="form-group">
                              <input
                                type="password"
                                class="form-control"
                                name="register-password"
                                id="register-password"
                                placeholder="Password"
                              />
                            </div>
                            <!-- .form-group end -->
                            <div class="input-checkbox">
                              <label class="label-checkbox">
                                <span
                                  >I agree with all
                                  <a href="#">Terms & Conditions</a></span
                                >
                                <input type="checkbox" />
                                <span class="check-indicator"></span>
                              </label>
                            </div>
                            <input
                              type="submit"
                              class="btn btn--primary btn--block"
                              value="Register"
                            />
                          </form>
                          <!-- form  end -->
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- /.modal-content -->
                </div>
                <!-- /.modal-dialog -->
              </div>
              <!-- /.modal -->
            </div>
          </div>
          <!-- Module Consultation  -->
          <div class="module module-property pull-left">
            <router-link to="/add-property" target="_blank" class="btn"
              ><i class="fa fa-plus"></i> add property</router-link
            >
          </div>
        </div>
        <!-- /.navbar-collapse -->
      </div>
      <!-- /.container-fluid -->
    </nav>
  </header>
</template>

<script>
export default {};
</script>
    
<style>
.bmyGb {
  background-color: black;
}
</style>