class RequestFormsController < ApplicationController
  
  def new
    @request_form = RequestForm.new
  end
  
  def create
    form = RequestForm.create!(params[:request_form])
    flash[:notice]="Form Created!"
  end
  
  def update
  end

end
