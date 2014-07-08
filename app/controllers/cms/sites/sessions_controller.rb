module Cms
  module Sites

    # Handles Sign In/Out for public site.
    class SessionsController < Devise::SessionsController
      include Cms::ContentPage
      helper AuthenticationHelper
      helper UiElementsHelper

      template :default
      layout 'application'

      def new
        use_page_title 'Login'
        @rane_bg = true
        @no_padding_bg = true
        super
      end


    end
  end
end
