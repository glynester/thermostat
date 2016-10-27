class ThermostatApi
  
  include DataMapper::Resource

  property :id,               Serial
  property :temperature,      String
  property :city,             String

end
