<div id="page-sidebar" class="bg-black font-inverse">
  <div class="scroll-sidebar">
    <ul id="sidebar-menu">
      <li class="header"><span>Overview</span></li>
      <li>
        <a href="{{ route('admin.home') }}" title="Home">
          <i class="glyph-icon icon-linecons-shop"></i>
          <span>Home</span>
        </a>
      </li>

      <li>
        <a href="{{ route('admin.settings.account') }}">
          <i class="glyph-icon icon-linecons-cog"></i>
          <span>Account Settings</span>
        </a>
      </li>

      <li>
        <a href="#" title="Announcement"><i class="glyph-icon icon-linecons-megaphone"></i>&nbsp;Announcement</a>
        <div class="sidebar-submenu">
          <ul>
            <li>
              <a href="{{ route('admin.announcement.create') }}">
                <span>Create</span>
              </a>
            </li>
            <li>
              <a href="{{ route('admin.announcement.list') }}">
                <span>List</span>
              </a>
            </li>
          </ul>
        </div>
      </li>

      <li>
        <a href="#" title="Package">
          <i class="glyph-icon icon-linecons-params"></i>&nbsp;Package
        </a>
        <div class="sidebar-submenu">
          <ul>
            <li>
              <a href="{{ route('admin.settings.package') }}">
                <span>Settings</span>
              </a>
            </li>
          </ul>
        </div>
      </li>

      <li class="divider"></li>
      <li class="header"><span>Member</span></li>

      <li>
        <a href="#" title="Member">
          <i class="glyph-icon icon-linecons-user"></i>
          <span>Member</span>
        </a>
        <div class="sidebar-submenu">
          <ul>
            <li>
              <a href="{{ route('admin.member.register') }}">
                <span>Register ROOT member</span>
              </a>
            </li>
            <li>
              <a href="{{ route('admin.member.register2') }}">
                <span>Register member</span>
              </a>
            </li>
            <li>
              <a href="{{ route('admin.member.wallet') }}">
                <span>Wallet List</span>
              </a>
            </li>
            <li>
              <a href="{{ route('admin.member.list') }}">
                <span>Member List</span>
              </a>
            </li>
          </ul>
        </div><!-- .sidebar-submenu -->
      </li>

      <li class="divider"></li>
      <li class="header"><span>Shares</span></li>

      <li>
        <a href="#" title="Shares"><i class="glyph-icon icon-linecons-heart"></i>&nbsp;Shares</a>
        <div class="sidebar-submenu">
          <ul>
            <li>
              <a href="{{ route('admin.shares.sellAdmin') }}">
                <span>Sell</span>
              </a>
            </li>
            <li>
              <a href="{{ route('admin.settings.shares') }}">
                <span>Settings</span>
              </a>
            </li>
            <li>
              <a href="{{ route('admin.shares.split') }}">
                <span>Split</span>
              </a>
            </li>
            <li>
              <a href="{{ route('admin.shares.buy') }}">
                <span>Buy List</span>
              </a>
            </li>
            <li>
              <a href="{{ route('admin.shares.sell') }}">
                <span>Sell List</span>
              </a>
            </li>
            <li>
              <a href="{{ route('admin.shares.lock') }}">
                <span>Freeze List</span>
              </a>
            </li>
          </ul>
        </div>
      </li>

      <li class="divider"></li>
      <li class="header"><span>Bonus</span></li>

      <li>
        <a href="#" title="Bonus"><i class="glyph-icon icon-linecons-star"></i>&nbsp;Bonus</a>
        <div class="sidebar-submenu">
          <ul>
            <li>
              <a href="{{ route('admin.bonus.addStatement') }}">
                <span>Add Statement</span>
              </a>
            </li>
            <li>
              <a href="{{ route('admin.bonus.all') . '?t=direct' }}">
                <span>Direct Statement</span>
              </a>
            </li>

            <li>
              <a href="{{ route('admin.bonus.all') . '?t=group' }}">
                <span>Group Statement</span>
              </a>
            </li>

            <li>
              <a href="{{ route('admin.bonus.all') . '?t=override' }}">
                <span>Override Statement</span>
              </a>
            </li>
          </ul>
        </div>
      </li>

      <li class="divider"></li>
      <li class="header"><span>Transaction</span></li>

      <li>
        <a href="#" title="Withdraw"><i class="glyph-icon icon-linecons-money"></i>&nbsp;Withdraw</a>
        <div class="sidebar-submenu">
          <ul>
            <li>
              <a href="{{ route('admin.withdraw.addStatement') }}">
                <span>Add Statement</span>
              </a>
            </li>
            <li>
              <a href="{{ route('admin.withdraw.all') }}">
                <span>Statement</span>
              </a>
            </li>
          </ul>
        </div>
      </li>

      <li>
        <a href="#" title="Transfer"><i class="glyph-icon icon-linecons-money"></i>&nbsp;Transfer</a>
        <div class="sidebar-submenu">
          <ul>
            <li>
              <a href="{{ route('admin.transfer.addStatement') }}">
                <span>Add Statement</span>
              </a>
            </li>
            <li>
              <a href="{{ route('admin.transfer.all') }}">
                <span>Transfer statement</span>
              </a>
            </li>
          </ul>
        </div>
      </li>
    </ul><!-- #sidebar-menu -->
  </div>
</div>
