class UserMailer < ApplicationMailer

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.user_mailer.contact.subject
  #
  def contact(contact_form)
    @contact_form = contact_form
    mail(
      to: 'acardnicolas91@gmail.com',
      #body: @contact_form.content,
      subject: "Nouveau message de #{@contact_form.nom || @contact_form.email}"
    )
  end

end
