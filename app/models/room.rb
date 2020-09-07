class Room < ApplicationRecord
  before_create :fill_cells

  def fill_cells
    self.cells = Array.new(3 * 3)
  end
end
