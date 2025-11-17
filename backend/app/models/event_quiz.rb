class EventQuiz < ApplicationRecord
    has_many :quiz_answers, dependent: :destroy
    belongs_to :event_content, optional: true
end