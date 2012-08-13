require 'bundler'
Bundler.require

use Rack::Rewrite do
  r301 %r{^(.*\/)$}, '$1index.html'
end

use Rack::Auth::Basic, "Marketing Site" do |username, password|
  'redwoodpho' == password
end

use Rack::Static, :urls => ["/"]

class MarketingSite
  def call(env)
    [404, {"Content-Type" => "text/html"}, ["This page does not exist."]]
  end
end
run MarketingSite.new
