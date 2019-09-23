class TodosController < ApplicationController
  before_action :set_todo, only: %i(change_status)

  def index
    @todos = Todo.all
    @new_todo = Todo.new
  end

  def create
    @new_todo = Todo.new(todo_params)
    if @new_todo.save
      redirect_to root_path
    else
      @todos = Todo.all
      render :index
    end
  end

  def change_status
    @todo.update!(status: params[:status])
    render json: @todo
  end

  private

  def todo_params
    params.require(:todo).permit(
      :title,
      :deadline
    )
  end

  def set_todo
    @todo = Todo.find(params[:id])
  end
end
