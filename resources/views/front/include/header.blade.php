<?php
  $route = \Route::currentRouteName();
  if (is_null($route)) $route = 'home';
  if ($route == 'announcement.read') {
    $routeEN = route($route, ['lang' => 'en', 'id' => $model->id]);
    $routeCHS = route($route, ['lang' => 'chs', 'id' => $model->id]);
    $routeCHT = route($route, ['lang' => 'cht', 'id' => $model->id]);
  } else {
    $routeEN = route($route, ['lang' => 'en']);
    $routeCHS = route($route, ['lang' => 'chs']);
    $routeCHT = route($route, ['lang' => 'cht']);
  }
?>

<div id="page-header" class="poly-bg-5 font-inverse">
  <div id="mobile-navigation">
    <button id="nav-toggle" class="collapsed" data-toggle="collapse" data-target="#page-sidebar"><span></span></button>
    <a href="{{ route('home', ['lang' => $lang]) }}" class="logo-content-small" title="{{ config('app.name') }}"></a>
  </div>

  <div id="header-logo" class="logo-bg">
    <a href="{{ route('home', ['lang' => $lang]) }}" class="logo-content-big" title="{{ config('app.name') }}">
      {{ config('app.name') }}
    </a>
    <a href="{{ route('home', ['lang' => $lang]) }}" class="logo-content-small" title="{{ config('app.name') }}">
      {{ config('app.name') }}
    </a>
    <a id="close-sidebar" href="#" title="Close sidebar">
      <i class="glyph-icon icon-angle-left"></i>
    </a>
  </div>

  <div id="header-nav-left">
    <div class="user-account-btn dropdown">
      <a href="#" title="My Account" class="user-profile clearfix" data-toggle="dropdown">
        <img width="28" src="{{ asset('assets/img/gravatar.jpg') }}" alt="Profile image">
        <span>{{ $member->username }}</span>
        <i class="glyph-icon icon-angle-down"></i>
      </a>
      <div class="dropdown-menu float-left">
        <div class="box-sm">
          <div class="login-box clearfix">
            <div class="user-info">
              <span>
                USD {{ number_format($member->package_amount, 0) }}
                <i>@lang('common.member')</i>
              </span>
              <a href="{{ route('settings.account', ['lang' => $lang]) }}" title="Edit profile">@lang('sidebar.settingsLink1')</a>
              <a href="{{ route('settings.bank', ['lang' => $lang]) }}" title="View notifications">@lang('sidebar.settingsLink1')</a>
            </div>
          </div>
          <div class="divider"></div>
          <div class="pad5A button-pane button-pane-alt text-center">
            <a href="{{ route('logout', ['lang' => $lang]) }}" class="btn display-block font-normal btn-danger">
              <i class="glyph-icon icon-power-off"></i>
             @lang('sidebar.logout')
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

    <div class="dropdown" id="dashnav-btn">
      <a href="#" data-toggle="dropdown" data-placement="bottom" class="popover-button-header tooltip-button" title="Language">
        <i class="glyph-icon icon-linecons-globe"></i>
      </a>
      <div class="dropdown-menu float-right">
        <div class="box-sm">
          <div class="pad5T pad5B pad10L pad10R dashboard-buttons clearfix">
            <a href="{{ $routeEN }}" class="btn vertical-button remove-border btn-info" title="">
              <span class="glyph-icon icon-separator-vertical pad0A medium">
                <i class="glyph-icon icon-language opacity-80 font-size-20"></i>
              </span>
              English
            </a>

            <a href="{{ $routeCHS }}" class="btn vertical-button remove-border btn-warning" title="">
              <span class="glyph-icon icon-separator-vertical pad0A medium">
                <i class="glyph-icon icon-language opacity-80 font-size-20"></i>
              </span>
              简体中文
            </a>

            <a href="{{ $routeCHT }}" class="btn vertical-button remove-border btn-danger" title="">
              <span class="glyph-icon icon-separator-vertical pad0A medium">
                <i class="glyph-icon icon-language opacity-80 font-size-20"></i>
              </span>
              繁體中文
            </a>
          </div>
        </div>
      </div>
    </div>

    <a class="header-btn" id="logout-btn" href="{{ route('logout', ['lang' => $lang]) }}" title="{{ \Lang::get('sidebar.logout') }}">
      <i class="glyph-icon icon-linecons-lock"></i>
    </a>
  </div><!-- #header-nav-right -->
</div>
