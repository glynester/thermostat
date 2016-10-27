ENV['RACK_ENV'] ||= 'development'

require 'sinatra/base'
require 'sinatra/flash'
# require_relative 'data_mapper_setup'

class ThermostatApi < Sinatra::Base

  get '/' do
    "API for Thermostat - welcome!"
  end

  post '/settings' do

  end

  get '/settings' do
    
  end
  # Update your UI so that the thermostat communicates changes
  # to the API. For example, it could make a POST request to
  # localhost:4567/temperature, with the new temperature. On
  # page refresh, the thermostat could make a GET request to
  # localhost:4567/temperature to get the temperature.
  # Save the selected city information using the API too.



  # run! if app_file == $0
end
