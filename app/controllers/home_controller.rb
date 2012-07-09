class HomeController < ApplicationController
  def index
    
  end
  
  def weddings
    @request = RequestForm.new
  end
  
end
