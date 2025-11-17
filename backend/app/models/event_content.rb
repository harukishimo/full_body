class EventContent < ApplicationRecord
    has_many :event_spots, dependent: :destroy
    has_many :event_quizzes, dependent: :destroy
    belongs_to :event, optional: true
    belongs_to :content, optional: true
end