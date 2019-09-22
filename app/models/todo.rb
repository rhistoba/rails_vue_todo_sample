class Todo < ApplicationRecord
  enum status: { in_progress: 0, done: 1 }

  validates :title, presence: true
end
