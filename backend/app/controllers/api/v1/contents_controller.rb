class Api::V1::ContentsController < ApplicationController
    def create
        req = Content.create(
            name: params[:name],
            description: params[:description]
        )
        render json: {id: req.id, name: req.name, description: req.description}
    end

    def index
        contents = Content.all
        render json: contents
    end
end
  