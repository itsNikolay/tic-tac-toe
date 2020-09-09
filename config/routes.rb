Rails.application.routes.draw do
  resources :users
  get 'auth/create'
  root 'board#index'
  resources :auth, only: :create
end
