require 'rails_helper'

describe Rooms::RoomInterface do
  subject(:interface) { described_class.new(current_user, room) }

  let(:current_user) { User.create! }
  let(:room) { Room.create! }

  describe '#build' do
    let(:current_user) { User.new }
    let(:room) { Room.new }

    it 'builds' do
      expect(interface.build).to be_kind_of(Room)
    end
  end

  describe '#move' do
    it 'moves' do
      expect(interface.move(0)).to be_kind_of(Room)
      expect(room.cells).to eq [current_user.id, nil, nil, nil, nil, nil, nil, nil, nil]
    end
  end

  describe '#new_game' do
    it 'creates' do
      expect(interface.new_game).to be_kind_of(Room)
      expect(room.cells).to eq [nil, nil, nil, nil, nil, nil, nil, nil, nil]
    end
  end

  describe '#subscribers' do
    it 'finds users' do
      expect(interface.subscribers).to eq []
    end
  end
end
