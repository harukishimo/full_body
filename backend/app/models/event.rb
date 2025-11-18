class Discussion < ApplicationRecord
    has_many :event_contents, dependent: :destroy
end
