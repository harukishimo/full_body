class Speaker< ApplicationRecord
    has_many :spots, dependent: :destroy
end