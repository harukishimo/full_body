Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check


  namespace :api do
    namespace :v1 do
      get "health" => "health#index", as: :health_check
      get "get_stamps" => "stamps#index", as: :get_stamps
      resource :users, only: %i[new create]
      resource :events
      resource :contents
      resource :vendors
      resource :discussions
      resource :quizzes
    end
  end
  # Defines the root path route ("/")
  # root "posts#index"
end
