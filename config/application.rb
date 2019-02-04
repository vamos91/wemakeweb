require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module PersonalWebResume
  class Application < Rails::Application
    config.generators do |generate|
      generate.assets false
      generate.helper false
      generate.test_framework  :test_unit, fixture: false
    end
    config.assets.initialize_on_precompile = false
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 5.1
    #config.action_mailer.delivery_method = :postmark
    #config.action_mailer.postmark_settings = { :api_token => "f2c82725-bc9c-41e0-940c-e9032fe2b8f6" }
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded
    #config.i18n.default_locale = :fr
  end
end
