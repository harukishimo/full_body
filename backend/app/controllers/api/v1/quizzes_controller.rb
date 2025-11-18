class Api::V1::QuizzesController < ApplicationController
    def create
        req = Quiz.create(
            question: params[:question],
            default_points: params[:default_points]
        )
        render json: {id: req.id, question: req.question, default_points: req.default_points}
    end
end