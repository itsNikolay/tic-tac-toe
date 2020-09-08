class RoomChannel < ApplicationCable::Channel
  def subscribed
    @room = Rooms::RoomInterface.new(current_user, nil).build
    stream_for current_user
    broadcast_subscribers
    broadcast_to(current_user, current_user_id: current_user.id, current_user_name: current_user.name)
  end

  def unsubscribed; end

  def move(data)
    index = data['index'].to_i
    @room = Rooms::RoomInterface.new(current_user, @room).move(index)
    broadcast_subscribers
  end

  def new_game
    @room = Rooms::RoomInterface.new(current_user, @room).new_game
    broadcast_subscribers
  end

  private

  def broadcast_subscribers
    User.where(id: @room.subscribed_user_ids).each do |user|
      broadcast_to(user, room: @room)
    end
  end
end
