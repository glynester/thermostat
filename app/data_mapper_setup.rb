require 'data_mapper'
require 'dm-postgres-adapter'

require_relative '../models/thermostat_api'

DataMapper.setup(:default, ENV['DATABASE_URL'] || "postgres://postgres:password@localhost/thermostat_api_#{ENV['RACK_ENV']}")
