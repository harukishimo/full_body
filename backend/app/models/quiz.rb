class Quiz< ApplicationRecord
    has_many :event_quizzes, dependent: :destroy
end