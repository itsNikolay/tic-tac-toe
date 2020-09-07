class RoomChannel < ApplicationCable::Channel
  def subscribed
    @room = Room.find_or_create_by!(name: 'Main') do |room|
      room.update!(current_turn_user_id: current_user.id)
    end
    subscribed_user_ids = @room.subscribed_user_ids.concat([current_user.id]).uniq
    @room.update!(subscribed_user_ids: subscribed_user_ids)
    stream_for current_user
    broadcast_subscribers
  end

  def unsubscribed; end

  def move(data)
    @room.reload
    cells = @room.cells.to_a
    index = data['index'].to_i
    cells[index] = current_user.id

    @room.update!(cells: cells, current_turn_user_id: current_user.id)
    broadcast_subscribers
  end

  def new_game
    @room.update!(cells: Array.new(3 * 3))
    broadcast_subscribers
  end

  private

  def broadcast_subscribers
    User.where(id: @room.subscribed_user_ids).each do |user|
      broadcast_to(user, room: @room)
    end
  end
end
