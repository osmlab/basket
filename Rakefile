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

    #puts "parsed json: #{parsed}"

    #query = parsed[0]['excerpt']

    #puts "excerpt is : #{query}"


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

                layout: post
title: GIS Support for the MSF Ebola response in Guinea
excerpt: "A case study created by MSF highlighting the use of GIS during the Ebola response in Guinea."
categories: articles
tags: [Ebola, Guinea, MSF, Case Study, GIS, '2014']
author: MSF
image:
  feature: 2014-07-01-Ebola-GIS_feature.jpg
comments: true
share: true
ads: false
coord: "9.6107,-13.6007"
        EOT



    end



    parsed.each do |child|
        write_base = child['title']
        write_filename = child['date'] + '-' + write_base + ".md"
        write_path = APP_ROOT.join('../_posts/articles', write_filename)
        postfile = File.open(write_path, 'w+')
        postfile.puts "---"
        postfile.puts "layout: post"
        puts child['title']
        postfile.puts "title: #{child['title']}" 
        puts child['excerpt']
        postfile.puts "excerpt: #{child['excerpt']}"
        postfile.puts "categories: articles"
        puts child['tags']
        postfile.puts "tags: #{child['tags']}"
        puts child['author']
        postfile.puts "author: #{child['author']}"
        puts child['image']
        postfile.puts "image:"
        postfile.puts "  feature: #{child['baseurl']}#{child['image']}"
        postfile.puts "comments: true"
        postfile.puts "share: true"
        postfile.puts "ads: false"
        puts child['lat']
        puts child['lon']
        postfile.puts "coord: '#{child['lat']},#{child['lon']}'"
        postfile.puts "---"
        puts child['content']
        postfile.puts child['content']
        postfile.close
    end
    #tweet_attrs.each do |attrs|
     #   puts "an attribute #{attrs}"
    #end

 
    #raise file_exists_mes if File.exist?(post_path)


  end
end