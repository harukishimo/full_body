class QuizAnswer < ApplicationRecord
    belongs_to :event_quiz, optional: true
    belongs_to :user, optional: true
end