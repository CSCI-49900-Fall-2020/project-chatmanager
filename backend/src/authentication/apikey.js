const { LocalStrategy } = require('@feathersjs/authentication-local');
const { NotAuthenticated } = require('@feathersjs/errors');

class APIKeyStrategy extends LocalStrategy {
  verifyConfiguration() {
    const config = this.configuration;
    ['headerField', 'configField'].forEach(prop => {
      if (typeof config[prop] !== 'string') {
        throw new Error(`'${this.name}' authentication strategy requires a '${prop}' setting`);
      }
    });
    return config;
  }

  get configuration() {
    const authConfig = this.authentication.configuration;
    return authConfig[this.name];
  }

  // The parse function return the AuthenticationRequest object to authenticate
  parse (req) {
    const config = this.configuration;
    const header = req.headers[config.headerField];

    if (header) {
      return {
        strategy: this.name,
        apiKey: header
      };
    }

    return null;
  }

  async authenticate(authentication, params) {
    const { apiKey } = authentication;

    // check the apikey in the header to see if it matches the key in config
    const match = this.app.get(this.configuration.configField) === apiKey;

    if (!match) {
      throw new NotAuthenticated('Invalid API key');
    }

    return {
      authentication: {
        strategy: this.name,
      },
    };
  }
}

module.exports = APIKeyStrategy;
