module Cms
  # Handles the login/logout function of the site.
  class SessionsController < Devise::SessionsController
    include Cms::AdminController
    before_filter :redirect_to_cms_site, :only => [:new]

    layout 'application'

    def new
      use_page_title 'Login'
      @rane_bg = true
      @no_padding_bg = true
      super
    end

  end
end