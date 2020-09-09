class AuthChannel < ApplicationCable::Channel
  def subscribed
    stream_for current_user
    broadcast_to(
      current_user,
      current_user_id: current_user.id,
      current_user_name: current_user.name
    )
  end

  def unsubscribed; end
end
