# -*- coding: utf-8 -*-

module Jekyll
  class I18nTag < Liquid::Tag
    def initialize(tag_name, text, tokens)
      super
      @text = text.strip
    end

    # Lookup allows access to the page/post variables through the tag context
    def lookup(context, name)
      lookup = context

      name.split(".").each do |value|
        lookup = lookup ? lookup[value] : break
      end

      lookup || name
    end

    def render(context)
      lang = context['site']['lang']
      raise "Page language not specified: #{context['page']['path']}" unless lang

      site = context['site']
      translations = site.data['translations'][lang]
      raise 'Translations not provided' unless translations

      tag = lookup(context, @text) || @text
      translation = lookup(translations, tag)
      raise "Translation not provided: #{@text} #{t}" unless translation

      translation
    end
  end
end

Liquid::Template.register_tag('t', Jekyll::I18nTag)
