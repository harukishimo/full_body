class User < ApplicationRecord
    has_many :participant_stamps, dependent: :destroy
    has_many :quiz_answers, dependent: :destroy
end
