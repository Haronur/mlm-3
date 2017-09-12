<div id="page-header" class="bg-gradient-7 font-inverse">
  <div id="mobile-navigation">
    <button id="nav-toggle" class="collapsed" data-toggle="collapse" data-target="#page-sidebar"><span></span></button>
    <a href="{{ route('admin.home') }}" class="logo-content-small" title="{{ config('app.name') }}"></a>
  </div>

  <div id="header-logo" class="logo-bg">
    <a href="{{ route('admin.home') }}" class="logo-content-big" title="{{ config('app.name') }}">
      App <i>Name</i>
      <span>Tag line</span>
    </a>
    <a href="{{ route('admin.home') }}" class="logo-content-small" title="{{ config('app.name') }}">
      App <i>Name</i>
      <span>Tag line</span>
    </a>
    <a id="close-sidebar" href="#" title="Close sidebar">
      <i class="glyph-icon icon-angle-left"></i>
    </a>
  </div>

  <div id="header-nav-left">
    <div class="user-account-btn dropdown">
      <a href="#" title="My Account" class="user-profile clearfix" data-toggle="dropdown">
        <img width="28" src="{{ asset('assets/img/gravatar.jpg') }}" alt="Profile image">
        <span>Admin</span>
        <i class="glyph-icon icon-angle-down"></i>
      </a>
      <div class="dropdown-menu float-left">
        <div class="box-sm">
          <div class="login-box clearfix">
            <div class="user-info">
              <span>
                Admin
                <i>Admin</i>
              </span>
              <a href="{{ route('admin.settings.account') }}" title="Edit profile">Edit Account Settings</a>
            </div>
          </div>
          <div class="divider"></div>
          <div class="pad5A button-pane button-pane-alt text-center">
            <a href="{{ route('admin.logout') }}" class="btn display-block font-normal btn-danger">
              <i class="glyph-icon icon-power-off"></i>
              Logout
            </a>
          </div>
        </div>
      </div>
    </div>
  </div><!-- #header-nav-left -->

  <div id="header-nav-right">
    <a href="#" class="hdr-btn" id="fullscreen-btn" title="Fullscreen">
      <i class="glyph-icon icon-arrows-alt"></i>
    </a>

    <a class="header-btn" id="logout-btn" href="{{ route('admin.logout') }}" title="Logout">
      <i class="glyph-icon icon-linecons-lock"></i>
    </a>
  </div><!-- #header-nav-right -->
</div>
