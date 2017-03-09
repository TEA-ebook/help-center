require 'html-proofer'

task :test_dead_links do
  sh "bundle exec jekyll build"
  HTMLProofer.check_directory("./_site", {:allow_hash_href => true, :empty_alt_ignore => true}).run
end
