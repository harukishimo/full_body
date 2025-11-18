class Spot < ApplicationRecord
    has_many :event_spots, dependent: :destroy
    belongs_to :vendor, optional: true
    belongs_to :discussion, optional: true
end