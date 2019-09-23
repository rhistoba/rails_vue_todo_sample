Rails.application.routes.draw do
  root 'todos#index'
  post 'todos', to: 'todos#create'
end
