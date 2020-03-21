defmodule Blurble.Repo do
  use Ecto.Repo,
    otp_app: :blurble,
    adapter: Ecto.Adapters.Postgres
end
