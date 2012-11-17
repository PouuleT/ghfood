Ghfood::Application.routes.draw do 
  root :to => "application#index"
  match "/recipe/1" => "application#bolo", as: "bolo"
end
