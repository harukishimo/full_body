class Api::V1::DiscussionsController < ApplicationController
    def create
        req = Discussion.create(
            name: params[:name]
        )
        render json: {id: req.id, name: req.name}
    end
end