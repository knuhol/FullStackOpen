import { Message } from './Message'

export const LoginForm = ({
  handleLogin,
  username,
  setUsername,
  password,
  setPassword,
  message,
  isError,
}) => (
  <div>
    <h2>Log in to application</h2>
    {message !== '' && <Message message={message} isError={isError} />}
    <form onSubmit={handleLogin} className="pure-form pure-form-stacked">
      <fieldset>
        <input
          placeholder="Username"
          type="text"
          name="Username"
          value={username}
          onChange={({ target }) => {
            setUsername(target.value)
          }}
        />
        <input
          placeholder="Password"
          type="password"
          value={password}
          name="Password"
          onChange={({ target }) => {
            setPassword(target.value)
          }}
        />
        <button className="pure-button pure-button-primary" type="submit">
          Log in
        </button>
      </fieldset>
    </form>
  </div>
)
