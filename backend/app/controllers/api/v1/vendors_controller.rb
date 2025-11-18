class Api::V1::VendorsController < ApplicationController

    def create
        req = Vendor.create(
            name: params[:name],
            profile: params[:profile],
            links_json: params[:links_json]
        )

        render json: {id: req.id, name: req.name, profile: req.profile, links_json: req.links_json}
    end
end