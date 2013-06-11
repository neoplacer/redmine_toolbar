require 'redmine'

Redmine::Plugin.register :redmine_toolbar do
  name 'Redmine Toolbar plugin'
  author 'Richard Gericke'
  description 'This plugin adds new buttons to the jstoolbar.'
  version '0.0.1'
  url 'http://www.task-vote.de'
  author_url 'http://www.MrRitchY.de'
end

class RedmineToolbarHookListener < Redmine::Hook::ViewListener
   # Adds javascript and stylesheet tags
   def view_layouts_base_html_head(context)
     javascript_include_tag('textile.js', :plugin => :redmine_toolbar) +
     stylesheet_link_tag('jstoolbar.css', :plugin => :redmine_toolbar)
end
end

