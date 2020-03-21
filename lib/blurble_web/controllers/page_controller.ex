defmodule BlurbleWeb.PageController do
  use BlurbleWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
