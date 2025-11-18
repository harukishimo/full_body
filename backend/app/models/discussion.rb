class Discussion < ApplicationRecord
    has_many :spots, dependent: :destroy
end