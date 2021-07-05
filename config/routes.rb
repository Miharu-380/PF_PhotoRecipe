Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  devise_for :users
  # ========== ユーザー(user) ==========
  scope module: :public do
    root to: 'homes#top'
    get 'about' => 'homes#about'
  #   get 'items/search' => 'items#search'

  #   resources :posts do
  #     resource :reviews, only: [:create, :destroy]
  #     resource :likes, only: [:create, :destroy]
  #     resources :bookmarks, only: [:create, :destroy, :index]
  #   end

  #   resources :tags, only: [:index, :show]

  #   resources :contacs, only: [:new, :create]
  #   get 'contacts/complete' => 'contacts#complete'

  #   resources :contacts, only: [:new, :create]
  #   post 'contacts/confirm' => 'contacts#confirm', as: 'contacts_confirm'
  #   post 'contacts/back' => 'contacts#back'
  #   get 'contacts/done' => 'contacts#done'

    resources :users, only: [:show, :edit, :update, :destroy] do
      resource :relationships, only: [:create, :destroy]
    	get 'followings' => 'relationships#followings', as: 'followings'
  	  get 'followers' => 'relationships#followers', as: 'followers'
    end
    get 'users/unsubscribe' => 'users#unsubscribe'
    patch 'users/withdraw' => 'users#withdraw'
  end

  # get 'searches/search' => 'search#search'


  # # ========== 管理者(admin) ==========
  devise_for :admins

  # namespace :admin do
  #   root to: 'homes#top'
  #   resources :users, only: [:index, :show, :edit, :update]
  #   resources :contacts, only: [:index, :show]
  # end

end
