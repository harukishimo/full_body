class Content < ApplicationRecord
    has_many :event_contents, dependent: :destroy
end