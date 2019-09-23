Rails.application.routes.draw do
  root 'todos#index'
  post 'todos', to: 'todos#create'
  patch 'todos/:id/change_status', to: 'todos#change_status'
end
