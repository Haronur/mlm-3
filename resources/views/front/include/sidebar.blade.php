<div id="page-sidebar" class="bg-black font-inverse">
  <div class="scroll-sidebar">
    <ul id="sidebar-menu">
      <li class="header"><span>Overview</span></li>
      <li>
        <a href="{{ route('home', ['lang' => $lang]) }}" title="{{ \Lang::get('sidebar.home') }}">
          <i class="glyph-icon icon-linecons-shop"></i>
          <span>@lang('sidebar.home')</span>
        </a>
      </li>
      <li>
        <a href="{{ route('announcement.list', ['lang' => $lang]) }}" title="{{ \Lang::get('sidebar.announcementTitle') }}">
          <i class="glyph-icon icon-linecons-megaphone"></i>
          <span>@lang('sidebar.announcementTitle')</span>
        </a>
      </li>

      <li class="divider"></li>
      <li class="header"><span>Member</span></li>
      <li>
        <a href="#" title="{{ \Lang::get('sidebar.registerTitle') }}">
          <i class="glyph-icon icon-linecons-user"></i>
          <span>@lang('sidebar.registerTitle')</span>
        </a>
        <div class="sidebar-submenu">
          <ul>
            <li><a href="{{ route('member.register', ['lang' => $lang]) }}"><span>@lang('sidebar.registerLink1')</span></a></li>
            <li><a href="{{ route('member.registerHistory', ['lang' => $lang]) }}"><span>@lang('sidebar.registerLink2')</span></a></li>
            <li><a href="{{ route('member.upgrade', ['lang' => $lang]) }}"><span>@lang('sidebar.registerLink3')</span></a></li>
          </ul>
        </div><!-- .sidebar-submenu -->
      </li>
      <li>
        <a href="#" title="{{ \Lang::get('sidebar.settingsTitle') }}">
          <i class="glyph-icon icon-linecons-cog"></i>
          <span>@lang('sidebar.settingsTitle')</span>
        </a>
        <div class="sidebar-submenu">
          <ul>
            <li><a href="{{ route('settings.account', ['lang' => $lang]) }}" title="Chart boxes"><span>@lang('sidebar.settingsLink1')</span></a></li>
            <li><a href="{{ route('settings.bank', ['lang' => $lang]) }}" title="Chart boxes"><span>@lang('sidebar.settingsLink2')</span></a></li>
          </ul>
        </div><!-- .sidebar-submenu -->
      </li>
      <li>
        <a href="#" title="{{ \Lang::get('sidebar.networkTitle') }}">
          <i class="glyph-icon icon-linecons-diamond"></i>
          <span>@lang('sidebar.networkTitle')</span>
        </a>
        <div class="sidebar-submenu">
          <ul>
            <li><a href="{{ route('network.unilevel', ['lang' => $lang]) }}" title="Responsive tabs"><span>@lang('sidebar.networkLink2')</span></a></li>
          </ul>
        </div><!-- .sidebar-submenu -->
      </li>

      <li class="divider"></li>
      <li class="header"><span>Transaction</span></li>
      <li>
        <a href="#" title="{{ \Lang::get('sidebar.sharesTitle') }}">
          <i class="glyph-icon icon-linecons-heart"></i>
          <span>@lang('sidebar.sharesTitle')</span>
        </a>
        <div class="sidebar-submenu">
          <ul>
            <li><a href="{{ route('shares.market', ['lang' => $lang]) }}"><span>@lang('sidebar.sharesLink1')</span></a></li>
            <li><a href="{{ route('shares.lock', ['lang' => $lang]) }}"><span>@lang('sidebar.sharesLink2')</span></a></li>
            <li><a href="{{ route('shares.statement', ['lang' => $lang]) }}"><span>@lang('sidebar.sharesLink3')</span></a></li>
          </ul>
        </div><!-- .sidebar-submenu -->
      </li>

      <li>
        <a href="#" title="{{ \Lang::get('sidebar.transactionTitle') }}">
          <i class="glyph-icon icon-linecons-star"></i>
          <span>@lang('sidebar.transactionTitle')</span>
        </a>
        <div class="sidebar-submenu">
          <ul>
            <li><a href="{{ route('transaction.transfer', ['lang' => $lang]) }}"><span>@lang('sidebar.transactionLink1')</span></a></li>
            <li><a href="{{ route('transaction.withdraw', ['lang' => $lang]) }}"><span>@lang('sidebar.transactionLink2')</span></a></li>
            <li><a href="{{ route('transaction.statement', ['lang' => $lang]) }}"><span>@lang('sidebar.transactionLink3')</span></a></li>
          </ul>
        </div><!-- .sidebar-submenu -->
      </li>

      <li>
        <a href="#" title="{{ \Lang::get('sidebar.statementTitle') }}">
          <i class="glyph-icon icon-linecons-money"></i>
          <span>@lang('sidebar.statementTitle')</span>
        </a>
        <div class="sidebar-submenu">
          <ul>
            <li><a href="{{ route('bonus.statement', ['lang' => $lang]) }}"><span>@lang('sidebar.statementLink1')</span></a></li>
            <li><a href="{{ route('summary.statement', ['lang' => $lang]) }}"><span>@lang('sidebar.statementLink2')</span></a></li>
          </ul>
        </div><!-- .sidebar-submenu -->
      </li>

    </ul><!-- #sidebar-menu -->
  </div>
</div>
