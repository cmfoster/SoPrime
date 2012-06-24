Soprime::Application.routes.draw do
  devise_for :users
  root :to => "home#index"
  match "weddings" => "home#weddings", :as => :weddings
  
  resource :request_forms, :only => [:create, :update, :new]
end
