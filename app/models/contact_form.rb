class ContactForm < ApplicationRecord
   after_create :send_notif

  def send_notif
    UserMailer.contact(self).deliver_now
  end
end
