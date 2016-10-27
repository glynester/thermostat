ENV['RACK_ENV'] ||= 'development'

require 'sinatra/base'
require 'sinatra/flash'
require_relative 'data_mapper_setup'

class ThermostatApi < Sinatra::Base

  get '/' do
    "API for Thermostat - welcome!"
  end

  post '/settings' do
  # get '/settings/xxx' do
    headers 'Access-Control-Allow-Origin' => '*'
    settings = ThermostatSettings.first
    temperature = settings.temperature
    city = settings.city
    "city (ex DB) = #{city} and temperature (ex DB) = #{temperature}"
  end

  get '/settings' do
    headers 'Access-Control-Allow-Origin' => '*'
    t = params[:temp]
    c = params[:city]
    "city = #{c} and temperature = #{t}"
    ThermostatSettings.create(temperature: params[:temp], city: params[:city])
  end

  # Update your UI so that the thermostat communicates changes
  # to the API. For example, it could make a POST request to
  # localhost:4567/temperature, with the new temperature. On
  # page refresh, the thermostat could make a GET request to
  # localhost:4567/temperature to get the temperature.
  # Save the selected city information using the API too.

  # run! if app_file == $0
end
