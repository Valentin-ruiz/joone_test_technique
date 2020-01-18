require 'rails_helper'

RSpec.describe ProductsController, type: :controller do
	describe "GET index" do
    it "returns a 200" do
      get :index
      expect(response).to have_http_status(200)
    end

    it "provide a json file" do
      get :index
      body = ActiveSupport::JSON.decode(response.body)
      expect(body).not_to be_nil
    end
  end
end
