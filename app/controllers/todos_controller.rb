class TodosController < ApplicationController
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

  private

  def todo_params
    params.require(:todo).permit(
      :title,
      :deadline
    )
  end
end
