Soprime::Application.routes.draw do
  devise_for :users
  root :to => "home#index"
  match "weddings" => "home#weddings", :as => :weddings
  match "clubs" => "home#clubs", :as => :clubs
  
  resource :request_forms, :only => [:create, :update, :new]
end
