class RoomChannel < ApplicationCable::Channel
  def subscribed
    @room = Room.find_or_create_by!(name: 'Main') do |room|
      room.update!(current_turn_user_id: current_user.id)
    end
    subscribed_user_ids = @room.subscribed_user_ids.concat([current_user.id]).uniq
    @room.update!(subscribed_user_ids: subscribed_user_ids)
    stream_for current_user
    broadcast_subscribers
    broadcast_to(current_user, current_user_id: current_user.id, current_user_name: current_user.name)
  end

  def unsubscribed; end

  def move(data)
    @room.reload
    cells = @room.cells.to_a
    index = data['index'].to_i
    cells[index] = current_user.id

    @room.update!(cells: cells, current_turn_user_id: current_turn_user_id, winner: winning)
    broadcast_subscribers
  end

  def new_game
    @room.update!(cells: Array.new(3 * 3), winner: nil)
    broadcast_subscribers
  end

  private

  def broadcast_subscribers
    User.where(id: @room.subscribed_user_ids).each do |user|
      broadcast_to(user, room: @room)
    end
  end

  def winning
    board = @room.cells
    player = current_user.id

    return unless (board[0] == player && board[1] == player && board[2] == player) ||
                  (board[3] == player && board[4] == player && board[5] == player) ||
                  (board[6] == player && board[7] == player && board[8] == player) ||
                  (board[0] == player && board[3] == player && board[6] == player) ||
                  (board[1] == player && board[4] == player && board[7] == player) ||
                  (board[2] == player && board[5] == player && board[8] == player) ||
                  (board[0] == player && board[4] == player && board[8] == player) ||
                  (board[2] == player && board[4] == player && board[6] == player)

    player
  end

  def current_turn_user_id
    index = @room.subscribed_user_ids.index(current_user.id)
    @room.subscribed_user_ids[index - 1]
  end
end
