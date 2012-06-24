class RequestForm < ActiveRecord::Base
  attr_accessible :email, :end_time, :event_city, :event_state, :event_type, :fname, :lname, :phone, :start_time
end
