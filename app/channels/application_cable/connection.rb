module ApplicationCable
  class Connection < ActionCable::Connection::Base
    identified_by :current_user

    def connect
      p 'connect'
      self.current_user = find_verified_user
      logger.add_tags "User: #{current_user.id}"
    end

    def disconnect; end

    private

    def find_verified_user
      User.find_by(id: cookies.encrypted[:user_id]) ||
        reject_unauthorized_connection
    end
  end
end
