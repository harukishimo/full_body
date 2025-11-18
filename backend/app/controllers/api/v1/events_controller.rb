class Api::V1::EventsController < ApplicationController
    def create
        req = Event.create(
            name: params[:name]
        )
        render json: {id: req.id, name: req.name}
    end

    def index
        events = Event.all
        render json: events
    end
 end
  