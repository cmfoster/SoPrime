Soprime::Application.routes.draw do
  devise_for :users
  root :to => "home#index"
  
  resource :request_forms, :only => [:create, :update, :new]
end
