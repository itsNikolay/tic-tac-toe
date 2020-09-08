module Rooms
  # Rooms::RoomInterface
  class RoomInterface
    LINES = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ].freeze

    attr_reader :current_user, :room

    delegate :cells, to: :room

    def initialize(current_user, room = nil)
      @current_user = current_user
      @room = room
    end

    def build
      @room = Room.find_or_create_by!(name: 'Main') do |room|
        room.update!(current_turn_user_id: current_user.id)
      end
      room.update!(subscribed_user_ids: subscribed_user_ids)
      room
    end

    def move(index)
      room.reload
      cells = @room.cells.to_a
      cells[index.to_i] = current_user.id

      room.update!(cells: cells, current_turn_user_id: current_turn_user_id, winner: winning)
      room
    end

    def new_game
      room.update!(cells: Array.new(3 * 3), winner: nil)
      room
    end

    def subscribers
      User.where(id: @room.subscribed_user_ids)
    end

    private

    def winning
      return unless LINES.find do |first, second, third|
        [
          cells[first]  == user_id,
          cells[second] == user_id,
          cells[third]  == user_id
        ].all?
      end

      user_id
    end

    def current_turn_user_id
      index = room.subscribed_user_ids.index(current_user.id) || current_user.id
      room.subscribed_user_ids[index - 1]
    end

    def subscribed_user_ids
      room.subscribed_user_ids.concat([current_user.id]).uniq
    end

    def user_id
      current_user.id
    end
  end
end
