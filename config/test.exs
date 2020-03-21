use Mix.Config

# Configure your database
config :blurble, Blurble.Repo,
  username: "postgres",
  password: "postgres",
  database: "blurble_test",
  hostname: "localhost",
  pool: Ecto.Adapters.SQL.Sandbox

# We don't run a server during test. If one is required,
# you can enable the server option below.
config :blurble, BlurbleWeb.Endpoint,
  http: [port: 4002],
  server: false

# Print only warnings and errors during test
config :logger, level: :warn
