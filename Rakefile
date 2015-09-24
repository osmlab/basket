require ::File.expand_path('../config/environment', __FILE__)
require 'rake'
require 'active_support'
require 'active_support/core_ext/object'
 
namespace :gen do
  desc "Create an empty post in /_posts/articles/, e.g., rake gen:post TITLE='This is a Sample Title'"
  task :post do

    
      

    err_mes = "Must specificy post TITLE, e.g., rake gen:post TITLE='This is a Sample Title'"
    raise err_mes unless ENV.has_key?('TITLE')
    post_title = ENV['TITLE']
    date = ENV['DATE']
    base_filename = ENV['FN'] || ENV['TITLE'].downcase.gsub(/\s+/, "-")
    post_filename = base_filename + ".markdown"
    post_path = APP_ROOT.join('../_posts/articles', post_filename)
    post_path2 = APP_ROOT.join('../_data/articles.json')
    puts "post_path2 is: #{post_path2}"
    file_exists_mes = "ERROR: post file '#{post_path}' already exists"
    tags = ENV['TAGS'] || "software engineering"
    tag_str = ""
    tags = tags.split(",").each { |tag| tag_str << '- ' + tag + "\n" }
    tag_str.chomp!

    parsed={}

    File.open(post_path2, 'r') do |f|
        puts "test1"
        json = f.read
        parsed = JSON.parse(json)
    end

    puts "parsed json: #{parsed}"

    query = parsed[0]['excerpt']

    puts "excerpt is : #{query}"

    #tweet_attrs.each do |attrs|
     #   puts "an attribute #{attrs}"
    #end


 
    #raise file_exists_mes if File.exist?(post_path)

    puts "Created #{post_path}"
    File.open(post_path, 'w+') do |f|
      f.write(<<-EOT)
        ---
        layout: post_simple
        title:  #{post_title}
        date:   #{date}
        author: "Clark Feusier"
        excerpt: ""
        tags:
        #{tag_str}
        ---
         
        Sample content goes here. This is the first paragraph that you should replace with your content for #{post_title}.
         
        Now, go write something awesome...
        EOT
    end
  end
end