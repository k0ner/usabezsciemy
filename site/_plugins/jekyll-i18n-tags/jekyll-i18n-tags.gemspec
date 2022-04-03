require 'English'

Gem::Specification.new do |s|
  s.name = 'jekyll-i18n-tags'
  s.version = '0.0.1'
  s.author = 'Konrad @devstories'
  s.email = 'konrad@devstories.pl'
  s.summary = 'Translate your Jekyll templates.'
  s.description = 'Tags for translating Jekyll templates.'
  s.homepage = 'https://github.com/k0ner/jekyll-i18n-tags'
  s.license = 'MIT'

  s.files = `git ls-files`.split($INPUT_RECORD_SEPARATOR).grep(%r{^lib/})
  s.extra_rdoc_files = ['README.md', 'LICENSE']

  s.add_development_dependency 'rubocop', '~> 1.26', '>= 1.26'
end
