ENV['BUNDLE_GEMFILE'] ||= File.expand_path('../Gemfile', __FILE__)
require 'bundler/setup' if File.exists?(ENV['BUNDLE_GEMFILE'])
require 'rubygems'
require 'uri'
require 'pathname'
 
APP_ROOT = Pathname.new(File.expand_path('../', __FILE__))
APP_NAME = APP_ROOT.basename.to_s