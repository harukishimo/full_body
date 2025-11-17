class EventSpot < ApplicationRecord
    has_many :participant_stamps, dependent: :destroy
    belongs_to :event_content, optional: true
    belongs_to :spot, optional: true
end