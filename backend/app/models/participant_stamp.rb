class ParticipantStamp < ApplicationRecord
    belongs_to :event_spot, optional: true
    belongs_to :user, optional: true
end