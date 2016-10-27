require 'data_mapper'
require 'dm-postgres-adapter'

require_relative '../models/thermostat_settings'

DataMapper.setup(:default, ENV['DATABASE_URL'] || "postgres://postgres:password@localhost/thermostat_api_#{ENV['RACK_ENV']}")
DataMapper.finalize
DataMapper.auto_upgrade!
